import type { CaseStudy } from "./schema";

export const clovis: CaseStudy = {
  slug: "clovis",
  eyebrow: "deep dive — defi",
  title: "Deposit once, earn everywhere with Clovis",
  gradientWord: "Clovis",
  intro:
    "Clovis is a cross-chain DeFi yield hub built on the premise of \"deposit once, earn everywhere\": a single deposit is meant to draw yield from more than one chain at a time instead of sitting idle on the one it happens to live on. I helped build the platform from the ground up — the curated earn vaults, the borrow-against-your-position markets, the transparency layer that shows where the money actually goes, and the hub-and-spoke architecture underneath. It was proven on testnet first and is now live on mainnet.",
  role: "Full-stack Engineer",
  stack: ["React", "TypeScript", "Solidity", "Morpho", "Euler"],
  stats: [
    { value: "Earn + borrow", label: "one loop — collateral keeps earning" },
    { value: "Morpho Blue + Euler", label: "single- and multi-collateral markets" },
    { value: "Base", label: "settlement chain for the vaults" },
    { value: "Hub + spoke", label: "cross-chain accounting architecture" },
  ],
  links: {
    live: "https://app.clovis.network",
  },
  beats: [
    {
      eyebrow: "Earn",
      heading: "One deposit, yield from more than one chain",
      body: [
        "The Earn page is where the \"deposit once, earn everywhere\" idea becomes a screen. It lists a curated vault for each supported asset — every vault run by a curator — with the chains it reaches, its TVL and its deposit APY sitting on the same row as the deposit action. Above the table, the page rolls up total deposited and total yield generated across the whole platform, and once a wallet is connected the same header also shows that user's own deposit and total earned.",
        "The point of the design is that a depositor never has to think in chains. They pick an asset, deposit once, and the vault handles spreading that capital across lending protocols on the chains where it earns best, with the returns aggregated back to depositors. Inside a position the balance splits two ways: a flexible portion that stays withdrawable at the base rate, and locked portions that trade liquidity for a boosted yield over a fixed term, with auto-renewal, relocking and early unlock all surfaced in the portfolio view.",
      ],
      media: [
        {
          type: "image",
          src: "/images/clovis/earn.webp",
          alt: "Clovis Earn page with total deposited and total yield generated stat cards above a vault table listing each vault's asset, supported chain icons, TVL, deposit APY, and a deposit button per row",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Borrow",
      heading: "Borrow against your earn position without giving up the yield",
      body: [
        "The borrow flow answers the question every yield product eventually runs into: how do I get liquidity out of a position without unwinding it and losing the yield it's earning? Clovis lets a user borrow against an earn position while it keeps compounding — the vault receipt token itself is the collateral, so the deposit stays productive instead of being pulled out to free up cash.",
        "The markets come in two shapes. Single-collateral markets, built on Morpho Blue, pair one collateral asset with one borrow asset. Multi-collateral markets, built on Euler, let a mix of vault tokens back a single debt. Every row carries its available liquidity, borrow rate, LLTV and utilization, and the borrow panel keeps the health factor beside the amount along with a destination chain selector — plus the reminder that collateral in one market only ever backs that market's debt.",
      ],
      media: [
        {
          type: "image",
          src: "/images/clovis/borrow-markets.webp",
          alt: "Clovis Borrow page with total supplied, total borrowed, and total available stat cards above a market table split into Multi-collateral Markets and Single-collateral Markets sections, each row showing collateral, borrow asset, available liquidity, borrow rate, LLTV, and utilization",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Transparency",
      heading: "Show the allocation, don't just claim the yield",
      body: [
        "A yield product asks for a lot of trust, so Clovis puts its mechanics on a page of its own. Transparency gives every vault a tab: who curates it, which chain it settles on, its TVL and deposit APY, and its recent TVL and APY history charted with the locked and flexible portions drawn as separate series. A short explainer states plainly what the single headline APY is actually made of — the underlying lending rate, plus a share of protocol rewards.",
        "Below that, the allocation is shown rather than described. A donut breaks the vault down by chain and notes that those weights rebalance automatically as rates move, and a collateral exposure table lists each position the deposited asset is lent against: the protocol behind it, Morpho or Euler, the total collateral, its LTV and liquidation threshold, and how utilized it is. An active-strategies list names each lending protocol the vault is split across, with its chain and share of the allocation, and the vault's contract address sits on the same page for anyone who wants to verify the claim on-chain.",
      ],
      media: [
        {
          type: "image",
          src: "/images/clovis/transparency.webp",
          alt: "Clovis Transparency page for a single vault showing the curator, settlement chain, TVL and deposit APY header alongside a recent TVL chart plotting locked and flexible balances as separate series",
          aspect: "auto",
        },
        {
          type: "image",
          src: "/images/clovis/transparency-allocation.webp",
          alt: "Clovis vault allocation view with a chain allocation donut chart splitting the vault by supported chain, and a collateral exposure table listing each collateral asset with its protocol, MorphoBlue or Euler, total collateral, LTV, liquidation threshold, and utilization rate",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Architecture",
      heading: "A hub-and-spoke design, built from the ground up",
      body: [
        "Underneath the product is the part that makes cross-chain yield actually work: a hub-and-spoke architecture. A hub — deployed on Base — owns the accounting and keeps one consistent view of who's owed what, while spoke deployments on each supported chain handle custody and lending locally. That separation is what lets a single deposit be tracked coherently while its capital sits across a growing set of networks, and lets the vault rebalance between them automatically as yields move.",
        "Assets travel over pluggable bridge adapters, which the in-app bridge exposes directly, so moving an asset between supported chains is a first-class action rather than a detour. We built this from the ground up: the vault and market contracts, the frontend that reads and drives them, and the hub-to-spoke coordination that keeps balances in sync. Running on testnet first was the deliberate part: the mechanism was proven before real capital was trusted to it, and the same loop now runs on mainnet.",
      ],
      media: [
        {
          type: "image",
          src: "/images/clovis/bridge.webp",
          alt: "Clovis cross-chain bridge form with From and To chain selectors, an asset and amount field, a recipient address, and a choice of LayerZero or Wormhole bridge adapters with the amount the user will receive",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "A cross-chain yield loop, live on mainnet",
    body: [
      "Clovis takes a single deposit, puts it to work across chains, and then lets a user borrow against that position — through Morpho Blue single-collateral markets or Euler multi-collateral ones — without giving up the yield underneath. A transparency layer shows exactly where the capital sits and what the APY is made of, and a hub-and-spoke architecture with a Base hub keeps the accounting coherent across every supported chain. The whole loop was proven on testnet first and is now live on mainnet.",
    ],
  },
  related: ["yei-finance", "lavarage-dapp", "lenders-portal"],
  seo: {
    title: "Clovis Case Study | Trisha Teh",
    description:
      "A case study of Clovis, a cross-chain DeFi yield hub with curated multi-chain earn vaults, Morpho Blue and Euler borrow markets, and a hub-and-spoke architecture with a Base hub, built from the ground up and live on mainnet.",
  },
};
