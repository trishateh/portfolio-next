import type { CaseStudy } from "./schema";

export const lavarageDapp: CaseStudy = {
  slug: "lavarage-dapp",
  eyebrow: "deep dive — defi",
  title: "Spot margin trading for long-tail assets on Solana",
  gradientWord: "long-tail assets",
  intro:
    "Lavarage is a non-custodial spot margin trading protocol on Solana, purpose-built for long-tail assets — the memecoins and thin-liquidity tokens most leverage venues won't touch. Traders open leveraged longs against real spot collateral, borrowing from lender-funded pools and routing the purchase through Jupiter across existing Solana DEXs. I was one of the engineers on it, contributing across the React trading front end, the NestJS services behind it, and the Solana program integration that make up the trading experience.",
  role: "Full-stack Engineer",
  stack: ["Solana", "React", "NestJS", "PostgreSQL"],
  stats: [
    { value: "$200M+", label: "trading volume for long-tail assets" },
    { value: "20x", label: "max leverage on supported pools" },
    { value: "Non-custodial", label: "real spot assets held as collateral" },
  ],
  links: {
    live: "https://app.lavarage.xyz",
    repo: "https://lavarage.gitbook.io/lavarage",
  },
  beats: [
    {
      eyebrow: "The trade panel",
      heading: "One panel from pair to leveraged long",
      body: [
        "The trade screen is where everything happens. A trader picks a base and quote token, watches the live candlestick chart, and dials in leverage — the panel shows the current multiplier against the maximum the pool will allow, so there's no guessing how far the position can stretch. Under the hood, opening a long triggers the Lavarage smart contracts to borrow from a lender's liquidity pool and execute the spot purchase; the bought tokens are locked in the contract as collateral until the position closes.",
        "Before anything is signed, the loan summary spells out exactly what's being borrowed and what it costs. The recording here walks the full open flow — set the pair, set the leverage, review the summary, confirm — so a first-time trader can see the whole path.",
        "Because Lavarage is permissionless, not every pair always has a lender behind it. When no offer exists for a token-and-collateral combination, the panel says so plainly and nudges the trader toward a quote token that does have liquidity, rather than failing silently at signing time.",
      ],
      media: [
        {
          type: "image",
          src: "/images/lavarage-dapp/trade-panel.webp",
          alt: "Lavarage trade panel with a live candlestick chart beside the long order form, showing leverage, pay amount, and max borrow",
          aspect: "auto",
        },
        {
          type: "video",
          src: "/images/lavarage-dapp/open-position.mp4",
          poster: "/images/lavarage-dapp/open-position-poster.webp",
          alt: "Screen recording of opening a leveraged long position in the Lavarage dApp, from the trade panel through confirmation",
          aspect: "video",
        },
      ],
    },
    {
      eyebrow: "Live positions",
      heading: "Every position carries its own risk math",
      body: [
        "Once a long is open, it lands in the Positions tab with the numbers that actually matter for a leveraged trade: current LTV against the liquidation threshold, entry price versus current price, the liquidation price itself, and interest accruing daily on the borrowed amount. Each position is isolated, so its collateral and its risk stand alone — one trade going against the market can't drag the rest down with it.",
        "Expanding a row surfaces the full breakdown — open date, margin posted, position size and multiplier, and live PnL. The goal was to make the moment of decision obvious: a trader glancing at a position should immediately know how close it is to liquidation and what closing it now would return.",
      ],
      media: [
        {
          type: "image",
          src: "/images/lavarage-dapp/open-position.webp",
          alt: "Lavarage Open Positions tab showing an active leveraged position with LTV, liquidation price, daily interest, and PnL",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Closing out",
      heading: "Sell, settle the loan, keep the difference",
      body: [
        "Closing a position is really a sell plus a loan settlement, and the close modal treats it that way. It lays out the loan balance — principal borrowed, interest accrued, and total owing — then lets the trader sell 25, 50, 75, or 100% of the position. The payout math resolves in front of them: sale proceeds, minus the outstanding loan, minus the protocol fee, equals what actually lands back in their wallet.",
        "The recording follows the full sell flow, including the partial-sell selector, so it's clear that a trader can take profit or cut risk incrementally without unwinding the whole position at once.",
      ],
      media: [
        {
          type: "image",
          src: "/images/lavarage-dapp/close-position.webp",
          alt: "Lavarage Close Position modal showing the loan balance breakdown, a sell-amount selector, and the resulting payout to wallet",
          aspect: "auto",
        },
        {
          type: "video",
          src: "/images/lavarage-dapp/sell-position.mp4",
          poster: "/images/lavarage-dapp/sell-position-poster.webp",
          alt: "Screen recording of closing a leveraged position in the Lavarage dApp, including the sell-amount selector and payout confirmation",
          aspect: "video",
        },
      ],
    },
    {
      eyebrow: "Liquidity",
      heading: "The other side of the trade",
      body: [
        "Every leveraged long is funded by someone's capital, and the Stake tab is where that capital comes from. Liquidity providers stake SOL into a vault — here, the Lava SOL Meme Liquidity pool — and receive lstSOL in return, earning a historical APY driven by the interest traders pay to borrow.",
        "The vault UI is honest about capacity: when a pool is full or overfilled, it stops taking deposits and offers a waiting list instead of quietly diluting existing stakers. It's a small detail, but it's the seam that connects the trader and lender sides of the protocol into one working market.",
      ],
      media: [
        {
          type: "image",
          src: "/images/lavarage-dapp/staking.webp",
          alt: "Lavarage Stake tab showing the Lava SOL Meme Liquidity vault with capacity, historical APY, and a join waiting list action",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "Leverage where there wasn't any",
    body: [
      "Lavarage gave traders leveraged exposure to long-tail Solana assets that no traditional venue would list, while keeping the whole thing on-chain and non-custodial — the trader always holds the real spot token as collateral. The protocol has processed over $200M in trading volume, with isolated pools keeping each position's risk contained and lender liquidity earning the yield that makes the market run.",
    ],
  },
  related: ["lenders-portal", "partners-portal", "yei-finance"],
  seo: {
    title: "Lavarage DApp Case Study | Trisha Teh",
    description:
      "A case study of Lavarage, a non-custodial spot margin trading protocol on Solana purpose-built for long-tail assets, with isolated pools and lender-funded leverage.",
  },
};
