"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
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
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent via-brand-blue to-slate-700"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="relative flex items-start gap-6"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                item.current 
                  ? "bg-brand-accent border-brand-accent shadow-glow" 
                  : "bg-brand-surface border-slate-600"
              }`}>
                <div className={`w-3 h-3 rounded-full ${
                  item.current ? "bg-white" : "bg-slate-400"
                }`}></div>
              </div>
              
              {/* Pulse animation for current item */}
              {item.current && (
                <div className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-20"></div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-brand-surface rounded-2xl p-6 ring-1 ring-slate-800 hover:ring-slate-700 transition-all duration-200">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-brand-accent font-medium mb-2">
                    {item.company}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Responsibilities */}
                <ul className="space-y-2">
                  {item.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
