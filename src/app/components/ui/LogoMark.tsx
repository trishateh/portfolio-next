"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface LogoMarkProps {
  size?: number;
  className?: string;
  // Play the one-time drop-in of the bottom cell on mount.
  animate?: boolean;
  // Nudge the bottom cell down, e.g. while the parent link is hovered.
  dip?: boolean;
}

// Inline copy of public/images/logo-icon.svg so the bottom cell can move.
export default function LogoMark({
  size = 32,
  className,
  animate = true,
  dip = false,
}: LogoMarkProps) {
  const prefersReducedMotion = useReducedMotion();
  // useId keeps gradient ids unique when the mark appears more than once.
  const gradientId = `logo-mark-${useId().replace(/:/g, "")}`;
  const fill = `url(#${gradientId})`;
  const drop = animate && !prefersReducedMotion;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="6"
          y1="14"
          x2="40"
          y2="48"
        >
          <stop offset="0" stopColor="#C084FC" />
          <stop offset="0.55" stopColor="#6366F1" />
          <stop offset="1" stopColor="#5EEAD4" />
        </linearGradient>
      </defs>
      <rect x="6" y="14" width="16" height="16" rx="3" fill={fill} />
      <rect x="24" y="14" width="16" height="16" rx="3" fill={fill} />
      <rect x="42" y="14" width="16" height="16" rx="3" fill={fill} />
      {/* Separate layers so the dip spring never restarts the drop-in */}
      <motion.g
        initial={false}
        animate={{ y: dip && !prefersReducedMotion ? 3 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <motion.rect
          x="24"
          y="32"
          width="16"
          height="16"
          rx="3"
          fill={fill}
          initial={drop ? { y: -20, opacity: 0 } : false}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 520,
            damping: 22,
            delay: 0.15,
          }}
        />
      </motion.g>
    </svg>
  );
}
