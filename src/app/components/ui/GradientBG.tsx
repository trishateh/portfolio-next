"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientBGProps {
  children: ReactNode;
  className?: string;
  // Retained for API compatibility. Orbs are retired; this prop is now a no-op.
  showOrbs?: boolean;
  // "visible" is required on pages using position: sticky, which
  // overflow-hidden would otherwise break.
  overflow?: "hidden" | "visible";
}

export default function GradientBG({
  children,
  className,
  overflow = "hidden",
}: GradientBGProps) {
  return (
    <div
      className={cn(
        "relative bg-brand-bg",
        overflow === "hidden" && "overflow-hidden",
        className
      )}
    >
      {/* Soft purple bloom at the top of the section */}
      <div className="pointer-events-none absolute inset-0 bg-brand-glow-radial" />

      {/* Faint block-grid texture, radially masked at the edges */}
      <div className="pointer-events-none absolute inset-0 bg-block-grid" />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
