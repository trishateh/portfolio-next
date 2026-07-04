import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GradientBG from "../../components/ui/GradientBG";
import Section from "../../components/ui/Section";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import Chip from "../../components/ui/Chip";
import LazyVideo from "../../components/ui/LazyVideo";

export const metadata: Metadata = {
  title: "Arcaden Case Study | Trisha Teh",
  description:
    "A case study of Arcaden, a web3 gaming platform where players log in with Sign-In with Ethereum, top up in-game tokens, trade collectibles, and stake NFT characters on quests to play, collect, and earn.",
};

interface Detail {
  asset: string;
  heading: string;
  alt: string;
  text: string;
  poster?: string;
}

const details: Detail[] = [
  {
    asset: "/images/arcaden/login.webp",
    heading: "Authentication",
    alt: "Arcaden login screen offering email sign-in and Web3 wallet connection",
    text: "The platform offers both traditional login with email and password, as well as secure Web 3 wallet connection and authentication using Sign-In with Ethereum (SIWE).",
  },
  {
    asset: "/images/arcaden/home.mp4",
    poster: "/images/arcaden/arcaden-hero.webp",
    heading: "Homepage",
    alt: "Arcaden homepage with auto-rotating feature banners",
    text: "The homepage features easy navigation through the platform's features, with auto-rotating banners that showcase the latest updates and offerings. Users are able to explore and seamlessly navigate to new features, games, and rewards with just a click, ensuring they stay up-to-date with everything Arcaden has to offer.",
  },
  {
    asset: "/images/arcaden/top_up.webp",
    heading: "Token Top-Up",
    alt: "Arcaden crypto deposit screen for converting tokens into in-game currency",
    text: "Users can deposit selected cryptocurrency tokens to receive in-game tokens, allowing them to engage with the platform and participate in arcade games, quests or earn rewards.",
  },
  {
    asset: "/images/arcaden/shop.mp4",
    poster: "/images/arcaden/top_up.webp",
    heading: "Marketplace",
    alt: "Arcaden marketplace showing treasure chests, collectibles and the Avatar Store",
    text: "A showcase of the platforms marketplace where users can open various weapons treasure chests, purchase collectibles, and acquire their own avatars from the Avatar Store.",
  },
  {
    asset: "/images/projects/burn-island.webp",
    heading: "Burn Island",
    alt: "Arcaden Burn Island where V1 G3M NFTs are burned for V2 Collectibles",
    text: "All existing World Of Arcaden V1 G3M NFT holders will be able to burn their V1 G3Ms on Burn Island to obtain V2 Collectibles.",
  },
  {
    asset: "/images/projects/v2minting.webp",
    heading: "V2 Minting",
    alt: "Arcaden minting interface for converting collectibles into V2 G3M NFTs",
    text: "With the minting feature, holders of G3M Material and Weapon Collectibles are able to mint equivalent V2 G3M NFTs and view them on Opensea.",
  },
  {
    asset: "/images/projects/nft-staking.webp",
    heading: "NFT Staking",
    alt: "Arcaden avatar NFTs equipping weapon NFTs to accumulate combat points",
    text: "Avatar characters, represented as ERC-721 NFTs, can equip powerful weapons, which are ERC-1155 NFTs, to accumulate combat points. Users can select from a variety of avatars, each with unique abilities and powers, allowing for personalized strategies and gameplay as they enhance their combat capabilities.",
  },
  {
    asset: "/images/arcaden/quest-board.webp",
    heading: "Quest Board",
    alt: "Arcaden quest board where staked characters embark on quests for rewards",
    text: "Characters that equip weapons can be staked to embark on quests, allowing them to earn additional rewards. By equipping powerful gear, players enhance their chances of success in quests, unlocking greater opportunities for earning valuable in-game assets and achievements.",
  },
  {
    asset: "/images/arcaden/mSald.webp",
    heading: "mSALD Hub",
    alt: "Arcaden mSALD Hub for converting cryptocurrency tokens into in-game tokens",
    text: "The mSALD Hub feature enhances the utility of cryptocurrency tokens by enabling users to seamlessly convert them into in-game tokens, unlocking new opportunities for gameplay and rewards, and enriching their overall experience on the platform.",
  },
];

const stack = ["Next.js", "React", "TypeScript", "Solidity", "SIWE", "ERC-721 / ERC-1155"];

export default function ArcadenCaseStudy() {
  return (
    <GradientBG className="min-h-screen">
      <Section>
        <Container>
          {/* Back link */}
          <Link
            href="/#projects"
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            back to projects
          </Link>

          {/* Header */}
          <header className="mb-16 max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
              {"case study"}
            </p>
            <h1 className="font-display text-display-lg text-white">
              Play, collect, and earn on{" "}
              <span className="gradient-text">Arcaden</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Arcaden offers a unique platform where gamers can collect NFTs,
              play engaging games, and earn valuable rewards. Dive into a world
              where you are rewarded for being entertained.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </header>

          {/* Alternating media / text rows */}
          <div className="space-y-6">
            {details.map((detail, index) => {
              const isVideo = detail.asset.endsWith(".mp4");
              const mediaFirst = index % 2 === 0;

              return (
                <Card key={detail.asset} className="p-4 md:p-6">
                  <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
                    {/* Media */}
                    <div
                      className={
                        mediaFirst ? "md:order-1" : "md:order-2"
                      }
                    >
                      <div className="overflow-hidden rounded-xl ring-1 ring-brand-line">
                        {isVideo ? (
                          <LazyVideo
                            src={detail.asset}
                            poster={detail.poster ?? ""}
                            className="aspect-video w-full"
                          />
                        ) : (
                          <Image
                            src={detail.asset}
                            alt={detail.alt}
                            width={600}
                            height={400}
                            quality={100}
                            className="h-auto w-full"
                          />
                        )}
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={
                        mediaFirst ? "md:order-2" : "md:order-1"
                      }
                    >
                      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                        {detail.heading}
                      </p>
                      <p className="leading-relaxed text-slate-300/90">
                        {detail.text}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </GradientBG>
  );
}
