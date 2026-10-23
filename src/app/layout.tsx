import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600"],
  display: "swap",
  // Next 14.1 has no fallback metrics for this font.
  adjustFontFallback: false,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// No `weight`: with static weights Google serves extensionless font URLs the
// Next 14.1 loader cannot parse, so load the variable font instead.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  // Next 14.1 has no fallback metrics for this font.
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Trisha Teh | Senior Full-Stack Engineer, Web2 × Web3",
  description:
    "Senior full-stack engineer and former medical doctor. Five years shipping DeFi protocols, e-commerce platforms and mobile apps from first commit to production — $200M+ in volume processed, 300K+ users.",
  keywords: [
    "senior web3 engineer",
    "blockchain developer",
    "web3 developer",
    "web3 frontend",
    "smart contracts",
    "solidity",
    "defi",
    "dapp development",
    "ethereum",
    "solana",
    "full stack developer"
  ],
  authors: [{ name: "Trisha Teh" }],
  creator: "Trisha Teh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.trishateh.com"),
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trisha Teh | Senior Full-Stack Engineer, Web2 × Web3",
    description:
      "Senior full-stack engineer and former medical doctor. Five years shipping DeFi protocols, e-commerce platforms and mobile apps from first commit to production — $200M+ in volume processed, 300K+ users.",
    creator: "@_disco_giraffe",
  },
  openGraph: {
    title: "Trisha Teh | Senior Full-Stack Engineer, Web2 × Web3",
    url: "https://www.trishateh.com",
    description:
      "Senior full-stack engineer and former medical doctor. Five years shipping DeFi protocols, e-commerce platforms and mobile apps from first commit to production — $200M+ in volume processed, 300K+ users.",
    type: "website",
    locale: "en_US",
    siteName: "Trisha Teh Portfolio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.trishateh.com/#person",
      name: "Trisha Teh",
      jobTitle: "Senior Full-Stack Engineer",
      description:
        "Senior full-stack web3 engineer and blockchain developer, and former medical doctor, building DeFi and blockchain products across multiple chains.",
      url: "https://www.trishateh.com",
      sameAs: [
        "https://github.com/trishateh",
        "https://www.linkedin.com/in/trishateh",
        "https://twitter.com/_disco_giraffe",
      ],
      knowsAbout: [
        "Solidity",
        "Smart Contracts",
        "DeFi",
        "React",
        "Next.js",
        "TypeScript",
        "Solana",
        "Ethereum",
        "Rust",
        "Node.js",
      ],
      alumniOf: "International Medical University",
      worksFor: {
        "@type": "Organization",
        name: "Yei Finance",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.trishateh.com/#website",
      name: "Trisha Teh Portfolio",
      url: "https://www.trishateh.com",
      publisher: {
        "@id": "https://www.trishateh.com/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${jetbrainsMono.variable} ${bricolage.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-light.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={instrumentSans.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
