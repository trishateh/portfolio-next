import type { CaseStudy } from "./schema";

export const partnersPortal: CaseStudy = {
  slug: "partners-portal",
  eyebrow: "deep dive — developer platform",
  title: "One secure home for partner API keys",
  gradientWord: "API keys",
  intro:
    "The Partners Portal is how integrators get onto the Lavarage API. It's a secure console for creating and managing the API keys that authenticate calls to the protocol's REST endpoints — everything from opening and closing positions to reading market data and pool liquidity. As one of the engineers on it, I worked on the portal and the key-management flow that sits between a partner and the protocol.",
  role: "Full-stack Engineer",
  stack: ["React", "Auth0", "NestJS", "PostgreSQL"],
  stats: [
    { value: "20+", label: "integration partners onboarded" },
    { value: "100/60s", label: "global API rate limit per key" },
    { value: "6", label: "REST endpoint categories exposed" },
  ],
  links: {
    live: "https://partners-portal.lavarave.wtf",
    repo: "https://lavarage-api.readme.io",
  },
  beats: [
    {
      eyebrow: "Access",
      heading: "Secure by the front door",
      body: [
        "Before a partner can touch an API key, they have to get through the door properly. The portal opens on a clean auth screen — create an account or log in — with authentication handled by Auth0 rather than anything hand-rolled, and the usual terms-of-service and privacy consent captured up front.",
        "Everything past this point is gated behind login. That's deliberate: API keys are credentials that can open and close real positions and move funds through the protocol, so the console that mints them is treated as a secure surface from the very first screen.",
      ],
      media: [
        {
          type: "image",
          src: "/images/partners-portal/signup.webp",
          alt: "Lavarage Partners Portal sign-up and login screen with secure authentication, and terms-of-service and privacy links",
          aspect: "auto",
        },
      ],
    },
    {
      eyebrow: "API keys",
      heading: "Create, track, and revoke in one place",
      body: [
        "Inside, the dashboard is a straightforward key-management console. A partner can create a new API key, see every active key they hold with its unique identifier and creation timestamp, and revoke any key the moment it's no longer needed or might be compromised. Each key becomes the API key that authenticates the partner's calls to the Lavarage REST API.",
        "That API is broad — core trading, portfolio operations, utilities, lending and staking, partner integration with webhooks and MEV protection, and market data — all rate-limited per key to keep any one integrator from overwhelming the protocol. The portal's job is to make the credential behind all of that easy to issue, easy to see, and easy to cut off.",
      ],
      media: [
        {
          type: "image",
          src: "/images/partners-portal/api-keys.webp",
          alt: "Lavarage Partners Portal API keys dashboard showing a create-key action and a list of active keys with identifiers, status, timestamps, and a revoke action",
          aspect: "auto",
        },
      ],
    },
  ],
  outcome: {
    heading: "The integration layer",
    body: [
      "The Partners Portal is the on-ramp to the Lavarage API — secure sign-up, self-service key creation, and one-click revocation for the credentials that authenticate every integration. It has enabled secure API key management for 20+ partners building on top of the protocol.",
    ],
  },
  related: ["lavarage-dapp", "lenders-portal", "yei-finance"],
  seo: {
    title: "Partners Portal Case Study | Trisha Teh",
    description:
      "A case study of the Lavarage Partners Portal, a secure Auth0-gated console for creating, tracking, and revoking the API keys that authenticate partner integrations.",
  },
};
