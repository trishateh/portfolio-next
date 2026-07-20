import type { CaseStudy } from "./schema";

export const pinjocep: CaseStudy = {
  slug: "pinjocep",
  eyebrow: "deep dive — mobile fintech",
  title: "The full loan lifecycle in the Pinjocep app",
  gradientWord: "Pinjocep",
  intro:
    "Pinjocep is the official borrower app for a licensed money lender. It carries a borrower through the entire loan journey — apply, verify identity, sign the agreement, track repayments, settle early — from one secure app. I built it in React Native and shipped it to production on Google Play and the App Store.",
  role: "Mobile Engineer",
  stack: ["React Native", "Expo", "TypeScript", "EAS"],
  stats: [
    { value: "Full lifecycle", label: "application to early settlement" },
    { value: "6–24 mo", label: "repayment terms supported" },
    { value: "Licensed", label: "money lender under the Moneylenders Act 1951" },
  ],
  links: {
    store:
      "https://play.google.com/store/apps/details?id=com.srijeyasumi.pinjocep",
  },
  beats: [
    {
      eyebrow: "The borrower app",
      heading: "The whole loan, in one place",
      body: [
        "Pinjocep gives a borrower a single secure home for everything to do with their loan. From the dashboard they can see active loans and outstanding balances, work through repayment schedules, and make payments — the screenshots run from a RM 1,180.00 instalment to an active RM 12,000.00 personal loan and the settings that sit behind a borrower's profile.",
        "Because it's the app for a licensed lender, the surface is deliberately serious: secure sign-in with two-factor authentication, in-app notifications, and easy access to the legal policies, risk disclosure, and help content a borrower needs to make an informed decision.",
      ],
      media: [
        {
          type: "image",
          src: "/images/pinjocep/playstore-listing.webp",
          alt: "Pinjocep Google Play listing showing the app and a row of in-app screens for repayments, dashboard, settings, and loan management",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "The lifecycle",
      heading: "From application to early settlement",
      body: [
        "The app covers the full loan lifecycle end to end. A borrower creates an account, submits and tracks a loan application, and completes onboarding — identity verification (eKYC) and document uploads — before digitally signing their loan agreement in-app. From there they can view balances and repayment schedules, make repayments, and request early settlement, with attestation meetings and related actions handled along the way.",
        "It's built with React Native and Expo, in TypeScript, and released through EAS to both stores. The engineering job was to make a regulated, multi-step financial process feel calm and legible on a phone — where every state, from application status to a signed agreement to a settled loan, has to be unambiguous. Terms on the listing run 6–24 months with a maximum interest of 18% per annum flat rate; the app explicitly does not offer short-term loans due within 60 days.",
      ],
      media: [
        {
          type: "image",
          src: "/images/projects/pinjocep.webp",
          alt: "Pinjocep, the borrower app for a licensed Malaysian money lender",
          aspect: "tall",
        },
      ],
    },
  ],
  outcome: {
    heading: "A regulated loan journey, shipped to production",
    body: [
      "Pinjocep took a licensed lender's entire borrower experience — application, eKYC onboarding, digital agreement signing, repayment tracking, and early settlement — and put it in one React Native app that's live in production on Google Play and the App Store. The measure of success here isn't a growth number; it's that a real, regulated financial process runs cleanly and clearly in a borrower's pocket.",
    ],
  },
  related: ["mapacs-asm-2026", "yei-finance"],
  seo: {
    title: "Pinjocep Case Study | Trisha Teh",
    description:
      "A production React Native borrower app for a licensed lender, covering the full loan lifecycle: application, eKYC, signing, repayments, settlement.",
  },
};
