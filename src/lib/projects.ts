import { z } from "zod";

// Project schema
export const ProjectSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  category: z.enum(["dapp", "smart-contract", "web"]),
  summary: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  heroMedia: z.object({
    type: z.enum(["image", "video"]),
    src: z.string(),
    poster: z.string().optional(),
  }),
  links: z
    .object({
      demo: z.string().optional(),
      repo: z.string().optional(),
      caseStudy: z.string().optional(),
    })
    .optional(),
  featured: z.boolean().optional(),
  impact: z.array(z.string()).optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

// Project data
export const projects: Project[] = [
  {
    id: 1,
    slug: "wave-portal",
    title: "Wave Portal",
    category: "dapp",
    summary:
      "A DApp where the community can send a wave / message and have the data saved on the blockchain.",
    description:
      "Simple blockchain-based messaging system where users can send waves/messages that are permanently stored on the blockchain.",
    stack: ["Solidity", "React", "Ethers.js", "Hardhat"],
    heroMedia: {
      type: "image",
      src: "/images/projects/wave-portal.webp",
    },
    links: {
      repo: "https://github.com/trishateh/wave-portal",
    },
    impact: ["Community-driven project achieving on-chain message storage"],
  },
  {
    id: 2,
    slug: "nft-collection",
    title: "NFT Collection",
    category: "dapp",
    summary:
      "This is a website where users can mint NFTs and view them on OpenSea.",
    description:
      "Complete NFT minting platform with OpenSea integration, allowing users to mint, trade, and showcase their digital collectibles.",
    stack: ["Solidity", "React", "Ethers.js", "IPFS"],
    heroMedia: {
      type: "image",
      src: "/images/projects/nft-collection.webp",
    },
    links: {
      repo: "https://github.com/trishateh/NFT-collection",
    },
    impact: [
      "Launched a complete NFT collection with OpenSea integration",
      "Implemented IPFS for decentralized metadata storage",
    ],
  },
  {
    id: 3,
    slug: "gif-portal",
    title: "GIF Portal",
    category: "dapp",
    summary:
      "A DApp on Solana built with React & Rust where the community can submit GIFs and view it on the portal.",
    description:
      "Decentralized GIF sharing platform on Solana where users can submit and view GIFs using their Solana wallets.",
    stack: ["React", "Rust", "Solana", "Anchor"],
    heroMedia: {
      type: "image",
      src: "/images/projects/gif-portal.webp",
    },
    links: {
      repo: "https://github.com/trishateh/gif-portal",
    },
    impact: ["Built decentralized community-driven content sharing on Solana"],
  },
  {
    id: 4,
    slug: "nft-game",
    title: "NFT Game",
    category: "dapp",
    summary:
      "This is a mini-turn based browser game where players can mint NFTs and make them playable characters in the game.",
    description:
      "Turn-based browser game integrating NFTs as playable characters, combining gaming mechanics with blockchain ownership.",
    stack: ["Solidity", "Hardhat", "React", "Ethers.js"],
    heroMedia: {
      type: "image",
      src: "/images/projects/nft-game.webp",
    },
    links: {
      repo: "https://github.com/trishateh/nft-game",
    },
    impact: ["Integrated blockchain ownership with gameplay"],
  },
  {
    id: 5,
    slug: "solana-nft-drop",
    title: "Solana NFT Drop",
    category: "dapp",
    summary:
      "This is a web app on Solana built with Metaplex that lets users mint and receive NFTs from my handcrafted collection in their wallet.",
    description:
      "Solana-based NFT minting platform using Metaplex framework for creating and distributing limited edition NFT collections.",
    stack: ["Rust", "Metaplex", "Anchor", "React"],
    heroMedia: {
      type: "image",
      src: "/images/projects/solana-nft-drop.webp",
    },
    links: {
      demo: "https://nft-drop-starter-project-neon.vercel.app",
      repo: "https://github.com/trishateh/nft-drop-starter-project",
    },
    impact: ["Utilized Metaplex to create NFTs with the SPL Token Program"],
  },
  {
    id: 6,
    slug: "bacon-dao",
    title: "BaconDAO",
    category: "dapp",
    summary:
      "BaconDAO is a community of bacon lovers that can receive $BACON and members can vote on proposals.",
    description:
      "Decentralized autonomous organization for bacon enthusiasts with governance token ($BACON) and proposal voting mechanisms.",
    stack: ["Solidity", "Ethers.js", "Hardhat", "React"],
    heroMedia: {
      type: "image",
      src: "/images/projects/dao.webp",
    },
    links: {
      repo: "https://github.com/trishateh/myDAO",
    },
    impact: [
      "Built governance system with token-based community-driven voting mechanism",
    ],
  },
  {
    id: 7,
    slug: "domain-service",
    title: "Ape Name Service",
    category: "dapp",
    summary:
      "Ape Name Service is a Domain Name Service on Polygon Layer 2. Mint your own '.ape' domain NFTs and record information about your apes on the blockchain.",
    description:
      "Decentralized domain name service built on Polygon, allowing users to mint .ape domains as NFTs with on-chain metadata storage.",
    stack: ["Solidity", "Ethers.js", "IPFS", "Next.js"],
    heroMedia: {
      type: "image",
      src: "/images/projects/domain-service.webp",
    },
    links: {
      demo: "https://domain-service.vercel.app",
      repo: "https://github.com/trishateh/domain-service-backend",
    },
    impact: ["Domain Name Service on Polygon Layer 2"],
  },
  {
    id: 8,
    slug: "burn-island",
    title: "Burn Island",
    category: "smart-contract",
    summary:
      "Burn Island is a part of Arcaden where users who own V1 G3M NFTs can burn it in exchange for V2 Collectibles.",
    description:
      "Smart contract system enabling users to burn V1 NFTs in exchange for upgraded V2 collectibles, implementing secure token migration mechanics.",
    stack: ["Solidity", "Hardhat", "IPFS", "React"],
    heroMedia: {
      type: "image",
      src: "/images/projects/burn-island.webp",
    },
    links: {
      repo: "https://bscscan.com/token/0x19e234fbeE6e3cBfd135CE9e0867d8a5729b1136#code",
      caseStudy: "/projects/arcaden",
    },
    impact: [
      "Facilitated secure gasless migration of 5,000+ V1 NFTs to V2",
      "Implemented secure burning mechanism with zero exploits",
    ],
  },
  {
    id: 9,
    slug: "v2-minting",
    title: "Transform Collectibles Into NFTs",
    category: "smart-contract",
    summary:
      "Featuring lazy minting and signature minting for NFT collection, seamlessly transforming in-app treasures into blockchain assets.",
    description:
      "Advanced NFT minting system with lazy minting and signature-based minting, enabling seamless transformation of in-game assets to blockchain NFTs.",
    stack: ["Solidity", "Hardhat", "IPFS", "React"],
    heroMedia: {
      type: "image",
      src: "/images/projects/v2minting.webp",
    },
    links: {
      repo: "https://polygonscan.com/address/0xaA471316D84579c6CF52C8240b9e21A1f6A21DE7#code",
      caseStudy: "/projects/arcaden",
    },
    impact: [
      "Enabled gasless lazy minting for 50,000+ collectibles",
      "Seamlessly integrated with existing game infrastructure",
    ],
  },
  {
    id: 10,
    slug: "nft-staking",
    title: "NFT Staking",
    category: "smart-contract",
    summary:
      "Stake ERC-721 NFT characters and equip them with ERC-1155 weapons to be eligible to go on quests.",
    description:
      "Innovative NFT staking mechanism that combines character NFTs with weapon NFTs to create a gamified staking experience with quest rewards.",
    stack: ["Solidity", "Hardhat", "Ethers.js", "React"],
    heroMedia: {
      type: "image",
      src: "/images/projects/nft-staking.webp",
    },
    links: {
      repo: "https://polygonscan.com/address/0x6efd558C9694Be4A40EE260dcA3Db56689f61be7#code",
      caseStudy: "/projects/arcaden",
    },
    featured: true,
    impact: [
      "Enabled gasless gamified staking mechanism which increased user engagement by 300%",
    ],
  },
  {
    id: 11,
    slug: "lavarage-dapp",
    title: "Lavarage DApp",
    category: "dapp",
    summary:
      "A decentralized spot margin trading platform, specializing in long-tail assets.",
    description:
      "Lavarage is a comprehensive DeFi platform that enables spot margin trading with isolated pools for long-tail assets. Built with advanced oracle integration and liquidation mechanisms.",
    stack: ["Solana", "React", "NestJS", "PostgreSQL"],
    heroMedia: {
      type: "image",
      src: "/images/projects/lavarage-dapp.webp",
    },
    links: {
      demo: "https://app.lavarage.xyz",
      repo: "https://lavarage.gitbook.io/lavarage",
    },
    featured: true,
    impact: [
      "Processed $200M+ in trading volume for long-tail assets",
      "Enabled spot margin trading with isolated pools for long-tail assets",
    ],
  },
  {
    id: 12,
    slug: "partners-portal",
    title: "Partners Portal",
    category: "dapp",
    summary:
      "A portal for partners to create and manage API keys, for integrating with the Lavarage API.",
    description:
      "Comprehensive partner management system enabling third-party integrations with the Lavarage ecosystem through secure API key management.",
    stack: ["React", "Auth0", "NestJS", "PostgreSQL"],
    heroMedia: {
      type: "image",
      src: "/images/projects/partners-portal.webp",
    },
    links: {
      demo: "https://partners-portal.lavarave.wtf",
      repo: "https://lavarage-api.readme.io",
    },
    featured: true,
    impact: ["Enabled secure API key management for 20+ partners"],
  },
  {
    id: 13,
    slug: "lenders-portal",
    title: "Lenders Portal",
    category: "dapp",
    summary:
      "A decentralized lending platform for liquidity providers to create, monitor and manage loan offers.",
    description:
      "Advanced lending platform that allows liquidity providers to create customized loan offers with real-time monitoring and risk assessment.",
    stack: ["React", "TypeScript", "NestJS", "Solana"],
    heroMedia: {
      type: "image",
      src: "/images/projects/lenders-portal.webp",
    },
    links: {
      demo: "https://yield.lavarage.xyz",
      repo: "https://lavarage.gitbook.io/lavarage",
    },
    featured: true,
    impact: [
      "Facilitated loan offer creation, real-time monitoring and risk assessment",
    ],
  },
  {
    id: 14,
    slug: "mapacs-asm-2026",
    title: "MAPACS Annual Scientific Congress 2026",
    category: "web",
    summary:
      "Full digital event infrastructure for the MAPACS Annual Scientific Congress 2026.",
    description:
      "Built the complete digital event infrastructure for MAPACS ASM 2026, including a Next.js conference website and a Shopify storefront for merchandise sales and delegate registration.",
    stack: ["Next.js", "TypeScript", "Shopify", "React"],
    heroMedia: {
      type: "image",
      src: "/images/projects/mapacs.webp",
    },
    links: {
      demo: "https://mapacs.vercel.app/events/asm-2026",
    },
    impact: [
      "Delivered full conference digital infrastructure end-to-end",
      "Integrated Shopify storefront for merchandise and delegate registration",
    ],
  },
  {
    id: 15,
    slug: "yei-finance",
    title: "Yei Finance",
    category: "dapp",
    summary:
      "A production-grade DeFi super-app on Sei spanning money market, cross-chain bridge, and token swap.",
    description:
      "Full-stack DeFi platform on Sei covering the full spectrum: money market for lending and borrowing, a cross-chain bridge, and YeiSwap for token swaps.",
    stack: ["React", "TypeScript", "Solidity"],
    heroMedia: {
      type: "image",
      src: "/images/projects/yei-finance.webp",
    },
    links: {
      demo: "https://app.yei.finance",
    },
    featured: true,
    impact: [
      "Ownership across frontend, backend services, and smart contract integrations",
    ],
  },
  {
    id: 16,
    slug: "clovis",
    title: "Clovis",
    category: "dapp",
    summary:
      "A cross-chain DeFi platform for lending and borrowing across multiple blockchain networks, currently live on testnet.",
    description:
      "Cross-chain DeFi infrastructure enabling seamless lending and borrowing across multiple blockchain networks. Designed for capital efficiency and interoperability, currently deployed on testnet.",
    stack: ["React", "TypeScript", "Solidity"],
    heroMedia: {
      type: "image",
      src: "/images/projects/clovis-testnet.webp",
    },
    links: {
      demo: "https://testnet.clovis.network",
    },
    featured: true,
    impact: [
      "Built cross-chain DeFi lending and borrowing platform from the ground up",
      "Deployed on testnet with multi-chain interoperability across networks",
    ],
  },
];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 6);
}

export function getProjectsByCategory(
  category: Project["category"]
): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => b.id - a.id);
}
