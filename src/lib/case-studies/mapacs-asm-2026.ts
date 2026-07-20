import type { CaseStudy } from "./schema";

export const mapacsAsm2026: CaseStudy = {
  slug: "mapacs-asm-2026",
  eyebrow: "deep dive — events platform",
  title: "Event infrastructure for MAPACS ASM 2026",
  gradientWord: "MAPACS ASM 2026",
  intro:
    "MAPACS ASM 2026 is the 29th Annual Scientific Congress of the Malaysian Association of Plastic, Aesthetic and Craniomaxillofacial Surgeons, held 4–6 June 2026 in George Town, Penang under the theme \"Science & Innovation Meet Art\". I built the complete digital infrastructure for it end to end — a Next.js congress site for the programme, speakers, and registration, wired to a Shopify storefront for merchandise — so delegates could find everything about the event and buy into it from one place.",
  role: "Full-stack Engineer",
  stack: ["Next.js", "TypeScript", "Shopify", "React"],
  stats: [
    { value: "4–6 Jun", label: "three-day congress in Penang, 2026" },
    { value: "8", label: "countries of faculty" },
    { value: "10", label: "symposium sessions in the programme" },
    { value: "Shopify", label: "storefront wired into the site" },
  ],
  links: {
    live: "https://mapacs.vercel.app/events/asm-2026",
  },
  beats: [
    {
      eyebrow: "Landing",
      heading: "A congress that opens on its host city",
      body: [
        "The site opens on Penang. The hero sits over an aerial photograph of the George Town waterfront — a UNESCO World Heritage city — with a translucent nav bar, a \"PENANG · 2026\" badge, the MAPACS wordmark, and the full title of the 29th Annual Scientific Congress. It sets the tone the theme asks for: science and innovation meeting art, in a place that embodies both.",
        "The two things a prospective delegate needs first are answered before they scroll: glass info cards state the dates — 4 to 6 June 2026 — and the venue, St. Giles Wembley in Penang, with a Register Now call to action sitting in the nav the whole time. The build is the standard mobile-first Next.js stack, so the hero and its cards reflow cleanly from a phone up to a wide desktop.",
      ],
      media: [
        {
          type: "image",
          src: "/images/mapacs-asm-2026/hero.webp",
          alt: "MAPACS 29th Annual Scientific Congress 2026 hero over an aerial photo of the George Town Penang waterfront, with a Penang 2026 badge, the MAPACS wordmark, and glass info cards showing the dates and St. Giles Wembley venue",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Programme",
      heading: "One microsite, every section a delegate needs",
      body: [
        "Past the hero, the event runs as a microsite with a pill-style sub-nav threading its sections together — Overview, Committee, Registration, Abstract Submission, Sponsorship, Programme, Speakers, and Accommodation — so a delegate can move between the welcome letter, the schedule, and the booking details without losing their place. The Overview leads with the Organising Committee's letter framing the \"Science & Innovation Meet Art\" theme and the UNESCO World Heritage setting.",
        "Behind those tabs sits a genuinely dense congress: ten symposium sessions across breast, body, eyelid, nasal, and facial work, plenary lectures, free scientific paper presentations, and an industry symposium, delivered by a faculty drawn from eight countries — the US, Italy, Japan, Thailand, Indonesia, Singapore, and Cambodia alongside Malaysian surgeons. Registration is tiered by member and non-member, trainee, and international rates with an early-bird cutoff, and the site's job is to make that whole structure navigable rather than overwhelming.",
      ],
      media: [
        {
          type: "image",
          src: "/images/mapacs-asm-2026/overview.webp",
          alt: "MAPACS event microsite Overview tab with a pill-style sub-nav for Committee, Registration, Abstract Submission, Sponsorship, Programme, Speakers, and Accommodation, and a welcome letter from the Organising Committee",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Commerce",
      heading: "Registration and merchandise, backed by Shopify",
      body: [
        "A congress isn't only an agenda — it also has to process funds, for delegate registration and for the event merchandise that goes with a milestone like a 29th congress. Rather than bolt a fragile custom checkout onto the site, I wired the storefront to Shopify, so the merchandise catalogue, cart, and payment handling run on infrastructure built for commerce while the browsing experience stays inside the MAPACS-branded site.",
        "That split is deliberate: the Next.js front end owns the look and the content, and Shopify owns inventory, checkout, and the parts of taking payments that you don't want to reinvent for a one-off event. Registration itself runs through the same storefront — delegate and speaker passes are products alongside add-ons like the Aesthetic Masterclass and the conference dinner — so every payment the congress takes flows through one checkout.",
      ],
      media: [
        {
          type: "image",
          src: "/images/mapacs-asm-2026/storefront.webp",
          alt: "MAPACS ASC 2026 Shopify storefront with Registration, Trade Sponsorship, Event Page and Merchandise in the nav, listing delegate and speaker registration products alongside the Aesthetic Masterclass and Conference Dinner add-ons",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "A complete digital home for a medical congress",
    body: [
      "MAPACS ASM 2026 shipped as one coherent surface for a three-day surgical congress in Penang: a Next.js site carrying the programme, faculty, and registration, and a Shopify storefront handling merchandise and payments behind it. I built the whole thing end to end, so a delegate can learn about the congress, register for it, and buy into it without ever leaving the event's own site.",
    ],
  },
  related: ["pinjocep", "solana-nft-drop", "domain-service"],
  seo: {
    title: "MAPACS ASM 2026 Case Study | Trisha Teh",
    description:
      "A case study of the MAPACS ASM 2026 congress platform — a Next.js event site and Shopify storefront built end to end for a surgical congress in Penang.",
  },
};
