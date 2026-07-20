"use client";

import { motion } from "framer-motion";
import Chip from "./Chip";
import { fadeUp, stagger } from "@/lib/motion";

export interface SkillCategory {
  title: string;
  skills: string[];
  variant?: "accent" | "blue" | "default";
}

interface SkillsGridProps {
  categories: SkillCategory[];
}

export default function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="space-y-5"
    >
      {categories.map((category, index) => (
        <motion.div key={index} variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
            {category.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <Chip
                key={skillIndex}
                variant={category.variant || "default"}
                size="sm"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
