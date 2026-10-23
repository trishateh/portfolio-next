"use client";

import type { CSSProperties } from "react";

type Shape = "T" | "L" | "S" | "O" | "I";

// Cell coordinates on each piece's own grid ([col, row]).
const SHAPES: Record<Shape, { cols: number; rows: number; cells: [number, number][] }> = {
  T: { cols: 3, rows: 2, cells: [[0, 0], [1, 0], [2, 0], [1, 1]] },
  L: { cols: 3, rows: 2, cells: [[0, 0], [1, 0], [2, 0], [0, 1]] },
  S: { cols: 3, rows: 2, cells: [[1, 0], [2, 0], [0, 1], [1, 1]] },
  O: { cols: 2, rows: 2, cells: [[0, 0], [1, 0], [0, 1], [1, 1]] },
  I: { cols: 4, rows: 1, cells: [[0, 0], [1, 0], [2, 0], [3, 0]] },
};

interface Piece {
  shape: Shape;
  left: number; // % of field width
  size: number; // px, longest side
  color: string;
  duration: number; // s
  delay: number; // s, negative so pieces start mid-fall
  rotate: 0 | 90 | 180 | 270;
  opacity: number;
}

// Hard-coded (never random) so server and client markup match. Most pieces sit
// right of 40% so they drift behind the Tetris panel, not the headline.
const PIECES: Piece[] = [
  { shape: "T", left: 4, size: 28, color: "#C084FC", duration: 80, delay: -12, rotate: 0, opacity: 0.07 },
  { shape: "I", left: 17, size: 32, color: "#6366F1", duration: 88, delay: -55, rotate: 90, opacity: 0.06 },
  { shape: "S", left: 29, size: 26, color: "#5EEAD4", duration: 72, delay: -34, rotate: 0, opacity: 0.07 },
  { shape: "T", left: 40, size: 40, color: "#8B5CF6", duration: 64, delay: -8, rotate: 180, opacity: 0.1 },
  { shape: "O", left: 47, size: 30, color: "#C084FC", duration: 76, delay: -62, rotate: 0, opacity: 0.08 },
  { shape: "L", left: 54, size: 48, color: "#6366F1", duration: 58, delay: -27, rotate: 90, opacity: 0.12 },
  { shape: "T", left: 61, size: 34, color: "#5EEAD4", duration: 70, delay: -48, rotate: 270, opacity: 0.09 },
  { shape: "I", left: 68, size: 52, color: "#8B5CF6", duration: 52, delay: -70, rotate: 0, opacity: 0.11 },
  { shape: "S", left: 75, size: 44, color: "#C084FC", duration: 66, delay: -18, rotate: 90, opacity: 0.1 },
  { shape: "T", left: 82, size: 56, color: "#6366F1", duration: 48, delay: -40, rotate: 0, opacity: 0.14 },
  { shape: "L", left: 89, size: 36, color: "#5EEAD4", duration: 82, delay: -76, rotate: 180, opacity: 0.08 },
  { shape: "T", left: 96, size: 24, color: "#8B5CF6", duration: 90, delay: -4, rotate: 90, opacity: 0.06 },
];

const CELL = 10;
const GAP = 1;
const RECT = CELL - GAP;

function Tetromino({ piece }: { piece: Piece }) {
  const { cols, rows, cells } = SHAPES[piece.shape];
  const cell = piece.size / Math.max(cols, rows);
  const width = cell * cols;
  const height = cell * rows;

  const style = {
    top: 0,
    left: `calc(${piece.left}% - ${width / 2}px)`,
    width,
    height,
    opacity: piece.opacity,
    "--r": `${piece.rotate}deg`,
    "--d": `${piece.duration}s`,
    "--delay": `${piece.delay}s`,
    // Where the negative delay places the piece at load; used as its static
    // position under reduced motion so the field doesn't collapse to one row.
    "--p": `${((-piece.delay % piece.duration) / piece.duration).toFixed(3)}`,
  } as CSSProperties;

  return (
    <svg
      className="tetromino absolute"
      style={style}
      viewBox={`0 0 ${cols * CELL} ${rows * CELL}`}
      fill={piece.color}
    >
      {cells.map(([c, r]) => (
        <rect
          key={`${c}-${r}`}
          x={c * CELL + GAP / 2}
          y={r * CELL + GAP / 2}
          width={RECT}
          height={RECT}
          rx={RECT * 0.15}
        />
      ))}
    </svg>
  );
}

export default function TetrominoField() {
  return (
    <div
      aria-hidden
      className="tetromino-field pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PIECES.map((piece, i) => (
        <Tetromino key={i} piece={piece} />
      ))}
    </div>
  );
}
