import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Trisha Teh | Blockchain Developer & Web3 Innovator",
  description:
    "Former medical doctor turned blockchain developer, building secure and scalable Web3 applications.",
  keywords: [
    "blockchain developer",
    "web3 developer", 
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
    title: "Trisha Teh | Blockchain Developer & Web3 Innovator",
    description:
      "Former medical doctor turned blockchain developer, building secure and scalable Web3 applications.",
    creator: "@_disco_giraffe",
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Trisha Teh - Blockchain Developer Portfolio",
      },
    ],
  },
  openGraph: {
    title: "Trisha Teh | Blockchain Developer & Web3 Innovator",
    url: "https://www.trishateh.com",
    description:
      "Former medical doctor turned blockchain developer, building secure and scalable Web3 applications.",
    type: "website",
    locale: "en_US",
    siteName: "Trisha Teh Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Trisha Teh - Blockchain Developer Portfolio",
      },
    ],
  },
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
        {children}
      </body>
    </html>
  );
}
