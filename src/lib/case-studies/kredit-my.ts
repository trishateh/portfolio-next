import type { CaseStudy } from "./schema";

export const kreditMy: CaseStudy = {
  slug: "kredit-my",
  eyebrow: "deep dive — mobile fintech",
  title: "A licensed loan, entirely in-app, with Kredit.my",
  gradientWord: "Kredit.my",
  intro:
    "Kredit.my is a KPKT-licensed personal-loan lender in Malaysia, and this is its borrower app. A borrower sets up a profile, applies, uploads documents, receives an offer that spells out every charge, signs the agreement and gets the funds by bank transfer — then follows each instalment and settles early if they want to, all from their phone. I built the app end to end.",
  role: "Mobile Engineer",
  stack: ["React Native", "Expo", "TypeScript", "EAS"],
  stats: [
    { value: "7 steps", label: "from sign-up to first repayment" },
    { value: "Every charge", label: "shown before the borrower signs" },
    { value: "KPKT-licensed", label: "lender under the Moneylenders Act 1951" },
  ],
  links: {
    live: "https://kredit.my",
  },
  beats: [
    {
      eyebrow: "Before you apply",
      heading: "See the full cost before you commit",
      body: [
        "The lender's public site leads with a calculator rather than a pitch. A visitor picks an amount and a term, and the monthly repayment, the total interest and the total to repay update as they move the controls — nothing is saved or sent. A representative example shows the arithmetic in full, instalment by instalment, and a plain table lists every other charge, including the ones that are zero.",
        "Regulated lending is a trust problem before it is a product problem, so the design choice was to put the numbers first and the forms second. A borrower should be able to work out exactly what a loan costs them before they install anything, and the app is built on the same principle: the number a borrower saw on the site is the number they see in the app.",
      ],
      media: [
        {
          type: "image",
          src: "/images/kredit-my/calculator.webp",
          alt: "Kredit.my repayment calculator with an amount slider, a choice of term, the fixed monthly repayment, and a breakdown of the amount borrowed against total interest",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "The application",
      heading: "Seven steps from sign-up to first repayment",
      body: [
        "The whole journey happens in the app. A borrower sets up a profile and fills in their work details at their own pace, chooses an amount and a term with the repayment shown before anything is sent, and uploads the documents the application asks for. The lender's team reviews them and gets in touch if anything is missing.",
        "If the lender can lend, the offer sets out the amount, the term, the monthly instalment and every charge, and the borrower reads and signs the loan agreement inside the app. Funds go to their own bank account by transfer, and from then on it is one fixed amount a month. Every state along the way — submitted, in review, offered, signed, disbursed — has to be unambiguous on a phone screen, and most of the engineering effort went into making a multi-step regulated process feel calm.",
      ],
      media: [
        {
          type: "image",
          src: "/images/kredit-my/steps.webp",
          alt: "Kredit.my seven-step application flow: set up your profile, apply online, documents and review, your offer with every charge shown, sign the agreement, funds to your bank account, repay monthly",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "The loan page",
      heading: "Follow every repayment from your phone",
      body: [
        "Once a loan is live, its page shows each instalment with its due date, what has been paid and what is left. A borrower can check the early-settlement amount and see how it is worked out before asking for it, and a reminder lands in their notifications before each payment is due, along with payment updates as they come in.",
        "It's built with React Native and Expo in TypeScript and released through EAS, so one codebase serves both platforms and a change reaches every borrower in the same release. The licence details, the registered company and the KPKT licence number sit on the lender's public site for anyone who wants to verify them before they borrow, next to a standing warning about impersonators.",
      ],
      media: [
        {
          type: "image",
          src: "/images/kredit-my/loan-page.webp",
          alt: "Kredit.my section showing the borrower loan page features: every instalment with its due date, the early-settlement amount, and payment reminders in notifications",
          aspect: "auto",
        },
        {
          type: "image",
          src: "/images/kredit-my/licence.webp",
          alt: "Kredit.my licence section listing the licensed moneylender, company number, KPKT licence number, validity period and registered address",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "A regulated loan journey, in one app",
    body: [
      "Kredit.my takes a licensed lender's entire borrower experience — working out the cost, applying, uploading documents, receiving an offer with every charge shown, signing, disbursement and monthly repayment with early settlement — and puts it in one React Native app. The measure of success is not a growth number; it is that a regulated financial process runs clearly from a borrower's phone, with nothing hidden before they sign.",
    ],
  },
  related: ["mapacs-asm-2026", "lenders-portal", "yei-finance"],
  seo: {
    title: "Kredit.my Case Study | Trisha Teh",
    description:
      "A case study of the Kredit.my borrower app for a KPKT-licensed personal-loan lender: a seven-step application with every charge shown, in-app signing, and a loan page with instalments and early settlement, built in React Native.",
  },
};
