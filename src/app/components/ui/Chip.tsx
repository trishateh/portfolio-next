import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "blue";
  size?: "sm" | "md";
  onClick?: () => void;
  active?: boolean;
}

const variantClasses = {
  default: "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-200",
  accent: "bg-brand-accent/10 text-brand-accent border border-brand-accent/20 hover:bg-brand-accent/20",
  blue: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20 hover:bg-brand-blue/20",
};

const sizeClasses = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1 text-xs",
};

export default function Chip({ 
  children, 
  className,
  variant = "default",
  size = "md",
  onClick,
  active = false
}: ChipProps) {
  const Component = onClick ? "button" : "span";
  
  return (
    <Component
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full font-mono font-medium transition-all duration-200",
        variantClasses[variant],
        sizeClasses[size],
        onClick && "cursor-pointer focus-visible:outline-brand-accent",
        active && "ring-2 ring-brand-accent",
        className
      )}
    >
      {children}
    </Component>
  );
}
