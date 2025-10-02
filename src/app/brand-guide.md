# Trisha Teh — Brand Guide (v1)

A concise, premium theme tailored for a blockchain/ web 3 developer portfolio.

## 1) Brand Essence

- **Tone**: Premium • Professional • Technical
- **Keywords**: Web3, security, performance, clarity, credibility
- **Use case**: Display software engineering credibility, projects, stack depth, and outcomes.

## 2) Color System

A flexible dark-first palette with energetic accents. Accessible contrast baked in.

### Core

- **Primary (Accent)**: `#4FD1C5` (Teal 300) – energetic highlight for links, CTAs, tags
- **Primary Dark**: `#0D9488` (Teal 600) – hover/active for CTAs
- **Secondary (Electric Blue)**: `#60A5FA` – subtle secondary accent for gradients & highlights
- **Background (True Dark)**: `#0B0F14` – app shell background
- **Surface**: `#0F172A` (Slate 900) – cards/sections
- **Elevated Surface**: `#111827` (Gray 900) – modals, nav
- **Text Primary**: `#E5E7EB` – main copy
- **Text Secondary**: `#9CA3AF` – subtext
- **Borders/Lines**: `#1F2937` – hairlines and dividers
- **Success**: `#22C55E`
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`

> Tip: Keep accent usage under ~10% of any screen.

### Gradient System

- **Hero Gradient**: radial blend from `#0B0F14` → `#0F172A` with soft sprays of `#60A5FA` and `#4FD1C5`.
- **CTA Glow**: focus ring using `rgba(79,209,197,0.25)`.
- **Card Hover**: subtle linear overlay `transparent → rgba(96,165,250,.06)`.

## 3) Typography

- **Headings**: `Inter` (700/800). Tight tracking for H1/H2.
- **Body**: `Inter` (400/500).
- **Code/Tech Chips**: `JetBrains Mono` (500).
- **Scale**: `text-xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl` (mobile-first; clamp for hero).

### Sample

- **H1**: clamp(2.2rem, 4vw, 3.5rem)
- **H2**: clamp(1.6rem, 2.5vw, 2.25rem)
- **Lead**: `text-slate-300`
- **Body**: `text-slate-300/90`
- **Meta**: `text-slate-400` / `uppercase tracking-wide`

## 4) Spacing, Radius, Shadows

- **Spacing**: 8px grid. Section vertical rhythm: `py-20 md:py-28`.
- **Radius**: `rounded-2xl` for cards, `rounded-full` for pills.
- **Shadows**: no heavy drop shadows; prefer **inner glow** + **border**.
  - Card: `ring-1 ring-slate-800` + `hover:ring-slate-700`.

## 5) Iconography & Illustration

- Icons: `lucide-react`. Line icons, 1.5px stroke.
- Illustrations: abstract grid/noise, subtle orbs and wireframes.

## 6) Motion (Framer Motion)

- **Page Transition**: fade+up 12px, 220ms, `easeOut`.
- **Staggered reveals** for lists (projects, skills) with 40–70ms delay steps.
- **Hero Accents**: low-amplitude parallax (mouse/scroll), 0.6s spring.
- **Hover**: scale 1.02, 160ms; spring on buttons (mass 0.6, stiffness 230).

> Motion should feel confident, **never gimmicky**. Reduce motion for users with `prefers-reduced-motion`.

## 7) Components

- **Navbar**: translucent glass, blur `backdrop-blur-md`, `border-b border-slate-800`. Active link = subtle underline grow.
- **Hero**: large H1, lead line, CTA + secondary CTA (GitHub, LinkedIn). Background: noise + radial gradients.
- **Tech Chips**: pill style (`rounded-full`, `px-3 py-1`, `text-xs`) grouped and filterable.
- **Project Card**: cover image/video, stack chips, 1–2 line summary, badges (role, impact), actions (Case Study, Repo, Live).
- **Case Study Page**: problem → approach → architecture → highlights → outcomes → code snippets → lessons.
- **About**: short introduction + timeline + certs.
- **Contact**: short form + direct email.

## 8) Accessibility & Contrast

- Minimum 4.5:1 for body, 3:1 for large text.
- Focus rings visible (`outline-2 outline-offset-2 focus-visible:outline-teal-400`).
- Keyboard trap-free modals and menus.

## 9) Tailwind Tokens

```ts
// tailwind.config.ts (excerpt)
theme: {
  extend: {
    colors: {
      brand: {
        bg: "#0B0F14",
        surface: "#0F172A",
        surface2: "#111827",
        accent: "#4FD1C5",
        accentDark: "#0D9488",
        blue: "#60A5FA",
      }
    },
    boxShadow: {
      card: "0 1px 0 0 rgba(255,255,255,0.02), 0 0 0 1px #1F2937 inset",
    },
    borderRadius: {
      xl: "1rem",
      "2xl": "1.25rem",
    }
  }
}
```
