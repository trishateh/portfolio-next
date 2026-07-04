import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gradient" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const variantClasses = {
  primary:
    "bg-brand-purple hover:bg-brand-purpleDark text-white shadow-glow-purple transition-all duration-200",
  secondary:
    "bg-brand-blue hover:bg-blue-500 text-white transition-all duration-200",
  // Reserved for the single hero CTA — the only gradient-filled button.
  gradient:
    "bg-brand-gradient text-black font-semibold hover:opacity-90 transition-all duration-200",
  outline:
    "border border-brand-line hover:border-brand-line2 text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200",
  ghost:
    "text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external = false,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-full font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const ariaLabel = props["aria-label"];

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
