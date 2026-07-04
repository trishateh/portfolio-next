"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";

type TetrisPanelProps = {
  className?: string;
};

type Status = "idle" | "playing" | "paused" | "over";
type Matrix = number[][];
type Piece = { type: number; cells: Matrix; x: number; y: number };
type Board = (number | null)[][];

const COLS = 10;
const ROWS = 16;

// Spawn-orientation matrices for the 7 tetrominoes (index order I,O,T,S,Z,J,L).
const SHAPES: Matrix[] = [
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
];

// Brand-palette colors for the falling piece, indexed by piece type.
const COLORS = [
  "#5EEAD4", // I
  "#C084FC", // O
  "#8B5CF6", // T
  "#6366F1", // S
  "#A78BFA", // Z
  "#818CF8", // J
  "#2DD4BF", // L
];

const LINE_SCORES = [0, 100, 300, 500, 800];
const BEST_KEY = "tetris-best";

// Deterministic pre-baked idle pile (no Math.random at module/render scope).
// Digits 1-7 map to color index 0-6; "." is empty. Last row = bottom row.
const IDLE_TEMPLATE = [
  ".....7....",
  "....77....",
  "...4.7.2..",
  "1.44352.66",
  "11435522.6",
  "1.4335.226",
];

function shade(hex: string, factor: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * factor);
  const g = Math.round(((n >> 8) & 255) * factor);
  const b = Math.round((n & 255) * factor);
  return `rgb(${r}, ${g}, ${b})`;
}

const DARK_COLORS = COLORS.map((c) => shade(c, 0.68));

function emptyBoard(): Board {
  return Array.from({ length: ROWS }, () => Array<number | null>(COLS).fill(null));
}

function buildIdleBoard(): Board {
  const board = emptyBoard();
  const startRow = ROWS - IDLE_TEMPLATE.length;
  IDLE_TEMPLATE.forEach((line, r) => {
    for (let c = 0; c < COLS; c++) {
      const ch = line[c];
      board[startRow + r][c] = ch === "." ? null : Number(ch) - 1;
    }
  });
  return board;
}

function rotateMatrix(m: Matrix): Matrix {
  const n = m.length;
  const out: Matrix = Array.from({ length: n }, () => Array<number>(n).fill(0));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      out[c][n - 1 - r] = m[r][c];
    }
  }
  return out;
}

function collides(board: Board, cells: Matrix, px: number, py: number): boolean {
  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells[r].length; c++) {
      if (!cells[r][c]) continue;
      const x = px + c;
      const y = py + r;
      if (x < 0 || x >= COLS || y >= ROWS) return true;
      if (y >= 0 && board[y][x] != null) return true;
    }
  }
  return false;
}

function spawnX(cells: Matrix): number {
  return Math.floor((COLS - cells[0].length) / 2);
}

export default function TetrisPanel({ className }: TetrisPanelProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [nextType, setNextType] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const boardWrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nextCanvasRef = useRef<HTMLCanvasElement>(null);

  const statusRef = useRef<Status>("idle");
  const actionRef = useRef<{
    left: () => void;
    right: () => void;
    rotate: () => void;
    soft: () => void;
    hard: () => void;
  }>({ left() {}, right() {}, rotate() {}, soft() {}, hard() {} });
  const controlRef = useRef<{
    play: () => void;
    pause: () => void;
    resume: () => void;
  }>({ play() {}, pause() {}, resume() {} });

  // Load best score (client-only, hydration-safe).
  useEffect(() => {
    const raw = window.localStorage.getItem(BEST_KEY);
    if (raw != null) setBest(Number(raw));
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // Core game engine: canvas, loop, actions. Set up once.
  useEffect(() => {
    const canvas = canvasRef.current;
    const boardWrap = boardWrapRef.current;
    const container = containerRef.current;
    if (!canvas || !boardWrap || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cell = 0;

    const game = {
      board: buildIdleBoard(),
      current: null as Piece | null,
      bag: [] as number[],
      nextType: 0,
      score: 0,
      lines: 0,
      level: 1,
      interval: 800,
      acc: 0,
    };

    const sync = () => {
      setScore(game.score);
      setLines(game.lines);
      setLevel(game.level);
      setNextType(game.nextType);
    };

    const drawFromBag = (): number => {
      if (game.bag.length === 0) {
        const bag = [0, 1, 2, 3, 4, 5, 6];
        for (let i = bag.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [bag[i], bag[j]] = [bag[j], bag[i]];
        }
        game.bag = bag;
      }
      return game.bag.pop() as number;
    };

    const updateInterval = () => {
      game.interval = 800 * Math.pow(0.88, game.level - 1);
    };

    const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    const paintCell = (col: number, row: number, fill: string) => {
      if (row < 0) return;
      const gap = 1;
      roundRect(col * cell + gap, row * cell + gap, cell - gap * 2, cell - gap * 2, 2);
      ctx.fillStyle = fill;
      ctx.fill();
    };

    const paintGhost = (col: number, row: number, color: string) => {
      if (row < 0) return;
      const gap = 1;
      roundRect(col * cell + gap, row * cell + gap, cell - gap * 2, cell - gap * 2, 2);
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      if (!cell) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, COLS * cell, ROWS * cell);

      const idle = statusRef.current === "idle";
      ctx.globalAlpha = idle ? 0.4 : 1;

      // Empty-cell dark backing + locked cells.
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const v = game.board[r][c];
          if (v == null) {
            paintCell(c, r, "rgba(255,255,255,0.02)");
          } else {
            paintCell(c, r, DARK_COLORS[v]);
          }
        }
      }
      ctx.globalAlpha = 1;

      const cur = game.current;
      if (cur && !idle) {
        // Ghost at drop position.
        let gy = cur.y;
        while (!collides(game.board, cur.cells, cur.x, gy + 1)) gy++;
        for (let r = 0; r < cur.cells.length; r++) {
          for (let c = 0; c < cur.cells[r].length; c++) {
            if (cur.cells[r][c]) paintGhost(cur.x + c, gy + r, COLORS[cur.type]);
          }
        }
        // Falling piece.
        for (let r = 0; r < cur.cells.length; r++) {
          for (let c = 0; c < cur.cells[r].length; c++) {
            if (cur.cells[r][c]) paintCell(cur.x + c, cur.y + r, COLORS[cur.type]);
          }
        }
      }
    };

    const layout = () => {
      const w = boardWrap.clientWidth;
      const h = boardWrap.clientHeight;
      if (w === 0 || h === 0) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cell = Math.floor(Math.min(w / COLS, h / ROWS));
      const cssW = cell * COLS;
      const cssH = cell * ROWS;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      draw();
    };

    const lockAndSpawn = () => {
      const cur = game.current;
      if (!cur) return;
      for (let r = 0; r < cur.cells.length; r++) {
        for (let c = 0; c < cur.cells[r].length; c++) {
          if (cur.cells[r][c] && cur.y + r >= 0) {
            game.board[cur.y + r][cur.x + c] = cur.type;
          }
        }
      }
      // Clear full lines.
      let cleared = 0;
      for (let r = ROWS - 1; r >= 0; r--) {
        if (game.board[r].every((v) => v != null)) {
          game.board.splice(r, 1);
          game.board.unshift(Array<number | null>(COLS).fill(null));
          cleared++;
          r++; // re-check the row that shifted down
        }
      }
      if (cleared > 0) {
        game.score += LINE_SCORES[cleared] * game.level;
        game.lines += cleared;
        game.level = Math.floor(game.lines / 10) + 1;
        updateInterval();
      }
      spawn();
      sync();
    };

    const spawn = () => {
      const type = game.nextType;
      game.nextType = drawFromBag();
      const cells = SHAPES[type];
      const piece: Piece = { type, cells, x: spawnX(cells), y: -1 };
      if (collides(game.board, cells, piece.x, piece.y)) {
        game.current = null;
        gameOver();
        return;
      }
      game.current = piece;
    };

    // rAF loop with accumulated time (no interval drift).
    let rafId: number | null = null;
    let last = 0;
    const tick = (now: number) => {
      if (statusRef.current !== "playing") {
        rafId = null;
        return;
      }
      const dt = now - last;
      last = now;
      game.acc += dt;
      if (game.acc >= game.interval) {
        game.acc = 0;
        const cur = game.current;
        if (cur) {
          if (!collides(game.board, cur.cells, cur.x, cur.y + 1)) {
            cur.y++;
          } else {
            lockAndSpawn();
          }
        }
      }
      draw();
      rafId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (rafId == null) {
        last = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };
    const stopLoop = () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const go = (s: Status) => {
      statusRef.current = s;
      setStatus(s);
      if (s === "playing") startLoop();
      else stopLoop();
      draw();
    };

    function gameOver() {
      go("over");
      if (game.score > (Number(window.localStorage.getItem(BEST_KEY)) || 0)) {
        window.localStorage.setItem(BEST_KEY, String(game.score));
        setBest(game.score);
      }
      sync();
    }

    // Actions (shared by keyboard + on-screen controls).
    const moveLeft = () => {
      const cur = game.current;
      if (!cur || statusRef.current !== "playing") return;
      if (!collides(game.board, cur.cells, cur.x - 1, cur.y)) {
        cur.x--;
        draw();
      }
    };
    const moveRight = () => {
      const cur = game.current;
      if (!cur || statusRef.current !== "playing") return;
      if (!collides(game.board, cur.cells, cur.x + 1, cur.y)) {
        cur.x++;
        draw();
      }
    };
    const rotate = () => {
      const cur = game.current;
      if (!cur || statusRef.current !== "playing") return;
      const rotated = rotateMatrix(cur.cells);
      for (const k of [0, -1, 1, -2, 2]) {
        if (!collides(game.board, rotated, cur.x + k, cur.y)) {
          cur.cells = rotated;
          cur.x += k;
          draw();
          return;
        }
      }
      if (!collides(game.board, rotated, cur.x, cur.y - 1)) {
        cur.cells = rotated;
        cur.y--;
        draw();
      }
    };
    const softDrop = () => {
      const cur = game.current;
      if (!cur || statusRef.current !== "playing") return;
      if (!collides(game.board, cur.cells, cur.x, cur.y + 1)) {
        cur.y++;
        game.score += 1;
        game.acc = 0;
        sync();
        draw();
      }
    };
    const hardDrop = () => {
      const cur = game.current;
      if (!cur || statusRef.current !== "playing") return;
      let dist = 0;
      while (!collides(game.board, cur.cells, cur.x, cur.y + 1)) {
        cur.y++;
        dist++;
      }
      game.score += dist * 2;
      lockAndSpawn();
      draw();
    };

    const resetGame = () => {
      game.board = emptyBoard();
      game.bag = [];
      game.score = 0;
      game.lines = 0;
      game.level = 1;
      game.acc = 0;
      updateInterval();
      game.nextType = drawFromBag();
      spawn();
      sync();
    };

    actionRef.current = {
      left: moveLeft,
      right: moveRight,
      rotate,
      soft: softDrop,
      hard: hardDrop,
    };
    controlRef.current = {
      play: () => {
        resetGame();
        if (statusRef.current !== "over") go("playing");
      },
      pause: () => {
        if (statusRef.current === "playing") go("paused");
      },
      resume: () => {
        if (statusRef.current === "paused") go("playing");
      },
    };

    layout();

    const resizeObserver = new ResizeObserver(() => layout());
    resizeObserver.observe(boardWrap);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting && statusRef.current === "playing") go("paused");
        }
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    const onVisibility = () => {
      if (document.hidden && statusRef.current === "playing") go("paused");
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      actionRef.current = {
        left() {},
        right() {},
        rotate() {},
        soft() {},
        hard() {},
      };
      controlRef.current = { play() {}, pause() {}, resume() {} };
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard + outside-click listeners, active only while playing/paused.
  useEffect(() => {
    if (status !== "playing" && status !== "paused") return;
    const GAME_KEYS = new Set([
      "ArrowLeft",
      "ArrowRight",
      "ArrowDown",
      "ArrowUp",
      "Space",
      "KeyP",
    ]);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        controlRef.current.pause();
        return;
      }
      if (!GAME_KEYS.has(e.code)) return;
      e.preventDefault();
      if (e.code === "KeyP") {
        if (status === "playing") controlRef.current.pause();
        else controlRef.current.resume();
        return;
      }
      if (status !== "playing") return;
      switch (e.code) {
        case "ArrowLeft":
          actionRef.current.left();
          break;
        case "ArrowRight":
          actionRef.current.right();
          break;
        case "ArrowDown":
          actionRef.current.soft();
          break;
        case "ArrowUp":
          actionRef.current.rotate();
          break;
        case "Space":
          actionRef.current.hard();
          break;
      }
    };
    const onDocClick = (e: MouseEvent) => {
      const container = containerRef.current;
      if (container && !container.contains(e.target as Node)) {
        controlRef.current.pause();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [status]);

  // Next-piece preview.
  useEffect(() => {
    const canvas = nextCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 56;
    const c = 12;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    if (nextType == null) return;
    const cells = SHAPES[nextType];
    // Trim to occupied bounds for centering.
    let minR = cells.length,
      maxR = -1,
      minC = cells[0].length,
      maxC = -1;
    for (let r = 0; r < cells.length; r++) {
      for (let col = 0; col < cells[r].length; col++) {
        if (cells[r][col]) {
          minR = Math.min(minR, r);
          maxR = Math.max(maxR, r);
          minC = Math.min(minC, col);
          maxC = Math.max(maxC, col);
        }
      }
    }
    const w = maxC - minC + 1;
    const h = maxR - minR + 1;
    const offX = (size - w * c) / 2;
    const offY = (size - h * c) / 2;
    ctx.fillStyle = COLORS[nextType];
    for (let r = minR; r <= maxR; r++) {
      for (let col = minC; col <= maxC; col++) {
        if (!cells[r][col]) continue;
        const x = offX + (col - minC) * c + 1;
        const y = offY + (r - minR) * c + 1;
        ctx.beginPath();
        const rr = 2;
        const cw = c - 2;
        ctx.moveTo(x + rr, y);
        ctx.arcTo(x + cw, y, x + cw, y + cw, rr);
        ctx.arcTo(x + cw, y + cw, x, y + cw, rr);
        ctx.arcTo(x, y + cw, x, y, rr);
        ctx.arcTo(x, y, x + cw, y, rr);
        ctx.closePath();
        ctx.fill();
      }
    }
  }, [nextType, status]);

  const ctrlBtn =
    "flex items-center justify-center w-11 h-11 rounded-full border border-brand-line text-slate-300 active:scale-95 transition select-none";

  return (
    <div
      ref={containerRef}
      onClick={() => {
        if (statusRef.current === "paused") controlRef.current.resume();
      }}
      className={`relative w-full h-[420px] md:h-[480px] rounded-2xl border border-brand-line bg-brand-surface/40 overflow-hidden ${className ?? ""}`}
    >
      <span className="sr-only">
        Interactive Tetris mini-game. Press play to start.
      </span>

      <div className="flex h-full">
        {/* Board + mobile controls */}
        <div className="flex-1 flex flex-col min-w-0">
          <div ref={boardWrapRef} className="flex-1 flex items-center justify-center p-3 min-h-0">
            <canvas ref={canvasRef} aria-hidden="true" className="block" />
          </div>

          {isTouch && (
            <div className="flex items-center justify-center gap-2 pb-3 px-3">
              <button
                type="button"
                aria-label="Move left"
                onClick={() => actionRef.current.left()}
                className={ctrlBtn}
              >
                ◀
              </button>
              <button
                type="button"
                aria-label="Rotate"
                onClick={() => actionRef.current.rotate()}
                className={ctrlBtn}
              >
                ⟳
              </button>
              <button
                type="button"
                aria-label="Soft drop"
                onClick={() => actionRef.current.soft()}
                className={ctrlBtn}
              >
                ▼
              </button>
              <button
                type="button"
                aria-label="Hard drop"
                onClick={() => actionRef.current.hard()}
                className={ctrlBtn}
              >
                ⤓
              </button>
              <button
                type="button"
                aria-label="Move right"
                onClick={() => actionRef.current.right()}
                className={ctrlBtn}
              >
                ▶
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-24 md:w-28 shrink-0 border-l border-brand-line p-3 font-mono text-xs text-slate-400 flex flex-col gap-3">
          <div>
            <div className="uppercase tracking-[0.15em] text-slate-500">score</div>
            <div className="text-white text-sm">{score}</div>
          </div>
          <div>
            <div className="uppercase tracking-[0.15em] text-slate-500">lines</div>
            <div className="text-white text-sm">{lines}</div>
          </div>
          <div>
            <div className="uppercase tracking-[0.15em] text-slate-500">level</div>
            <div className="text-white text-sm">{level}</div>
          </div>
          <div>
            <div className="uppercase tracking-[0.15em] text-slate-500 mb-1">next</div>
            <canvas ref={nextCanvasRef} aria-hidden="true" className="block" />
          </div>
          {best != null && (
            <div className="mt-auto">
              <div className="uppercase tracking-[0.15em] text-slate-500">best</div>
              <div className="text-brand-accent text-sm">{best}</div>
            </div>
          )}
        </aside>
      </div>

      {/* Overlays */}
      {status === "idle" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-brand-bg/40">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-white">
            tetris
          </span>
          <span className="font-mono text-xs text-slate-400 -mt-2">
            i stack blocks for a living — try it
          </span>
          <Button variant="primary" size="sm" onClick={() => controlRef.current.play()}>
            play
          </Button>
          <span className="font-mono text-xs text-slate-500">
            {isTouch ? "tap play" : "arrow keys · space to drop"}
          </span>
        </div>
      )}

      {status === "paused" && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-bg/60">
          <span className="font-mono text-xs text-slate-400">
            paused — press p or click to resume
          </span>
        </div>
      )}

      {status === "over" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-brand-bg/70">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            game over
          </span>
          <span className="font-display text-2xl text-white">{score}</span>
          <Button variant="primary" size="sm" onClick={() => controlRef.current.play()}>
            play again
          </Button>
        </div>
      )}
    </div>
  );
}
