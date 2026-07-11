import type { CaseStudy } from "./schema";

export const yeiFinance: CaseStudy = {
  slug: "yei-finance",
  eyebrow: "deep dive — defi",
  title: "A production-grade DeFi super-app on Sei",
  gradientWord: "super-app",
  intro:
    "Yei Finance is a DeFi super-app on the Sei blockchain that folds three products a user would normally hop between apps for into one surface: a money market for lending and borrowing, YeiBridge for moving assets across chains, and YeiSwap for token swaps. I worked as one of the full-stack engineers on it, with my contributions spanning frontend features, backend services, and smart contract integrations across the lending, bridging, and swapping surfaces.",
  role: "Full-stack Engineer",
  stack: ["React", "TypeScript", "Solidity", "Sei"],
  stats: [
    { value: "3", label: "products in one app — lend, bridge, swap" },
    { value: "3", label: "money markets — Main, Solv, Injective" },
    { value: "6", label: "assets in the Main Market" },
    { value: "5", label: "audit partners across the protocol" },
  ],
  links: {
    live: "https://app.yei.finance",
  },
  beats: [
    {
      eyebrow: "Money market",
      heading: "Lend and borrow, split across three markets",
      body: [
        "The money market is the heart of Yei. Assets are organised into three separate markets — the Main Market alongside the Solv Market and the Injective Market — so risk stays scoped and each pool of collateral stands on its own rather than being pooled into one blast radius. In the Main Market, supported assets like USDC, SEI, WETH, WBTC, USDT, and SolvBTC each show their supply and borrow APY and the totals already supplied and borrowed.",
        "Every position runs on the same four actions — Supply, Withdraw, Borrow, Repay — and the right-hand panel keeps the numbers that decide whether a borrow is safe in front of the user: wallet balance, supply balance, whether an asset is enabled as collateral, and a live Health Factor that moves as they drag the amount slider. The goal was to make the moment of borrowing legible, so a user can see how close a position sits to liquidation before they sign, not after.",
      ],
      media: [
        {
          type: "image",
          src: "/images/yei-finance/money-market.webp",
          alt: "Yei Finance Main Market lending dashboard with total market, available, and borrows stat cards, an asset table of supply and borrow APYs, and a supply panel showing collateralization and health factor",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Cross-chain",
      heading: "YeiBridge brings liquidity onto Sei",
      body: [
        "A money market is only as useful as the assets people can get into it, and most of that liquidity starts on another chain. YeiBridge is the on-ramp: pick a source network and a destination, choose a token and amount, and move it across without leaving the app or stitching together a third-party bridge.",
        "The flow is built to catch the mistakes that lose people money in cross-chain UX. It checks the wallet is on the right network and prompts a switch when it isn't, mirrors the token amount on both the From and To sides so there's no ambiguity about what lands, and offers a gas-on-destination option so a user isn't stranded on a new chain with no native token to pay fees. The action button stays disabled until the transfer is actually valid.",
      ],
      media: [
        {
          type: "image",
          src: "/images/yei-finance/bridge.webp",
          alt: "Yei Finance Bridge screen with a network-switch warning, From and To network selectors moving USDC from Avalanche C-Chain to SEI, and a gas-on-destination toggle",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Swapping",
      heading: "YeiSwap closes the loop",
      body: [
        "Once assets are on Sei, YeiSwap handles the last mile — swapping between Sei-network tokens without routing back out to another venue. The panel is deliberately straightforward: a Sell side and a Buy side, a token on each, and the amount resolving between them.",
        "The controls that matter for a safe swap sit right there — a Transaction view for reviewing what's about to execute and a Settings entry for slippage tolerance — so the mechanics are one tap away instead of buried. Together with the money market and the bridge, YeiSwap means a user can bring capital onto Sei, put it to work, and rebalance it without ever leaving the app.",
      ],
      media: [
        {
          type: "image",
          src: "/images/yei-finance/swap.webp",
          alt: "Yei Finance YeiSwap interface with a Sell USDC panel above a Buy USDT panel and Transaction and Settings controls",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "Three DeFi primitives, one app",
    body: [
      "Yei Finance ships lending, bridging, and swapping as one connected experience on Sei rather than three disconnected tools. A user can bridge liquidity onto the chain, supply it to earn or borrow against it across the Main, Solv, and Injective markets, and swap between assets — all with the collateral, health, and network checks that keep on-chain money movement honest. My work spanned that surface — from React frontend features through the backend services and into the contract integrations underneath.",
    ],
  },
  related: ["clovis", "lavarage-dapp", "lenders-portal"],
  seo: {
    title: "Yei Finance Case Study | Trisha Teh",
    description:
      "A case study of Yei Finance, a DeFi super-app on Sei that unifies a money market, a cross-chain bridge, and YeiSwap into a single app.",
  },
};
