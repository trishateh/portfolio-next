import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 & Blockchain Developer | Trisha Teh",
  description:
    "Trisha Teh Web3 & Blockchain developer portfolio showcasing my projects.",
  twitter: {
    card: "summary_large_image",
    title: "Web3 & Blockchain Developer | Trisha Teh",
    description:
      "Trisha Teh Web3 & Blockchain developer portfolio showcasing my projects.",
    creator: "@_disco_giraffe",
    images: [
      {
        url: "https://www.trishateh.com/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Dev portfolio",
      },
    ],
  },
  openGraph: {
    title: "Web3 & Blockchain Developer | Trisha Teh",
    url: "https://www.trishateh.com",
    description:
      "Trisha Teh Web3 & Blockchain developer portfolio showcasing my projects.",
    type: "website",
    images: [
      {
        url: "https://www.trishateh.com/opengraph-image.png",
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
