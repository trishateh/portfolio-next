"use client";

import { ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// In-view fade+up wrapper so the rest of the case-study tree can stay as
// server components.
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.22, ease: "easeOut", delay }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
