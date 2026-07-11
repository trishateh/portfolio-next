import type { CaseStudy } from "./schema";

export const lendersPortal: CaseStudy = {
  slug: "lenders-portal",
  eyebrow: "deep dive — defi lending",
  title: "Run a lending book from the Lenders Portal",
  gradientWord: "Lenders Portal",
  intro:
    "The Lenders Portal is the liquidity-provider side of Lavarage. It's where lenders create loan offers, set their own terms, and watch how the borrowers drawing on their capital are performing. Access is permissionless but gated by a Lava Rock NFT, and lenders can run offers actively, stake passively, or backstop liquidations. As one of the engineers on the portal, I worked on the dashboard that turns a stream of raw on-chain lending positions into something a liquidity provider can actually read and manage.",
  role: "Full-stack Engineer",
  stack: ["React", "TypeScript", "NestJS", "Solana"],
  stats: [
    { value: "$200M+", label: "trader volume funded by lender liquidity" },
    { value: "3", label: "lender roles — active, passive, liquidator" },
    { value: "Real-time", label: "position and liquidation monitoring" },
  ],
  links: {
    live: "https://yield.lavarage.xyz",
    repo: "https://lavarage.gitbook.io/lavarage",
  },
  beats: [
    {
      eyebrow: "Overview",
      heading: "The whole lending book at a glance",
      body: [
        "A lender lands on a dashboard built to answer one question fast: how is my capital doing right now? The stat cards up top show Total Liquidity Deployed, Active Positions, the count of positions running hot above 75% LTV, and Total Pending Interest — the money currently owed but not yet claimed. Below that, a Recent Offers list and a Quick Actions panel put the next move one click away.",
        "The walkthrough here moves through the portal the way a lender would: check the headline numbers, glance at recent offers, then jump into creating a new one or reviewing positions. The whole thing is designed so a liquidity provider can get a read on their book in seconds rather than parsing raw chain data.",
      ],
      media: [
        {
          type: "image",
          src: "/images/lenders-portal/dashboard.webp",
          alt: "Lavarage Lenders Portal dashboard with stat cards for total liquidity deployed, active positions, high-LTV positions, and pending interest",
          aspect: "auto",
        },
        {
          type: "video",
          src: "/images/lenders-portal/portal-demo.mp4",
          poster: "/images/lenders-portal/portal-demo-poster.webp",
          alt: "Screen recording walkthrough of the Lavarage Lenders Portal dashboard and its lending modules",
          aspect: "video",
        },
      ],
    },
    {
      eyebrow: "Loan offers",
      heading: "Set your terms, token by token",
      body: [
        "Active lenders don't lend into a generic pool — they create loan offers, each one scoped to a specific token with its own APR and LTV terms. The offers table lays out every offer the lender runs: the token, the APR they're charging, current utilization, max exposure, available liquidity, the LTV ceiling, and whether the offer is active or paused.",
        "Edit and pause controls sit right on each row, so a lender can retune an offer or pull it entirely as market conditions shift. That's the core lever of being an active lender: you decide which long-tail tokens you're willing to back, at what rate, and against how much collateral.",
      ],
      media: [
        {
          type: "image",
          src: "/images/lenders-portal/loan-offers.webp",
          alt: "Lavarage Lenders Portal loan offers table listing per-token offers with APR, utilization, max exposure, available liquidity, LTV, and status",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Risk",
      heading: "Watching the positions your capital backs",
      body: [
        "Every offer a lender makes ends up collateralizing borrower positions, and the Position Monitoring page is where those get tracked in real time. It rolls up the totals — positions outstanding, interest earned, average APR — and then lists each borrower position with its opened date, asset, borrowed amount, current LTV, liquidation price, APR, and accrued interest.",
        "The part that matters most is the risk column. Positions are flagged High or Medium risk with color-coded badges as their LTV climbs toward liquidation, so a lender can see trouble building before it becomes a loss rather than after.",
      ],
      media: [
        {
          type: "image",
          src: "/images/lenders-portal/position-monitoring.webp",
          alt: "Lavarage Lenders Portal position monitoring page tracking borrower positions with LTV, liquidation price, APR, accrued interest, and risk badges",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Liquidations",
      heading: "When a position crosses the line",
      body: [
        "When a borrower position breaches its liquidation threshold, it gets closed out, and the Liquidations log is the lender's record of what happened. Each event shows the liquidation timestamp, the position ID, the amount borrowed, what the collateral actually sold for after fees, and the claim status — including funds already returned to the lender's wallet.",
        "Every line links straight to the on-chain liquidation, sell, and send transactions, so nothing has to be taken on trust. Under normal circumstances, lenders are shielded from the bad-debt side of a liquidation; this log is where that protection becomes something they can audit for themselves.",
      ],
      media: [
        {
          type: "image",
          src: "/images/lenders-portal/liquidations.webp",
          alt: "Lavarage Lenders Portal liquidations event log showing timestamps, position IDs, borrowed amounts, sale proceeds, claim status, and on-chain transaction links",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "The supply side, made legible",
    body: [
      "The Lenders Portal gives liquidity providers everything they need to run a lending book on Lavarage: create and price loan offers, monitor the borrower positions their capital backs in real time, and audit liquidations down to the on-chain transaction. It's the supply side of a protocol that has funded over $200M in leveraged trading volume for long-tail assets.",
    ],
  },
  related: ["lavarage-dapp", "partners-portal", "yei-finance"],
  seo: {
    title: "Lenders Portal Case Study | Trisha Teh",
    description:
      "A case study of the Lavarage Lenders Portal, where liquidity providers create loan offers, monitor borrower positions and risk, and audit liquidations on Solana.",
  },
};
