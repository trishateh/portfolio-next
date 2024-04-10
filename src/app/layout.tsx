import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trisha Teh | Blockchain Developer & Web3 Innovator",
  description:
    "Dive into the portfolio of Trisha Teh, a forward-thinking Blockchain Developer at the cutting edge of Web3 innovations.",
  robots: {
    googleBot: {
      noimageindex: true,
    },
  },
  metadataBase: new URL("https://www.trishateh.com"),
  twitter: {
    card: "summary_large_image",
    title: "Trisha Teh | Blockchain Developer & Web3 Innovator",
    description:
      "Dive into the portfolio of Trisha Teh, a forward-thinking Blockchain Developer at the cutting edge of Web3 innovations.",
    creator: "@_disco_giraffe",
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Dev portfolio",
      },
    ],
  },
  openGraph: {
    title: "Trisha Teh | Blockchain Developer & Web3 Innovator",
    url: "https://www.trishateh.com",
    description:
      "Dive into the portfolio of Trisha Teh, a forward-thinking Blockchain Developer at the cutting edge of Web3 innovations.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Dev portfolio",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
