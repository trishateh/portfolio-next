import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const variantClasses = {
  primary:
    "bg-brand-accent hover:bg-brand-accentDark text-white shadow-glow hover:shadow-glow transition-all duration-200",
  secondary:
    "bg-brand-blue hover:bg-blue-500 text-white transition-all duration-200",
  outline:
    "border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200",
  ghost:
    "text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200",
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
    "inline-flex items-center justify-center rounded-full font-medium focus-visible:outline-brand-accent disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
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
