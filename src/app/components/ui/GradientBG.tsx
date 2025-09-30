"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientBGProps {
  children: ReactNode;
  className?: string;
  showOrbs?: boolean;
}

export default function GradientBG({ 
  children, 
  className,
  showOrbs = false 
}: GradientBGProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated orbs */}
      {showOrbs && (
        <>
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
