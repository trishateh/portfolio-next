"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative pl-6"
    >
      {/* Gradient spine */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1.5 bottom-1.5 w-px bg-brand-gradient"
      />

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div key={index} variants={fadeUp} className="relative">
            {/* Node on the spine */}
            <span
              aria-hidden
              className={`absolute -left-6 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full ${
                item.current ? "bg-brand-accent shadow-glow" : "bg-brand-line2"
              }`}
            />
            <p className="font-mono text-xs text-slate-500 mb-1">
              {item.period}
            </p>
            <h4 className="text-white font-medium leading-tight">
              {item.title}
            </h4>
            <p className="text-sm text-brand-accent">{item.company}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
