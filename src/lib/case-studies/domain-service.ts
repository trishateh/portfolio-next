import type { CaseStudy } from "./schema";

export const domainService: CaseStudy = {
  slug: "domain-service",
  eyebrow: "deep dive — web3 demo",
  title: "Mint your own .ape domain on Polygon",
  gradientWord: "Polygon",
  intro:
    "Ape Name Service is a playful domain registrar I built while learning Web3 — a place to mint your own '.ape' domain as an NFT on Polygon and record information about your apes on-chain. It's an early demo rather than a product, but it's still live, and building it is how I got my hands around domains-as-NFTs and on-chain record storage.",
  role: "Web3 Developer",
  stack: ["Solidity", "Next.js", "Polygon", "Ethers.js", "IPFS"],
  stats: [
    { value: ".ape", label: "domains minted as NFTs" },
    { value: "On-chain", label: "ENS-like record storage per domain" },
  ],
  links: {
    live: "https://domain-service.vercel.app",
    repo: "https://github.com/trishateh/domain-service-backend",
  },
  beats: [
    {
      eyebrow: "The connect gate",
      heading: "One wallet away from a .ape domain",
      body: [
        "The front door leans into the theme — \"The CHIMPion domain service on the blockchain!\" — and, like a lot of dApps, gates the real flow behind a wallet. Until you connect, the badge simply reads Not connected; once you do, you're minting a domain that lives on-chain rather than in some registrar's database.",
        "It's a small, self-contained page on purpose. The idea I wanted to make tangible is that a domain here isn't a record you rent — it's an NFT you own.",
      ],
      media: [
        {
          type: "image",
          src: "/images/domain-service/landing.webp",
          alt: "Ape Name Service landing page with a banana emoji, the CHIMPion domain service tagline, a hanging-monkey illustration, and a Connect Wallet button",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Under the hood",
      heading: "Domains as NFTs, records on-chain",
      body: [
        "Each '.ape' name is minted as an NFT by a Solidity contract deployed to Polygon, a low-fee Layer 2 that made an experiment like this cheap enough to actually play with. Owning the domain NFT means owning the name — transfer the token and the domain goes with it.",
        "Beyond the name itself, the contract stores ENS-like records, so a holder can attach information about their apes to the domain and have it live on-chain. A Next.js front end talks to the contract through Ethers.js, which is where I learned to wire a React app end-to-end to a deployed smart contract.",
      ],
      media: [
        {
          type: "image",
          src: "/images/projects/domain-service.webp",
          alt: "Ape Name Service, a .ape domain registrar demo built on Polygon",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "An early lesson in ownership on-chain",
    body: [
      "Ape Name Service is honestly a learning project — a tutorial-shaped demo with its own branding — but it's a complete one: a Solidity contract on Polygon that mints '.ape' names as NFTs, stores records against them, and hands ownership to the holder's wallet. It's still live, and it's part of how I moved from reading about Web3 to shipping it.",
    ],
  },
  related: ["solana-nft-drop", "arcaden"],
  seo: {
    title: "Ape Name Service Case Study | Trisha Teh",
    description:
      "An early Web3 learning project: a .ape domain registrar on Polygon that mints domains as NFTs with ENS-like on-chain records, built in Solidity and Next.js.",
  },
};
