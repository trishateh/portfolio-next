"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  Geometry                                                                  */
/* -------------------------------------------------------------------------- */

// Isometric cube edge length and its screen-space projections.
const A = 64; // cube edge
const DX = A * Math.cos(Math.PI / 6); // ≈ 55.43 — horizontal half-width of a face
const DY = A * Math.sin(Math.PI / 6); // = 32   — vertical rise of a face edge

// The chain runs along the isometric diagonal, bottom-left → top-right.
const START = { x: 140, y: 430 };
const END = { x: 420, y: 150 };
const COUNT = 7;

type Cube = {
  top: string;
  left: string;
  right: string;
  center: { x: number; y: number };
  // Anchor for the confirmation label, just past the upper-right corner.
  label: { x: number; y: number };
};

const fmt = (n: number) => n.toFixed(2);
const pt = (p: [number, number]) => `${fmt(p[0])} ${fmt(p[1])}`;

/**
 * Compute the three visible rhombus faces of an isometric cube centred on the
 * middle vertex (cx, cy). Returns the top / left / right face path strings.
 */
function cubeAt(cx: number, cy: number): Cube {
  const top: [number, number] = [cx, cy - A];
  const upperLeft: [number, number] = [cx - DX, cy - A + DY];
  const upperRight: [number, number] = [cx + DX, cy - A + DY];
  const middle: [number, number] = [cx, cy];
  const lowerLeft: [number, number] = [cx - DX, cy + DY];
  const lowerRight: [number, number] = [cx + DX, cy + DY];
  const bottom: [number, number] = [cx, cy + A];

  return {
    top: `M${pt(top)} L${pt(upperLeft)} L${pt(middle)} L${pt(upperRight)} Z`,
    left: `M${pt(upperLeft)} L${pt(middle)} L${pt(bottom)} L${pt(lowerLeft)} Z`,
    right: `M${pt(upperRight)} L${pt(middle)} L${pt(bottom)} L${pt(lowerRight)} Z`,
    center: { x: cx, y: cy },
    label: { x: upperRight[0] + 8, y: upperRight[1] + 4 },
  };
}

// Evenly spaced cube centres along the diagonal (~46.67px per step in x and y).
const CENTERS = Array.from({ length: COUNT }, (_, i) => {
  const t = i / (COUNT - 1);
  return {
    x: START.x + (END.x - START.x) * t,
    y: START.y + (END.y - START.y) * t,
  };
});

const CUBES = CENTERS.map((c) => cubeAt(c.x, c.y));

// Connector polyline through every cube centre.
const CONNECTOR = CENTERS.map((c) => `${fmt(c.x)},${fmt(c.y)}`).join(" ");

// Static backdrop — hardcoded (no Math.random) for SSR hydration safety.
const HEX_CENTER = { x: 288, y: 274 };
const HEX_RADIUS = 196;
const HEX_POINTS = Array.from({ length: 6 }, (_, i) => {
  const angle = (Math.PI / 3) * i - Math.PI / 2; // pointy-top
  return `${fmt(HEX_CENTER.x + HEX_RADIUS * Math.cos(angle))},${fmt(
    HEX_CENTER.y + HEX_RADIUS * Math.sin(angle)
  )}`;
}).join(" ");

const SQUARES: { x: number; y: number; fill: string }[] = [
  { x: 96, y: 118, fill: "#14F195" },
  { x: 470, y: 96, fill: "#9945FF" },
  { x: 150, y: 470, fill: "#9945FF" },
  { x: 486, y: 320, fill: "#14F195" },
  { x: 70, y: 300, fill: "#9945FF" },
  { x: 430, y: 460, fill: "#14F195" },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function HeroArt() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle the "confirmation" pulse through each block, 0.8s per block.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % COUNT);
    }, 800);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  // Mouse parallax: normalized pointer offset → sprung layer transforms.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springX = useSpring(px, { stiffness: 150, damping: 20 });
  const springY = useSpring(py, { stiffness: 150, damping: 20 });

  const backdropX = useTransform(springX, (v) => v * 6);
  const backdropY = useTransform(springY, (v) => v * 6);
  const cubeX = useTransform(springX, (v) => v * -12);
  const cubeY = useTransform(springY, (v) => v * -12);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2));
    py.set((event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    px.set(0);
    py.set(0);
  };

  const active = CUBES[activeIndex];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 7, ease: "easeInOut", repeat: Infinity }
      }
      className="inline-block"
    >
      <svg
        viewBox="0 0 560 560"
        className="w-[320px] md:w-[420px] lg:w-[520px] h-auto"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="chainGrad"
            gradientUnits="userSpaceOnUse"
            x1="140"
            y1="430"
            x2="420"
            y2="150"
          >
            <stop offset="0%" stopColor="#9945FF" />
            <stop offset="50%" stopColor="#5497D5" />
            <stop offset="100%" stopColor="#14F195" />
          </linearGradient>
        </defs>

        {!prefersReducedMotion && (
          <style>{`
            @keyframes chainDash { to { stroke-dashoffset: -13; } }
            .chain-connector { animation: chainDash 6s linear infinite; }
          `}</style>
        )}

        {/* Backdrop layer — subtle depth, drifts gently with the cursor. */}
        <motion.g
          style={
            prefersReducedMotion ? undefined : { x: backdropX, y: backdropY }
          }
        >
          <polygon
            points={HEX_POINTS}
            fill="none"
            stroke="#9945FF"
            strokeWidth={1.5}
            opacity={0.06}
          />
          {SQUARES.map((s, i) => (
            <rect
              key={i}
              x={s.x}
              y={s.y}
              width={3}
              height={3}
              fill={s.fill}
              opacity={0.06}
            />
          ))}
        </motion.g>

        {/* Cube layer — the chain itself, drifts opposite the cursor. */}
        <motion.g
          style={prefersReducedMotion ? undefined : { x: cubeX, y: cubeY }}
        >
          {/* Draw back-to-front so nearer (bottom-left) cubes overlap correctly. */}
          {CUBES.map((cube, i) => {
            const idx = COUNT - 1 - i;
            const c = CUBES[idx];
            return (
              <g key={idx}>
                <path
                  d={c.top}
                  fill="#0E0E14"
                  fillOpacity={0.95}
                  stroke="url(#chainGrad)"
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
                <path
                  d={c.left}
                  fill="#0E0E14"
                  fillOpacity={0.85}
                  stroke="url(#chainGrad)"
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
                <path
                  d={c.right}
                  fill="#0E0E14"
                  fillOpacity={0.85}
                  stroke="url(#chainGrad)"
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
              </g>
            );
          })}

          {/* Connector flowing bottom-left → top-right. */}
          <polyline
            className={prefersReducedMotion ? undefined : "chain-connector"}
            points={CONNECTOR}
            fill="none"
            stroke="url(#chainGrad)"
            strokeWidth={1}
            strokeDasharray="3 10"
          />

          {/* Confirmation pulse on the active block. */}
          {!prefersReducedMotion && (
            <AnimatePresence>
              <motion.g
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Green glow flashing over the confirmed block. */}
                <motion.path
                  d={active.top}
                  fill="#14F195"
                  style={{ filter: "blur(10px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                {/* Edges brighten as the block is confirmed. */}
                {[active.top, active.left, active.right].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    fill="none"
                    stroke="url(#chainGrad)"
                    strokeLinejoin="round"
                    initial={{ strokeWidth: 1.5 }}
                    animate={{ strokeWidth: [1.5, 2.5, 1.5] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                ))}
                {/* Monospace block-height label. */}
                <motion.text
                  x={active.label.x}
                  y={active.label.y}
                  fontFamily="var(--font-jetbrains-mono)"
                  fontSize={10}
                  fill="#6b7280"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  #{4821 + activeIndex}
                </motion.text>
              </motion.g>
            </AnimatePresence>
          )}
        </motion.g>
      </svg>
    </motion.div>
  );
}
