"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

// The SVG uses a 208-unit viewBox so offsets map 1:1 to px at the md size.
const VIEW = 208;
const TILT_X = 10; // deg
const TILT_Y = 12; // deg
const SPRING = { stiffness: 180, damping: 20 };

interface Petal {
  d: string;
  color: string;
  opacity: number;
  duration: number; // s
  delay: number; // s, negative so floats start out of phase
}

// Hand-placed (never random) around the edges, clear of the face, which sits
// roughly at the top-centre-right of the artwork.
const FAR_PETALS: Petal[] = [
  // top-left
  { d: "M18 34 C 30 14, 54 16, 58 26 C 48 40, 26 44, 18 34 Z", color: "#5EEAD4", opacity: 0.45, duration: 7, delay: -1 },
  // left, mid-height
  { d: "M8 104 C 4 84, 18 70, 28 74 C 32 90, 22 106, 8 104 Z", color: "#C084FC", opacity: 0.4, duration: 9, delay: -4 },
  // bottom-right
  { d: "M168 184 C 186 168, 204 174, 202 184 C 190 198, 174 198, 168 184 Z", color: "#6366F1", opacity: 0.5, duration: 6, delay: -2.5 },
];

const NEAR_PETALS: Petal[] = [
  // left, peeking out above the code card's top edge
  { d: "M6 146 C 14 126, 36 124, 42 134 C 36 152, 16 160, 6 146 Z", color: "#6366F1", opacity: 0.55, duration: 8, delay: -3 },
  // bottom-centre, just right of the code card
  { d: "M86 196 C 96 182, 118 182, 122 192 C 112 204, 94 206, 86 196 Z", color: "#5EEAD4", opacity: 0.35, duration: 5, delay: -0.5 },
  // right, below the code card
  { d: "M188 112 C 206 100, 208 124, 200 136 C 188 138, 182 122, 188 112 Z", color: "#C084FC", opacity: 0.6, duration: 7.5, delay: -5 },
  // top-centre-left, beside the code window in the art
  { d: "M70 10 C 80 2, 96 4, 98 12 C 90 22, 76 22, 70 10 Z", color: "#C084FC", opacity: 0.4, duration: 6.5, delay: -2 },
];

const LINES = [
  { width: "70%", color: "#5EEAD4", delay: 0 },
  { width: "50%", color: "#C084FC", delay: 0.4 },
  { width: "85%", color: "#E5E7EB", delay: 0.8 },
];

function PetalPath({ petal, animate }: { petal: Petal; animate: boolean }) {
  const style = {
    mixBlendMode: "screen",
    "--d": `${petal.duration}s`,
    "--delay": `${petal.delay}s`,
  } as CSSProperties;

  return (
    <path
      d={petal.d}
      fill={petal.color}
      opacity={petal.opacity}
      className={animate ? "about-float" : undefined}
      style={style}
    />
  );
}

export default function AboutIllustration() {
  const prefersReducedMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Starts false so server and first client render match; touch never tilts.
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Typing starts once the tile is half visible; the section sits below the fold.
  const inView = useInView(wrapperRef, { once: true, amount: 0.5 });

  const tiltEnabled = canHover && !prefersReducedMotion;
  const animate = !prefersReducedMotion;

  // Pointer offset from centre, -1..1 on each axis.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);

  const rotateX = useTransform(sy, [-1, 1], [TILT_X, -TILT_X]);
  const rotateY = useTransform(sx, [-1, 1], [-TILT_Y, TILT_Y]);
  // Far layer drifts against the tilt, near layer with it, so the tilt reads as depth.
  const farX = useTransform(sx, [-1, 1], [6, -6]);
  const farY = useTransform(sy, [-1, 1], [6, -6]);
  const nearX = useTransform(sx, [-1, 1], [-12, 12]);
  const nearY = useTransform(sy, [-1, 1], [-12, 12]);
  const glowX = useTransform(sx, [-1, 1], [8, -8]);
  const glowY = useTransform(sy, [-1, 1], [8, -8]);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!tiltEnabled || e.pointerType === "touch" || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    px.set(clamp(((e.clientX - rect.left) / rect.width) * 2 - 1));
    py.set(clamp(((e.clientY - rect.top) / rect.height) * 2 - 1));
  };

  const handlePointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={wrapperRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: "900px" }}
      className="h-40 w-40 md:h-52 md:w-52"
    >
      <motion.div
        style={
          tiltEnabled
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
        className={cn(
          "relative h-full w-full overflow-hidden rounded-2xl bg-brand-surface2 ring-1 ring-brand-line transition-shadow duration-300",
          tiltEnabled && "hover:shadow-glow"
        )}
      >
        {/* Glow behind the artwork */}
        <motion.div
          aria-hidden
          style={tiltEnabled ? { x: glowX, y: glowY } : undefined}
          className="pointer-events-none absolute -inset-4 opacity-25"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, #8B5CF6 0%, rgba(94,234,212,0.6) 35%, transparent 70%)",
            }}
          />
        </motion.div>

        <Image
          src="/images/about.webp"
          alt="Trisha Teh"
          fill
          sizes="208px"
          priority={false}
          className="object-cover"
        />

        {/* Parallax petals */}
        <svg
          aria-hidden
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <motion.g style={tiltEnabled ? { x: farX, y: farY } : undefined}>
            {FAR_PETALS.map((petal, i) => (
              <PetalPath key={i} petal={petal} animate={animate} />
            ))}
          </motion.g>
          <motion.g style={tiltEnabled ? { x: nearX, y: nearY } : undefined}>
            {NEAR_PETALS.map((petal, i) => (
              <PetalPath key={i} petal={petal} animate={animate} />
            ))}
          </motion.g>
        </svg>

        {/* Code card, in the near layer; bottom-left keeps it off the art's own code window and the hair */}
        <motion.div
          aria-hidden
          style={tiltEnabled ? { x: nearX, y: nearY } : undefined}
          className="pointer-events-none absolute bottom-[6%] left-[5%] w-[38%] rounded-lg bg-brand-bg/90 p-2 ring-1 ring-brand-line"
        >
          <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-brand-accent shadow-glow" />
          <div className="mt-1.5 space-y-1.5">
            {LINES.map((line, i) => {
              const isLast = i === LINES.length - 1;
              // Width 0 until in view; reduced motion skips straight to the final width.
              const width = !animate || inView ? line.width : 0;
              const style = {
                backgroundColor: line.color,
                width,
                "--w": line.width,
                "--delay": `${line.delay}s`,
              } as CSSProperties;
              return (
                <div key={i} className="flex h-0.5 items-center gap-0.5">
                  <span
                    className={cn("block h-0.5 rounded-full", animate && inView && "about-type")}
                    style={style}
                  />
                  {isLast && (
                    <span
                      className={cn(
                        "block h-2 w-0.5 bg-brand-accent",
                        animate && "about-blink"
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
