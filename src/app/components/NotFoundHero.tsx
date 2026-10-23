"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { stagger, fadeUp } from "@/lib/motion";

// Client child so not-found.tsx can stay a server component and export metadata.
export default function NotFoundHero() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="lg:col-span-6"
    >
      <motion.p
        variants={fadeUp}
        className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-6"
      >
        404 — nothing here
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="font-display text-display-xl text-white mb-6"
      >
        No piece fits <span className="gradient-text">here.</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-slate-300/90 text-lg max-w-xl mb-8"
      >
        The page you're after was cleared, moved, or never dropped. Try one of
        these instead.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
        <Button variant="gradient" size="lg" href="/">
          Back home
        </Button>
        <Button variant="outline" size="lg" href="/#projects">
          View work
        </Button>
      </motion.div>

      <motion.p variants={fadeUp} className="mt-6 font-mono text-xs text-slate-500">
        or press play on the home page and clear a line
      </motion.p>
    </motion.div>
  );
}
