import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trisha Teh | Senior Web3 Engineer & Blockchain Developer",
  description:
    "Senior full-stack web3 engineer and former medical doctor building DeFi and blockchain products across 5+ chains — $200M+ volume processed, 300k+ users.",
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
    title: "Trisha Teh | Senior Web3 Engineer & Blockchain Developer",
    description:
      "Senior full-stack web3 engineer and former medical doctor building DeFi and blockchain products across 5+ chains — $200M+ volume processed, 300k+ users.",
    creator: "@_disco_giraffe",
  },
  openGraph: {
    title: "Trisha Teh | Senior Web3 Engineer & Blockchain Developer",
    url: "https://www.trishateh.com",
    description:
      "Senior full-stack web3 engineer and former medical doctor building DeFi and blockchain products across 5+ chains — $200M+ volume processed, 300k+ users.",
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
      jobTitle: "Senior Full-Stack Web3 Engineer",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
