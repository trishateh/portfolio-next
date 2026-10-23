"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// 240x150 viewBox; the origin (cx, cy) is the back corner of the 3x3 floor,
// placed so the full stack plus the lift replay stays inside the box.
const S = 24;
const CX = 120;
const CY = 72;
const GRID = 3;

const STEP = 0.22; // s between cube drops
const BUILT = 10 * STEP + 0.5; // s until the stack has settled
const REPLAY_EVERY = 9; // s

type Family = "teal" | "orchid" | "indigo" | "purple";

// Top lightest, left mid, right darkest.
const PALETTE: Record<Family, { top: string; left: string; right: string }> = {
  teal: { top: "#5EEAD4", left: "#2DD4BF", right: "#14B8A6" },
  orchid: { top: "#C084FC", left: "#A855F7", right: "#7E22CE" },
  indigo: { top: "#818CF8", left: "#6366F1", right: "#4338CA" },
  purple: { top: "#A78BFA", left: "#8B5CF6", right: "#6D28D9" },
};

interface Cube {
  x: number;
  y: number;
  z: number;
  color: Family;
}

// Hard-coded stepped pyramid: a plus-shaped ring of 5, then 3, then 2, with the
// peak on the centre tile. Every cube above z=0 rests on one below it.
const CUBES: Cube[] = [
  { x: 0, y: 1, z: 0, color: "indigo" },
  { x: 1, y: 0, z: 0, color: "purple" },
  { x: 1, y: 1, z: 0, color: "indigo" },
  { x: 1, y: 2, z: 0, color: "orchid" },
  { x: 2, y: 1, z: 0, color: "purple" },
  { x: 1, y: 1, z: 1, color: "teal" },
  { x: 2, y: 1, z: 1, color: "indigo" },
  { x: 1, y: 2, z: 1, color: "purple" },
  { x: 1, y: 1, z: 2, color: "orchid" },
  { x: 2, y: 1, z: 2, color: "teal" },
];

// Painter's order for unit cubes: x+y+z is depth toward the viewer; ties only
// share an edge, so lower z first keeps the build bottom-up.
const ORDERED = [...CUBES].sort(
  (a, b) => a.x + a.y + a.z - (b.x + b.y + b.z) || a.z - b.z
);

// The last two in draw order are the z=2 cubes; staggered offsets so the
// replay reads as two separate lifts rather than one.
const REPLAY_OFFSET: Record<number, number> = {
  [ORDERED.length - 2]: 0,
  [ORDERED.length - 1]: 0.14,
};

const project = (x: number, y: number, z: number) => ({
  sx: CX + (x - y) * S,
  sy: CY + ((x + y) * S) / 2 - z * S,
});

const pts = (list: [number, number][]) => list.map(([a, b]) => `${a},${b}`).join(" ");

function CubeFaces({ cube }: { cube: Cube }) {
  const { sx, sy } = project(cube.x, cube.y, cube.z);
  const h = S / 2;
  const fill = PALETTE[cube.color];
  const stroke = { stroke: "#0E0E14", strokeOpacity: 0.6, strokeWidth: 1, strokeLinejoin: "round" as const };

  return (
    <>
      <polygon
        points={pts([[sx, sy - S], [sx + S, sy - h], [sx, sy], [sx - S, sy - h]])}
        fill={fill.top}
        {...stroke}
      />
      <polygon
        points={pts([[sx - S, sy - h], [sx, sy], [sx, sy + S], [sx - S, sy + h]])}
        fill={fill.left}
        {...stroke}
      />
      <polygon
        points={pts([[sx, sy], [sx + S, sy - h], [sx + S, sy + h], [sx, sy + S]])}
        fill={fill.right}
        {...stroke}
      />
    </>
  );
}

function FloorGrid() {
  const lines = [];
  for (let i = 0; i <= GRID; i++) {
    const a = project(i, 0, 0);
    const b = project(i, GRID, 0);
    const c = project(0, i, 0);
    const d = project(GRID, i, 0);
    lines.push(<line key={`x${i}`} x1={a.sx} y1={a.sy} x2={b.sx} y2={b.sy} />);
    lines.push(<line key={`y${i}`} x1={c.sx} y1={c.sy} x2={d.sx} y2={d.sy} />);
  }
  return (
    <g stroke="#26262F" strokeWidth={1} fill="none">
      {lines}
    </g>
  );
}

export default function BuildingBlocks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const animate = !prefersReducedMotion;
  const running = animate && inView;
  // Reduced motion skips straight to the finished stack.
  const shown = !animate || inView;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none mt-auto h-36 pt-4 md:h-auto md:min-h-36 md:flex-1"
    >
      <svg
        viewBox="0 0 240 150"
        preserveAspectRatio="xMidYMax meet"
        className="h-full w-full"
      >
        <FloorGrid />
        <motion.g
          animate={running ? { y: [0, -3, 0] } : { y: 0 }}
          transition={
            running
              ? { duration: 4, repeat: Infinity, ease: "easeInOut", delay: BUILT }
              : { duration: 0 }
          }
        >
          {ORDERED.map((cube, i) => {
            const offset = REPLAY_OFFSET[i];
            const faces = <CubeFaces cube={cube} />;
            return (
              <motion.g
                key={`${cube.x}-${cube.y}-${cube.z}`}
                initial={animate ? { opacity: 0, y: -28 } : false}
                animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: -28 }}
                transition={
                  animate
                    ? { type: "spring", stiffness: 420, damping: 24, delay: i * STEP }
                    : { duration: 0 }
                }
              >
                {offset === undefined ? (
                  faces
                ) : (
                  // Separate group so the lift replay doesn't fight the drop-in spring.
                  <motion.g
                    animate={running ? { y: [0, -14, 0] } : { y: 0 }}
                    transition={
                      running
                        ? {
                            duration: 0.6,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: REPLAY_EVERY,
                            delay: BUILT + REPLAY_EVERY + offset,
                          }
                        : { duration: 0 }
                    }
                  >
                    {faces}
                  </motion.g>
                )}
              </motion.g>
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
}
