"use client";

import { motion } from "framer-motion";
import { Achievement } from "@/app/data/aboutData";
import { fadeUp, stagger } from "@/lib/motion";

interface AchievementsListProps {
  achievements: Achievement[];
}

export default function AchievementsList({
  achievements,
}: AchievementsListProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="divide-y divide-brand-line"
    >
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
        >
          <span className="text-sm text-slate-300">{achievement.name}</span>
          {achievement.year && (
            <span className="flex-shrink-0 font-mono text-xs text-slate-500">
              {achievement.year}
            </span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
