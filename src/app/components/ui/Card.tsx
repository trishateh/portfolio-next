import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ 
  children, 
  className,
  hover = true 
}: CardProps) {
  return (
    <div className={cn(
      "rounded-2xl ring-1 ring-slate-800 bg-brand-surface transition-all duration-200",
      hover && "hover:ring-slate-700 hover:shadow-card-hover",
      className
    )}>
      {children}
    </div>
  );
}
