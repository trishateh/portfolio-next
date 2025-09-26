"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const details = [
  {
    asset: "/images/arcaden/login.png",
    text: "The platform offers both traditional login with email and password, as well as secure Web 3 wallet connection and authentication using Sign-In with Ethereum (SIWE).",
  },
  {
    asset: "/images/arcaden/home.mp4",
    text: "The homepage features easy navigation through the platform's features, with auto-rotating banners that showcase the latest updates and offerings. Users are able to explore and seamlessly navigate to new features, games, and rewards with just a click, ensuring they stay up-to-date with everything Arcaden has to offer.",
  },
  {
    asset: "/images/arcaden/top_up.png",
    text: "Users can deposit selected cryptocurrency tokens to receive in-game tokens, allowing them to engage with the platform and participate in arcade games, quests or earn rewards.",
  },
  {
    asset: "/images/arcaden/shop.mp4",
    text: "A showcase of the platforms marketplace where users can open various weapons treasure chests, purchase collectibles, and acquire their own avatars from the Avatar Store.",
  },
  {
    asset: "/images/projects/burn-island.png",
    text: "All existing World Of Arcaden V1 G3M NFT holders will be able to burn their V1 G3Ms on Burn Island to obtain V2 Collectibles.",
  },
  {
    asset: "/images/projects/v2minting.png",
    text: "With the minting feature, holders of G3M Material and Weapon Collectibles are able to mint equivalent V2 G3M NFTs and view them on Opensea.",
  },
  {
    asset: "/images/projects/nft-staking.jpeg",
    text: "Avatar characters, represented as ERC-721 NFTs, can equip powerful weapons, which are ERC-1155 NFTs, to accumulate combat points. Users can select from a variety of avatars, each with unique abilities and powers, allowing for personalized strategies and gameplay as they enhance their combat capabilities.",
  },
  {
    asset: "/images/arcaden/quest-board.jpeg",
    text: "Characters that equip weapons can be staked to embark on quests, allowing them to earn additional rewards. By equipping powerful gear, players enhance their chances of success in quests, unlocking greater opportunities for earning valuable in-game assets and achievements.",
  },
  {
    asset: "/images/arcaden/mSald.png",
    text: "The mSALD Hub feature enhances the utility of cryptocurrency tokens by enabling users to seamlessly convert them into in-game tokens, unlocking new opportunities for gameplay and rewards, and enriching their overall experience on the platform.",
  },
];

export default function ProjectDisplay({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={handleBack}
          className="mb-8 flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-purple-500 transition-all duration-300"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2 text-white" />
          <span>Back</span>
        </button>

        {/* Title Section */}
        <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 bg-clip-text text-transparent tracking-wider drop-shadow-lg">
          Arcaden
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-300 drop-shadow-md italic">
          Play, Collect, and Earn
        </h2>
        <Image
          src="/images/arcaden/arcaden-hero.jpeg"
          alt="asset"
          height={400}
          width={600}
          quality={100}
          className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
        />
        <p className="text-center px-5 mx-auto text-lg text-gray-400 leading-relaxed w-full py-10">
          Arcaden offers a unique platform where gamers can collect NFTs, play
          engaging games, and earn valuable rewards. Dive into a world where you
          are rewarded for being entertained.
        </p>
        {/* Details Section */}
        <div className="space-y-16">
          {details.map((detail, index) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              key={index}
            >
              {/* Media */}
              {detail.asset.endsWith(".mp4") ? (
                <div className="relative group">
                  <video
                    controls
                    className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    autoPlay
                    loop
                  >
                    <source src={detail.asset} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative group">
                  <Image
                    src={detail.asset}
                    alt="asset"
                    height={400}
                    width={600}
                    quality={100}
                    className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              )}

              {/* Text */}
              <div className="pl-4 md:pl-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {detail.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
