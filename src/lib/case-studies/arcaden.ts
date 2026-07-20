import type { CaseStudy } from "./schema";

export const arcaden: CaseStudy = {
  slug: "arcaden",
  eyebrow: "deep dive — web3 gaming",
  title: "Play, collect, and earn on Arcaden",
  gradientWord: "Arcaden",
  cardImage: "/images/arcaden/arcaden-hero.webp",
  intro:
    "Arcaden was a web3 gaming platform where players logged in with Sign-In with Ethereum, topped up in-game tokens, traded collectibles, and staked NFT characters on quests. I worked on the smart contracts and frontend features that connected the arcade economy to the blockchain.",
  role: "Full-stack Web3 Developer",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Solidity",
    "SIWE",
    "ERC-721 / ERC-1155",
  ],
  stats: [
    { value: "5,000+", label: "V1 NFTs migrated gaslessly" },
    { value: "50,000+", label: "collectibles mintable via lazy minting" },
    { value: "300%", label: "engagement lift from gamified staking" },
    { value: "0", label: "exploits across burn & mint contracts" },
  ],
  links: {},
  beats: [
    {
      eyebrow: "Onboarding",
      heading: "One door for gamers, another for degens",
      body: [
        "Arcaden had to welcome two very different audiences: traditional gamers who expect an email and password, and crypto-natives who expect to connect a wallet. The login screen offered both — classic credentials alongside secure wallet authentication using Sign-In with Ethereum (SIWE).",
        "Once inside, the homepage kept everything one click away. Auto-rotating banners surfaced the latest games, drops, and rewards, so players always landed on something new without digging through menus.",
      ],
      media: [
        {
          type: "image",
          src: "/images/arcaden/login.webp",
          alt: "Arcaden login screen offering email sign-in and Web3 wallet connection",
          aspect: "auto",
        },
        {
          type: "video",
          src: "/images/arcaden/home.mp4",
          poster: "/images/arcaden/arcaden-hero.webp",
          alt: "Arcaden homepage with auto-rotating feature banners",
          aspect: "video",
        },
      ],
    },
    {
      eyebrow: "The economy",
      heading: "Turning crypto into playable value",
      body: [
        "Players deposited selected cryptocurrencies to receive in-game tokens — the fuel for arcade games, quests, and rewards. The mSALD Hub extended this further, letting users convert their tokens seamlessly and unlock new ways to play and earn.",
        "The marketplace closed the loop: players opened weapon treasure chests, purchased collectibles, and picked out avatars from the Avatar Store, giving every earned token somewhere fun to go.",
      ],
      media: [
        {
          type: "image",
          src: "/images/arcaden/top_up.webp",
          alt: "Arcaden crypto deposit screen for converting tokens into in-game currency",
          aspect: "auto",
        },
        {
          type: "video",
          src: "/images/arcaden/shop.mp4",
          poster: "/images/arcaden/top_up.webp",
          alt: "Arcaden marketplace showing treasure chests, collectibles and the Avatar Store",
          aspect: "video",
        },
        {
          type: "image",
          src: "/images/arcaden/mSald.webp",
          alt: "Arcaden mSALD Hub for converting cryptocurrency tokens into in-game tokens",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "On-chain migration",
      heading: "Burning V1 into V2, without gas or exploits",
      body: [
        "When Arcaden moved to its V2 collectibles, existing World of Arcaden V1 G3M NFT holders needed a safe path forward. On Burn Island, holders burned their V1 G3Ms in exchange for V2 Collectibles — a gasless migration I worked on securing, which moved 5,000+ NFTs with zero exploits.",
        "The V2 minting contracts used lazy minting and signature minting, so in-app treasures only became on-chain NFTs when a player chose to mint. Holders of G3M Material and Weapon Collectibles could mint equivalent V2 G3M NFTs and view them on OpenSea — 50,000+ collectibles ready to cross over without upfront gas costs.",
      ],
      media: [
        {
          type: "image",
          src: "/images/projects/burn-island.webp",
          alt: "Arcaden Burn Island where V1 G3M NFTs are burned for V2 Collectibles",
          aspect: "auto",
        },
        {
          type: "image",
          src: "/images/projects/v2minting.webp",
          alt: "Arcaden minting interface for converting collectibles into V2 G3M NFTs",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Play to earn",
      heading: "Staking that feels like a game, not a form",
      body: [
        "Avatar characters (ERC-721) could equip weapons (ERC-1155) to accumulate combat points — each avatar with unique abilities, each loadout a personal strategy.",
        "Equipped characters were then staked onto the Quest Board to embark on quests and earn rewards. Better gear meant better odds, turning what is usually a dry staking transaction into a loop players actually wanted to repeat — engagement rose 300% after launch.",
      ],
      media: [
        {
          type: "image",
          src: "/images/projects/nft-staking.webp",
          alt: "Arcaden avatar NFTs equipping weapon NFTs to accumulate combat points",
          aspect: "auto",
        },
        {
          type: "image",
          src: "/images/arcaden/quest-board.webp",
          alt: "Arcaden quest board where staked characters embark on quests for rewards",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "A full arcade economy, on-chain",
    body: [
      "Arcaden shipped as a complete play-collect-earn loop: SIWE onboarding, token top-ups, a live marketplace, a gasless V1→V2 migration, and gamified NFT staking. The platform is no longer online, but the contracts behind Burn Island, V2 minting, and NFT staking remain verifiable on-chain — and this page keeps the product as it looked in production.",
    ],
  },
  related: ["solana-nft-drop", "domain-service", "lavarage-dapp"],
  seo: {
    title: "Arcaden Case Study | Trisha Teh",
    description:
      "A case study of Arcaden, a web3 gaming platform where players log in with Sign-In with Ethereum, top up in-game tokens, trade collectibles, and stake NFT characters on quests to play, collect, and earn.",
  },
};
