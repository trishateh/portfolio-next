import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#060609",
          surface: "#0E0E14",
          surface2: "#15151E",
          line: "#26262F",
          line2: "#3A3A46",
          purple: "#9945FF",
          purpleDark: "#7B2FE0",
          blue: "#5497D5",
          teal: "#43B4CA",
          accent: "#14F195",
          accentDark: "#0FBF77",
        },
        // Keep existing Tailwind colors
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        yellow: {
          50: "#fefce8",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        white: "#ffffff",
        black: "#000000",
        transparent: "transparent",
        current: "currentColor",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Consolas", "monospace"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(3.25rem, 8vw, 7.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(2.5rem, 5.5vw, 5rem)",
          { lineHeight: "1.0", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(1.875rem, 3.5vw, 3rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse at center, #060609 0%, #0E0E14 55%, #060609 100%)",
        "brand-gradient":
          "linear-gradient(90deg, #9945FF 0%, #5497D5 50%, #14F195 100%)",
        "brand-gradient-br":
          "linear-gradient(135deg, #9945FF 0%, #43B4CA 60%, #14F195 100%)",
        "brand-glow-radial":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(153,69,255,0.16), transparent 70%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.02), 0 0 0 1px #26262F inset",
        "card-hover":
          "0 1px 0 0 rgba(255,255,255,0.04), 0 0 0 1px #3A3A46 inset",
        glow: "0 0 24px rgba(20,241,149,0.25)",
        "glow-purple": "0 0 28px rgba(153,69,255,0.35)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientShift: {
          "0%, 100%": {
            transform: "translateX(-50%) translateY(-50%) scale(1)",
          },
          "50%": { transform: "translateX(-50%) translateY(-50%) scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
