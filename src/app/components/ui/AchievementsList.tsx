"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { Achievement } from "@/app/data/aboutData";
import Card from "./Card";
import { fadeUp, stagger } from "@/lib/motion";

interface AchievementsListProps {
  achievements: Achievement[];
}

export default function AchievementsList({ achievements }: AchievementsListProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid gap-4"
    >
      {achievements.map((achievement, index) => (
        <motion.div key={index} variants={fadeUp}>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-brand-accent" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-white leading-tight">
                    {achievement.name}
                  </h3>
                  {achievement.year && (
                    <div className="flex items-center gap-1 text-sm text-slate-400 flex-shrink-0">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.year}</span>
                    </div>
                  )}
                </div>
                
                {achievement.description && (
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
