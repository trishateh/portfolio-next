"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Matter from "matter-js";

type PhysicsPlaygroundProps = {
  className?: string;
};

const TECHS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Solidity",
  "Rust",
  "Go",
  "PostgreSQL",
  "Docker",
  "Tailwind",
  "React Native",
  "GraphQL",
] as const;

const STROKE_COLORS = ["#8B5CF6", "#6366F1", "#C084FC", "#5EEAD4"];
const CHIP_HEIGHT = 40;
const CHIP_PADDING = 44;
const CHAMFER_RADIUS = 18;
const FONT = '14px "JetBrains Mono", ui-monospace, SFMono-Regular, monospace';

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export default function PhysicsPlayground({
  className,
}: PhysicsPlaygroundProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shakeRef = useRef<() => void>(() => {});
  const resetRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (reduceMotion) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const {
      Engine,
      Runner,
      Bodies,
      Composite,
      Body,
      Sleeping,
      Mouse,
      MouseConstraint,
    } = Matter;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Measure chip widths once using the canvas context.
    ctx.font = FONT;
    const chipWidths = TECHS.map(
      (label) => Math.ceil(ctx.measureText(label).width) + CHIP_PADDING
    );

    const engine = Engine.create({ enableSleeping: true });
    engine.gravity.y = 1;
    const world = engine.world;

    const WALL_THICKNESS = 200;

    const makeWalls = () => {
      // floor, left, right, and a ceiling ABOVE the visible area.
      return [
        Bodies.rectangle(
          width / 2,
          height + WALL_THICKNESS / 2,
          width + WALL_THICKNESS * 2,
          WALL_THICKNESS,
          { isStatic: true }
        ),
        Bodies.rectangle(
          -WALL_THICKNESS / 2,
          height / 2,
          WALL_THICKNESS,
          height * 3,
          { isStatic: true }
        ),
        Bodies.rectangle(
          width + WALL_THICKNESS / 2,
          height / 2,
          WALL_THICKNESS,
          height * 3,
          { isStatic: true }
        ),
        // ceiling well above the top so throws come back down
        Bodies.rectangle(
          width / 2,
          -height - WALL_THICKNESS / 2,
          width + WALL_THICKNESS * 2,
          WALL_THICKNESS,
          { isStatic: true }
        ),
      ];
    };

    let walls = makeWalls();
    Composite.add(world, walls);

    const randomTopPosition = (chipWidth: number) => {
      const margin = chipWidth / 2 + 8;
      const x = margin + Math.random() * Math.max(1, width - margin * 2);
      const y = -CHIP_HEIGHT - Math.random() * height * 0.9;
      return { x, y };
    };

    const chips = TECHS.map((label, i) => {
      const { x, y } = randomTopPosition(chipWidths[i]);
      const body = Bodies.rectangle(x, y, chipWidths[i], CHIP_HEIGHT, {
        chamfer: { radius: CHAMFER_RADIUS },
        restitution: 0.6,
        friction: 0.3,
      });
      (body as unknown as { _label: string; _colorIndex: number })._label =
        label;
      (body as unknown as { _colorIndex: number })._colorIndex = i;
      return body;
    });
    Composite.add(world, chips);

    // Mouse grab/throw.
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(world, mouseConstraint);

    // CRITICAL: matter's Mouse hijacks wheel + touch and breaks page scroll.
    // Remove those captured listeners so the page scrolls normally.
    const m = mouse as unknown as {
      mousewheel: EventListener;
      touchstart: EventListener;
      touchmove: EventListener;
      element: HTMLElement;
    };
    m.element.removeEventListener("mousewheel", m.mousewheel);
    m.element.removeEventListener("DOMMouseScroll", m.mousewheel);
    m.element.removeEventListener("touchstart", m.touchstart);
    m.element.removeEventListener("touchmove", m.touchmove);

    // ---- Sizing / DPR ----
    const applyCanvasSize = () => {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    applyCanvasSize();

    // ---- Draw loop (no per-frame allocations) ----
    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.font = FONT;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 1.5;

      for (let i = 0; i < chips.length; i++) {
        const body = chips[i] as unknown as {
          position: { x: number; y: number };
          angle: number;
          _label: string;
          _colorIndex: number;
        };
        const w = chipWidths[i];
        ctx.save();
        ctx.translate(body.position.x, body.position.y);
        ctx.rotate(body.angle);

        const r = CHAMFER_RADIUS;
        const halfW = w / 2;
        const halfH = CHIP_HEIGHT / 2;
        ctx.beginPath();
        ctx.moveTo(-halfW + r, -halfH);
        ctx.lineTo(halfW - r, -halfH);
        ctx.arcTo(halfW, -halfH, halfW, -halfH + r, r);
        ctx.lineTo(halfW, halfH - r);
        ctx.arcTo(halfW, halfH, halfW - r, halfH, r);
        ctx.lineTo(-halfW + r, halfH);
        ctx.arcTo(-halfW, halfH, -halfW, halfH - r, r);
        ctx.lineTo(-halfW, -halfH + r);
        ctx.arcTo(-halfW, -halfH, -halfW + r, -halfH, r);
        ctx.closePath();

        ctx.fillStyle = "#15151E";
        ctx.fill();
        ctx.strokeStyle = STROKE_COLORS[i % STROKE_COLORS.length];
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.fillText(body._label, 0, 1);
        ctx.restore();
      }
    };

    // ---- rAF loop with capped delta ----
    let rafId: number | null = null;
    let last = performance.now();
    const tick = (now: number) => {
      let delta = now - last;
      last = now;
      if (delta > 1000 / 30) delta = 1000 / 30; // cap to avoid tunneling
      Engine.update(engine, delta);
      draw();
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId == null) {
        last = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    // ---- Controls ----
    const shake = () => {
      for (const body of chips) {
        Sleeping.set(body, false);
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.06,
          y: -0.06 - Math.random() * 0.05,
        });
      }
    };
    const reset = () => {
      chips.forEach((body, i) => {
        const { x, y } = randomTopPosition(chipWidths[i]);
        Sleeping.set(body, false);
        Body.setPosition(body, { x, y });
        Body.setVelocity(body, { x: 0, y: 0 });
        Body.setAngularVelocity(body, 0);
        Body.setAngle(body, (Math.random() - 0.5) * 0.4);
      });
    };
    shakeRef.current = shake;
    resetRef.current = reset;

    // ---- Resize handling ----
    const resizeObserver = new ResizeObserver(() => {
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW === 0 || newH === 0) return;
      width = newW;
      height = newH;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      applyCanvasSize();
      Composite.remove(world, walls);
      walls = makeWalls();
      Composite.add(world, walls);
    });
    resizeObserver.observe(container);

    // ---- Visibility: pause rAF entirely when off-screen ----
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) start();
          else stop();
        }
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    // Runner is not used; we drive Engine.update manually. Keep ref to avoid
    // accidental double-stepping.
    void Runner;

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      Composite.clear(world, false);
      Engine.clear(engine);
      shakeRef.current = () => {};
      resetRef.current = () => {};
    };
  }, [reduceMotion]);

  const techList = TECHS.join(", ");

  // Reduced motion: static HTML chips, no physics.
  if (reduceMotion) {
    return (
      <div
        className={`relative h-[420px] md:h-[480px] w-full rounded-2xl border border-brand-line bg-brand-surface/40 overflow-hidden ${className ?? ""}`}
      >
        <span className="sr-only">
          Technologies I work with: {techList}.
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 h-full p-6 content-center">
          {TECHS.map((label, i) => (
            <span
              key={label}
              className="font-mono text-sm text-white rounded-full px-5 py-2"
              style={{
                backgroundColor: "#15151E",
                border: `1.5px solid ${STROKE_COLORS[i % STROKE_COLORS.length]}`,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const touch = isTouchDevice();

  return (
    <div
      ref={containerRef}
      className={`relative h-[420px] md:h-[480px] w-full rounded-2xl border border-brand-line bg-brand-surface/40 overflow-hidden ${className ?? ""}`}
    >
      <span className="sr-only">Technologies I work with: {techList}.</span>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 touch-pan-y"
      />

      <span className="absolute top-4 left-4 font-mono text-xs text-slate-500 pointer-events-none select-none">
        {touch ? "tap shake ↓" : "drag the blocks →"}
      </span>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          type="button"
          aria-label="Shake the tech chips"
          onClick={() => shakeRef.current()}
          className="font-mono text-xs px-3 py-1.5 rounded-full border border-brand-line text-slate-400 hover:text-white hover:border-brand-line2 bg-brand-bg/60 backdrop-blur"
        >
          shake
        </button>
        <button
          type="button"
          aria-label="Reset the tech chips"
          onClick={() => resetRef.current()}
          className="font-mono text-xs px-3 py-1.5 rounded-full border border-brand-line text-slate-400 hover:text-white hover:border-brand-line2 bg-brand-bg/60 backdrop-blur"
        >
          reset
        </button>
      </div>
    </div>
  );
}
