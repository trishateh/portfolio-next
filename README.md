# Trisha Teh — Portfolio

Personal portfolio site for Trisha Teh, Senior Full-Stack Web3 Engineer. A single-page
portfolio (`/`) plus a project case study route (`/projects/arcaden`), built with the
Next.js App Router and TypeScript, styled with Tailwind CSS around a Solana-inspired
purple → blue → green brand system, and animated with Framer Motion and Lenis smooth
scroll.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scroll
- [Zod](https://zod.dev/) for data validation
- [Lucide](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons/) for iconography

## Getting Started

### Requirements

- Node.js 18+ (LTS)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build & Run

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Design System

The site follows a documented brand system — near-black base (`#060609`) with a signature
purple → blue → green gradient (`#9945FF` → `#5497D5` → `#14F195`), oversized display
type, and monospace accents. See [`src/app/brand-guide.md`](src/app/brand-guide.md) for
the full color palette, typography scale, spacing/shadow tokens, and motion rules before
making UI changes.

## SEO

The site ships a dynamic `sitemap.ts` and `robots.ts`, JSON-LD structured data, a
code-generated Open Graph image (via `next/og`), and a `public/llms.txt` file describing
the site for AI crawlers.

## Scripts

Utility scripts under `scripts/` (run with Node, not part of the build):

- **`scripts/generate-icons.mjs`** — Regenerates favicon and PWA icons (including
  `favicon.ico`) from the `public/favicon.svg` logo mark using `sharp` and `png-to-ico`.
  ```bash
  node scripts/generate-icons.mjs
  ```
- **`scripts/optimize-images.mjs`** — Converts raster images under `public/images` to
  WebP using `sharp`. Idempotent — skips sources whose `.webp` output is already up to
  date.
  ```bash
  node scripts/optimize-images.mjs
  ```

## Deployment

The site is deployed on [Netlify](https://www.netlify.com/). The contact form uses
[Netlify Forms](https://docs.netlify.com/forms/setup/), with the static form definition
in `public/__forms.html` so Netlify can detect and provision it at build time.
