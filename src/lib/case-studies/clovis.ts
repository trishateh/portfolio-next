import type { CaseStudy } from "./schema";

export const clovis: CaseStudy = {
  slug: "clovis",
  eyebrow: "deep dive — defi",
  title: "Deposit once, earn everywhere with Clovis",
  gradientWord: "Clovis",
  intro:
    "Clovis is a cross-chain DeFi yield hub built by Yei Finance, on the premise of \"deposit once, earn everywhere\": a single deposit is meant to draw yield from more than one chain at a time instead of sitting idle on the one it happens to live on. I helped build the platform from the ground up — the earn vaults, the borrow-against-your-position flow, and the hub-and-spoke architecture underneath. It's now live on testnet!",
  role: "Full-stack Engineer",
  stack: ["React", "TypeScript", "Solidity", "Base Sepolia"],
  stats: [
    { value: "2", label: "multi-chain Earn Vaults" },
    { value: "Base Sepolia", label: "testnet hub the vaults settle to" },
    { value: "Hub + spoke", label: "cross-chain accounting architecture" },
  ],
  links: {
    live: "https://testnet.clovis.network",
  },
  beats: [
    {
      eyebrow: "Earn",
      heading: "One deposit, yield from more than one chain",
      body: [
        "The Earn Vaults page is where the \"deposit once, earn everywhere\" idea becomes a screen. A user sees the multi-chain vaults on offer, its own supported asset and supported chains, its current APY, and available actions. Above them, the page rolls up Total Value Locked and Total Yield Generated across the whole platform.",
        "The point of the design is that a depositor doesn't have to think in chains. They pick an asset, deposit once, and the vault handles spreading that capital to where it earns. The whole system is currently running on testnet, the TVL and yield shown are values that prove the mechanism works end to end.",
      ],
      media: [
        {
          type: "image",
          src: "/images/clovis/earn-vaults.webp",
          alt: "Clovis Earn Vaults page with total value locked and total yield stat cards and two multi-chain vault cards for USDC and USDT tagged Low Risk on Base Sepolia",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Borrow",
      heading: "Borrow against your earn position without giving up the yield",
      body: [
        "The borrow flow answers the question every yield product eventually runs into: how do I get liquidity out of a position without unwinding it and losing the yield it's earning? Clovis lets a user borrow against an earn position while it keeps compounding — the collateral stays deposited and productive instead of being pulled out to free up cash.",
        "The Borrow page lays the market out plainly: Total Supply, Total Borrow, and Total Available Liquidity up top, then an All Markets list of collateral pairs each showing its utilization, the yield the collateral still earns, and the borrow rate charged on top. A user can see, in one row, that their collateral is working on both sides at once.",
      ],
      media: [
        {
          type: "image",
          src: "/images/clovis/borrow.webp",
          alt: "Clovis Borrow page with total supply, total borrow, and available liquidity stat cards and an All Markets list of USDT/USDC and USDC/USDT collateral pairs showing utilization, collateral yield, and borrow rate",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "Architecture",
      heading: "A hub-and-spoke design, built from the ground up",
      body: [
        "Underneath the two pages is the part that makes cross-chain yield actually work: a hub-and-spoke architecture. A Hub — deployed here on Base Sepolia — owns the accounting and keeps one consistent view of who's owed what, while spoke vaults on each supported chain handle custody and settlement locally. That separation is what lets a single deposit be tracked coherently even as its capital is deployed across networks.",
        "We built this from the ground up: the vault and borrow contracts, the frontend that reads and drives them, and the coordination between hub and spokes that keeps balances in sync. Running it on testnet first is the deliberate part — the mechanism is proven on Base Sepolia before any real capital is trusted to it, which is why the numbers on the live app are testnet-scale rather than the mainnet figures.",
      ],
      media: [
        {
          type: "image",
          src: "/images/clovis/earn-vaults.webp",
          alt: "Clovis Earn Vaults cards showing the Multi-chain Vault tag and Hub on Base Sepolia labelling that reflect the hub-and-spoke architecture",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "A cross-chain yield hub, proven on testnet",
    body: [
      "Clovis takes a single deposit and makes it earn across chains, then lets a user borrow against that position without giving up the yield — a full earn-and-borrow loop backed by a hub-and-spoke architecture the team built from the ground up. It's live on testnet on a Base Sepolia hub, where the mechanism is demonstrably working before it's trusted with mainnet capital.",
    ],
  },
  related: ["yei-finance", "lavarage-dapp", "lenders-portal"],
  seo: {
    title: "Clovis Case Study | Trisha Teh",
    description:
      "A case study of Clovis, a cross-chain DeFi yield hub by Yei Finance with earn vaults and borrow-against-yield, built from the ground up and live on testnet.",
  },
};
