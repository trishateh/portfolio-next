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
      className="space-y-8"
    >
      {categories.map((category, index) => (
        <motion.div key={index} variants={fadeUp}>
          <h3 className="text-lg font-semibold text-white mb-4">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                variants={fadeUp}
                transition={{ delay: skillIndex * 0.05 }}
              >
                <Chip variant={category.variant || "default"}>
                  {skill}
                </Chip>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
