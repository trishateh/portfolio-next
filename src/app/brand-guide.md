# Trisha Teh — Brand Guide (v2)

A bold, geometric theme for a blockchain / web3 developer portfolio. Solana-inspired
purple → blue → green on near-black, with oversized display type and monospace accents.

## 1) Brand Essence

- **Tone**: Bold • Technical • Confident
- **Keywords**: Web3, geometric, high-contrast, live systems, credibility
- **Direction**: "Bold Geometric" — near-black base, oversized display type, monospace
  accents, bento grids.

## 2) Color System

Dark-first, near-black shell with a signature purple → blue → green spectrum. Accents
carry meaning: purple is the workhorse, green signals "live".

### Palette

| Token             | Hex       | Role                                                        |
| ----------------- | --------- | ----------------------------------------------------------- |
| `brand.bg`        | `#060609` | App shell background (near-black)                           |
| `brand.surface`   | `#0E0E14` | Cards / sections                                            |
| `brand.surface2`  | `#15151E` | Elevated surfaces — modals, nav, nested tiles              |
| `brand.line`      | `#26262F` | Hairlines, dividers, card borders                          |
| `brand.line2`     | `#3A3A46` | Hover / active borders                                      |
| `brand.purple`    | `#9945FF` | Workhorse accent — link hover, focus rings, active chips   |
| `brand.purpleDark`| `#7B2FE0` | Purple hover / pressed states                              |
| `brand.blue`      | `#5497D5` | Gradient midpoint only                                     |
| `brand.teal`      | `#43B4CA` | Gradient midpoint only (brand-gradient-br)                 |
| `brand.accent`    | `#14F195` | "Live / confirmed" green — status dots, stat values        |
| `brand.accentDark`| `#0FBF77` | Green hover / pressed states                               |
| Text Primary      | `#E5E7EB` | Main copy                                                   |
| Text Secondary    | `#9CA3AF` | Subtext, meta                                              |
| Warning           | `#F59E0B` | Warning states                                             |
| Error             | `#EF4444` | Error states                                               |

> Keep accent usage restrained — the near-black base does the heavy lifting.

### Signature Gradient

The brand spectrum runs purple → blue → green:

```
linear-gradient(90deg, #9945FF 0%, #5497D5 50%, #14F195 100%)   /* brand-gradient */
linear-gradient(135deg, #9945FF 0%, #43B4CA 60%, #14F195 100%)  /* brand-gradient-br */
```

Supporting fields:

- **Hero Gradient**: `radial-gradient(ellipse at center, #060609 0%, #0E0E14 55%, #060609 100%)`
- **Brand Glow**: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(153,69,255,0.16), transparent 70%)`
  (`bg-brand-glow-radial`) — a soft purple bloom at the top of a section.
- **Green Glow (CTA/focus)**: `0 0 24px rgba(20,241,149,0.25)` (`shadow-glow`)
- **Purple Glow**: `0 0 28px rgba(153,69,255,0.35)` (`shadow-glow-purple`)

### Gradient Usage Rules

1. **Max ONE `gradient-text` element per viewport.** The spectrum is a focal point, not a
   texture.
2. **Gradient fills only on**: hero art strokes, the primary CTA, the 1px top-border of
   stat tiles, and the logo mark. Nothing else.
3. **Accent semantics**:
   - **Purple `#9945FF`** = workhorse accent — link hover, focus rings, active chips.
   - **Green `#14F195`** = "live / confirmed" — status dots, stat values, success states.
   - **Blue `#5497D5` / Teal `#43B4CA`** live *only inside gradients* — never as solid fills.
4. **JetBrains Mono** carries all micro-labels: eyebrows/labels (uppercase,
   `tracking-[0.2em]`), stat values, chips, and footer meta.

## 3) Typography

- **Display (H1/H2, stat numerals)**: `Space Grotesk` via `font-display`. Uses the display
  scale below.
- **Body**: `Inter` (400/500).
- **Accents (eyebrows, labels, chips, stat values, footer meta)**: `JetBrains Mono` (500),
  uppercase where used as labels, `tracking-[0.2em]`.

### Display Scale

| Token          | clamp()                          | line-height | tracking  |
| -------------- | -------------------------------- | ----------- | --------- |
| `display-2xl`  | `clamp(3.25rem, 8vw, 7.5rem)`    | `0.95`      | `-0.04em` |
| `display-xl`   | `clamp(2.5rem, 5.5vw, 5rem)`     | `1.0`       | `-0.03em` |
| `display-lg`   | `clamp(1.875rem, 3.5vw, 3rem)`   | `1.05`      | `-0.02em` |

- **H1**: `font-display text-display-2xl` (or `display-xl` on inner pages).
- **H2 / section heads**: `font-display text-display-lg`.
- **Lead**: `text-slate-300`. **Body**: `text-slate-300/90`. **Meta**: mono,
  `text-slate-400`, uppercase, `tracking-[0.2em]`.

## 4) Spacing, Radius, Shadows

- **Spacing**: 8px grid. Section vertical rhythm: `py-20 md:py-28`.
- **Radius**: `rounded-2xl` for cards; `rounded-full` (pill) for buttons and chips.
- **Shadows**: no heavy drop shadows; prefer **inner border + glow**.
  - Card: `shadow-card` (`0 0 0 1px #26262F inset`), hover `shadow-card-hover`
    (`0 0 0 1px #3A3A46 inset`).
  - Emphasis: `shadow-glow` (green) or `shadow-glow-purple`.

## 5) Iconography & Illustration

- Icons: `lucide-react`. Line icons, 1.5px stroke.
- Illustration leans geometric: bento grids, block-grid texture, gradient strokes.
  **Orbs are retired.**

## 6) Motion (Framer Motion)

- **Durations**: `0.2–0.5s`, `easeOut`.
- **Reveals**: fade + up 12px, once-per-view (`viewport={{ once: true }}`); stagger lists
  with 40–70ms delay steps.
- **Hover**: subtle scale (~1.02), fast transition on buttons/cards.
- Always respect `prefers-reduced-motion` — the global reset collapses animation and
  transition durations for those users.

> Motion should feel confident, **never gimmicky**.

## 7) Texture

- **`.bg-block-grid`**: faint 56px block-grid (1px lines at `rgba(255,255,255,0.025)`),
  radially masked so it fades at the edges. Use as an absolutely-positioned overlay div
  behind content.
- **`bg-brand-glow-radial`**: soft purple bloom at the top of hero / feature sections.
- Combine sparingly — texture supports the near-black base, it does not compete with it.

## 8) Accessibility & Contrast

- Minimum 4.5:1 for body, 3:1 for large text.
- Focus rings visible — purple `#9945FF`, `outline-2 outline-offset-2`.
- Keyboard trap-free modals and menus.

## 9) Tailwind Tokens

```ts
// tailwind.config.ts (excerpt)
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
    },
    fontFamily: {
      display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
    },
    fontSize: {
      "display-2xl": ["clamp(3.25rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
      "display-xl": ["clamp(2.5rem, 5.5vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
      "display-lg": ["clamp(1.875rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
    },
    boxShadow: {
      card: "0 1px 0 0 rgba(255,255,255,0.02), 0 0 0 1px #26262F inset",
      glow: "0 0 24px rgba(20,241,149,0.25)",
      "glow-purple": "0 0 28px rgba(153,69,255,0.35)",
    },
    borderRadius: {
      xl: "1rem",
      "2xl": "1.25rem",
    },
  },
}
```
