"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative pl-6"
    >
      {/* Gradient spine */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1.5 bottom-1.5 w-px bg-brand-gradient"
        style={{ transformOrigin: "top" }}
        // Reduced motion starts at the final state. An explicit target rather
        // than initial={false}: with only whileInView there is nothing for
        // framer to write, so the SSR'd scaleY(0) would stick until in view.
        initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="space-y-6">
        {items.map((item, index) => {
          // Latest role is brightest; older nodes fade. Opacity lives on the
          // node, not the wrapper, since framer animates the wrapper's opacity
          // (the node's own whileInView owns it now).
          const dim = Math.max(0.3, 1 - index * 0.17);
          return (
            <motion.div key={index} variants={fadeUp} className="relative">
              {/* Node on the spine */}
              <motion.span
                aria-hidden
                className={`absolute -left-6 top-1.5 h-2 w-2 rounded-full bg-brand-accent ${
                  item.current ? "shadow-glow" : ""
                }`}
                // Centering moves from -translate-x-1/2 to framer's x, since
                // framer's inline transform would override the class.
                style={{ x: "-50%" }}
                initial={
                  prefersReducedMotion
                    ? { scale: 1, opacity: dim }
                    : { scale: 0.4, opacity: 0 }
                }
                whileInView={{ scale: 1, opacity: dim }}
                viewport={{ once: true, amount: 0.3 }}
                // Light each node as the spine draw reaches it.
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: (index / items.length) * 1.2,
                }}
              />
              <p className="font-mono text-xs text-slate-500 mb-1">
                {item.period}
              </p>
              <h3 className="text-white font-medium leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-brand-accent">
                {item.company}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
