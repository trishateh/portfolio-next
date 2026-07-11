import type { CaseStudy } from "./schema";

export const solanaNftDrop: CaseStudy = {
  slug: "solana-nft-drop",
  eyebrow: "deep dive — web3 demo",
  title: "A fair-mint NFT drop on Solana",
  gradientWord: "Solana",
  intro:
    "Solana Candy Drop is one of the first things I built while teaching myself blockchain developement on Solana — a small NFT drop machine that lets anyone connect a Phantom wallet and mint from a handcrafted collection straight into their own wallet. It's a demo, not a product, and it's where a lot of my Solana experience started.",
  role: "Web3 Developer",
  stack: [
    "React",
    "Solana web3.js",
    "Metaplex Candy Machine",
    "SPL Token Program",
    "Phantom Wallet",
  ],
  stats: [
    { value: "Fair mint", label: "ordered, first-come minting via Candy Machine" },
    { value: "100%", label: "on-chain mint records" },
  ],
  links: {
    live: "https://nft-drop-starter-project-neon.vercel.app",
    repo: "https://github.com/trishateh/nft-drop-starter-project",
  },
  beats: [
    {
      eyebrow: "The mint gate",
      heading: "Connect Phantom, then mint",
      body: [
        "The landing screen keeps the promise simple — a fair-mint NFT drop machine — and gates everything behind a single Connect Phantom Wallet button. Nothing happens until a real wallet is attached, which is exactly the point: the mint flow is on-chain, so it needs an on-chain identity before it will do anything.",
        "It's a deliberately small surface. I wanted the first thing a visitor sees to be the one decision that matters on Solana — connect a wallet — rather than a wall of chrome around it.",
      ],
      media: [
        {
          type: "image",
          src: "/images/solana-nft-drop/landing.webp",
          alt: "Solana Candy Drop landing page with a fair-mint NFT drop machine tagline and a Connect Phantom Wallet button",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Under the hood",
      heading: "A fair mint, powered by Candy Machine",
      body: [
        "The drop runs on Metaplex's Candy Machine, the on-chain program built for ordered, first-come NFT distribution — so mints happen fairly and in sequence rather than at the whim of whoever can spam the fastest transaction. Each minted piece is issued through the SPL Token Program and lands directly in the minter's wallet.",
        "Wiring a React front end to Candy Machine, the Phantom wallet adapter, and the SPL Token Program taught me the moving parts of a real Solana mint — signing, program accounts, and on-chain state.",
      ],
      media: [
        {
          type: "image",
          src: "/images/projects/solana-nft-drop.webp",
          alt: "Solana Candy Drop, an NFT minting demo built with the Metaplex Candy Machine",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "Where my Solana work began",
    body: [
      "Solana Candy Drop is unapologetically an early learning project — a fair-mint demo rather than a launched collection. But it's a complete, working mint: connect Phantom, mint from a handcrafted collection via Candy Machine, receive an SPL token in your wallet. It's the groundwork that later carried into shipping production Solana products.",
    ],
  },
  related: ["domain-service", "arcaden"],
  seo: {
    title: "Solana NFT Drop Case Study | Trisha Teh",
    description:
      "An early Web3 learning project: a fair-mint NFT drop on Solana built with the Metaplex Candy Machine, the SPL Token Program, and the Phantom wallet adapter.",
  },
};
