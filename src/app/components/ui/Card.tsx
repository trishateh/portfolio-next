import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  topAccent?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  topAccent = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-brand-surface shadow-card transition-all duration-200",
        hover && "hover:shadow-card-hover",
        className
      )}
    >
      {topAccent && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-gradient"
        />
      )}
      {children}
    </div>
  );
}
