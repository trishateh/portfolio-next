import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg";
}

const spacingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20", 
  lg: "py-20 md:py-28",
};

export default function Section({ 
  children, 
  className, 
  id,
  spacing = "lg" 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}
