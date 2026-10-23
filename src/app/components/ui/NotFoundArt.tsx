"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const COLS = 10;
const ROWS = 8;
const CELL = 28;
const PITCH = CELL + 4;
const WELL_W = COLS * PITCH - 4;
const WELL_H = ROWS * PITCH - 4;

// The 10x8 well at cell 28 / gap 4 is 316x252, taller than the 320x240
// viewBox, so the drawing is laid out in well units and scaled to fit.
const SCALE = 0.6;
const SPACE_W = 320 / SCALE;
const SPACE_H = 240 / SCALE;
const WELL_X = (SPACE_W - WELL_W) / 2;
const WELL_Y = SPACE_H - WELL_H - 4;

interface PileCell {
  col: number;
  row: number;
}

// Settled pile on rows 5-7 ([col, row], row 0 = top). Cells (4,6) (5,6) (6,6)
// and (5,7) stay empty: a T-shaped hole that only a flat-side-up T could fill.
const PILE: { color: string; cells: [number, number][] }[] = [
  { color: "#6366F1", cells: [[1, 7], [2, 7], [3, 7], [4, 7]] }, // I
  { color: "#C084FC", cells: [[0, 5], [1, 5], [0, 6], [0, 7]] }, // J
  { color: "#5EEAD4", cells: [[2, 5], [1, 6], [2, 6], [3, 6]] }, // T
  { color: "#8B5CF6", cells: [[7, 6], [8, 6], [6, 7], [7, 7]] }, // S
  { color: "#5EEAD4", cells: [[9, 5], [9, 6], [9, 7], [8, 7]] }, // J
];

// T rotated 90°: vertical bar with the nub pointing left, so it can't drop into the hole.
const FLOATING_T: [number, number][] = [[1, 0], [0, 1], [1, 1], [1, 2]];
const FLOAT_X = WELL_X + 7 * PITCH;
const FLOAT_Y = WELL_Y - 3 * PITCH - 20;

function cellRect({ col, row }: PileCell) {
  return { x: col * PITCH, y: row * PITCH, width: CELL, height: CELL, rx: 3 };
}

export default function NotFoundArt() {
  const prefersReducedMotion = useReducedMotion();
  const gradientId = `not-found-t-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      aria-hidden
      className="pointer-events-none w-full max-w-md mx-auto"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2={2 * PITCH}
          y2={3 * PITCH}
        >
          <stop offset="0" stopColor="#C084FC" />
          <stop offset="0.5" stopColor="#6366F1" />
          <stop offset="1" stopColor="#5EEAD4" />
        </linearGradient>
      </defs>

      <g transform={`scale(${SCALE})`}>
        {/* Well grid */}
        <g transform={`translate(${WELL_X} ${WELL_Y})`}>
          {Array.from({ length: COLS * ROWS }, (_, i) => (
            <rect
              key={i}
              {...cellRect({ col: i % COLS, row: Math.floor(i / COLS) })}
              fill="rgba(255,255,255,0.04)"
              stroke="#26262F"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Settled pile */}
          {PILE.map((piece, p) => (
            <g key={p} fill={piece.color} opacity={0.9}>
              {piece.cells.map(([col, row]) => (
                <rect key={`${col}-${row}`} {...cellRect({ col, row })} />
              ))}
            </g>
          ))}
        </g>

        {/* Floating T that doesn't fit */}
        <g transform={`translate(${FLOAT_X} ${FLOAT_Y})`}>
          <motion.g
            animate={prefersReducedMotion ? { y: 0 } : { y: [0, -6, 0] }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
            fill={`url(#${gradientId})`}
          >
            {FLOATING_T.map(([col, row]) => (
              <rect key={`${col}-${row}`} {...cellRect({ col, row })} />
            ))}
          </motion.g>
        </g>
      </g>
    </svg>
  );
}
