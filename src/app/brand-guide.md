# Trisha Teh — Brand Guide (v2)

A bold, geometric theme for a product-engineering / web3 developer portfolio. A soft
orchid → indigo → aqua spectrum on near-black, with oversized display type and monospace
accents. The brand reads modern product-engineering, not crypto — it appeals to web2 and
web3 employers alike.

## 1) Brand Essence

- **Tone**: Bold • Technical • Confident
- **Keywords**: Web3, geometric, high-contrast, live systems, credibility
- **Direction**: "Bold Geometric" — near-black base, oversized display type, monospace
  accents, bento grids.

## 2) Color System

Dark-first, near-black shell with a signature orchid → indigo → aqua spectrum, tuned to a
soft mesh-gradient feel. Accents carry meaning: purple is the workhorse, aqua signals
status / "live" (used sparingly — it replaced the old neon green).

### Palette

| Token             | Hex       | Role                                                          |
| ----------------- | --------- | ------------------------------------------------------------- |
| `brand.bg`        | `#060609` | App shell background (near-black)                             |
| `brand.surface`   | `#0E0E14` | Cards / sections                                              |
| `brand.surface2`  | `#15151E` | Elevated surfaces — modals, nav, nested tiles                |
| `brand.line`      | `#26262F` | Hairlines, dividers, card borders                            |
| `brand.line2`     | `#3A3A46` | Hover / active borders                                        |
| `brand.purple`    | `#8B5CF6` | Workhorse accent — link hover, focus rings, active chips     |
| `brand.purpleDark`| `#7C3AED` | Purple hover / pressed states                                |
| `brand.blue`      | `#6366F1` | Indigo gradient midpoint only                                |
| `brand.teal`      | `#5EEAD4` | Aqua gradient endpoint                                        |
| `brand.accent`    | `#5EEAD4` | Highlight / status accent (soft aqua) — status dots, stat values |
| `brand.accentDark`| `#2DD4BF` | Aqua hover / pressed states                                  |
| `brand.orchid`    | `#C084FC` | Highlight hue — gradient endpoint + occasional highlight     |
| Text Primary      | `#E5E7EB` | Main copy                                                     |
| Text Secondary    | `#9CA3AF` | Subtext, meta                                                |
| Warning           | `#F59E0B` | Warning states                                               |
| Error             | `#EF4444` | Error states                                                 |

> Keep accent usage restrained — the near-black base does the heavy lifting.

### Signature Gradient

The brand spectrum runs orchid → indigo → aqua:

```
linear-gradient(90deg, #C084FC 0%, #6366F1 50%, #5EEAD4 100%)   /* brand-gradient */
linear-gradient(135deg, #C084FC 0%, #6366F1 55%, #5EEAD4 100%)  /* brand-gradient-br */
```

Supporting fields:

- **Hero Gradient**: `radial-gradient(ellipse at center, #060609 0%, #0E0E14 55%, #060609 100%)`
- **Brand Glow**: a soft dual-tone aurora — purple/indigo bloom top-right, faint aqua glow
  bottom-left, both very low alpha (`bg-brand-glow-radial`):
  ```
  radial-gradient(ellipse 70% 50% at 70% -10%, rgba(139,92,246,0.14), transparent 65%),
  radial-gradient(ellipse 50% 40% at 15% 90%, rgba(94,234,212,0.07), transparent 70%)
  ```
- **Aqua Glow (CTA/focus)**: `0 0 24px rgba(94,234,212,0.22)` (`shadow-glow`)
- **Purple Glow**: `0 0 28px rgba(139,92,246,0.32)` (`shadow-glow-purple`)

### Gradient Usage Rules

1. **Max ONE `gradient-text` element per viewport.** The spectrum is a focal point, not a
   texture.
2. **Gradient fills only on**: hero art strokes, the primary CTA, the 1px top-border of
   stat tiles, and the logo mark. Nothing else.
3. **Accent semantics**:
   - **Purple `#8B5CF6`** = workhorse accent — link hover, focus rings, active chips.
   - **Aqua `#5EEAD4`** = highlight / status accent — status dots, stat values, success
     states. Used sparingly; it replaced the old neon green.
   - **Orchid `#C084FC`** = highlight hue — appears only inside gradients and the
     occasional highlight, never as a broad solid fill.
   - **Indigo `#6366F1`** lives *only inside gradients* — never as a solid fill.
4. **JetBrains Mono** carries all micro-labels: eyebrows/labels (uppercase,
   `tracking-[0.2em]`), stat values, chips, and footer meta. Eyebrows are plain mono labels
   **without** a `//` prefix.

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
  - Emphasis: `shadow-glow` (aqua) or `shadow-glow-purple`.

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
- **`bg-brand-glow-radial`**: soft dual-tone aurora — purple/indigo top-right, faint aqua
  bottom-left — behind hero / feature sections.
- Combine sparingly — texture supports the near-black base, it does not compete with it.

## 8) Accessibility & Contrast

- Minimum 4.5:1 for body, 3:1 for large text.
- Focus rings visible — purple `#8B5CF6`, `outline-2 outline-offset-2`.
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
        purple: "#8B5CF6",
        purpleDark: "#7C3AED",
        blue: "#6366F1",
        teal: "#5EEAD4",
        accent: "#5EEAD4",
        accentDark: "#2DD4BF",
        orchid: "#C084FC",
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
      glow: "0 0 24px rgba(94,234,212,0.22)",
      "glow-purple": "0 0 28px rgba(139,92,246,0.32)",
    },
    borderRadius: {
      xl: "1rem",
      "2xl": "1.25rem",
    },
  },
}
```
