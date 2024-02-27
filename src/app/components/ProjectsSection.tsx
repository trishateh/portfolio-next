"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Burn Island",
    description:
      "Burn Island is a part of Arcaden where users who own V1 G3M NFTs can burn it in exchange for V2 Collectibles.",
    image: "/images/projects/burn-island.png",
    tag: ["All", "Smart Contracts"],
    gitUrl:
      "https://bscscan.com/token/0x19e234fbeE6e3cBfd135CE9e0867d8a5729b1136#code",
    previewUrl: "https://play.arcaden.com/burn-island",
  },
  {
    id: 2,
    title: "Domain Service",
    description:
      "Ape Name Service is a Domain Name Service on Polygon Layer 2. Mint your own '.ape' domain NFTs and record information about your apes on the blockchain.",
    image: "/images/projects/domain-service.png",
    tag: ["All", "DApps"],
    gitUrl: "https://github.com/trishateh/domain-service-backend",
    previewUrl: "https://domain-service.vercel.app",
  },
  {
    id: 3,
    title: "My DAO",
    description:
      "BaconDAO is a community of bacon lovers that can receive $BACON and members can vote on proposals..",
    image: "/images/projects/dao.png",
    tag: ["All", "DApps"],
    gitUrl: "https://github.com/trishateh/myDAO",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Solana NFT Drop",
    description:
      "This is a web app on Solana built with Metaplex that lets users mint and receive NFTs from my handcrafted collection in their wallet.",
    image: "/images/projects/solana-nft-drop.png",
    tag: ["All", "DApps"],
    gitUrl: "https://github.com/trishateh/nft-drop-starter-project",
    previewUrl: "https://nft-drop-starter-project-neon.vercel.app",
  },
  {
    id: 5,
    title: "NFT Game",
    description:
      "This is a mini-turn based browser game where players can mint NFTs and make them playable characters in the game.",
    image: "/images/projects/nft-game.png",
    tag: ["All", "DApps"],
    gitUrl: "https://github.com/trishateh/nft-game",
    previewUrl: "",
  },
  {
    id: 6,
    title: "GIF Portal",
    description:
      "A Web3 app on Solana built with React & Rust where anyone with a Solana wallet can submit GIF links and immediately view it on my portal.",
    image: "/images/projects/gif-portal.png",
    tag: ["All", "DApps"],
    gitUrl: "https://github.com/trishateh/gif-portal",
    previewUrl: "",
  },
  {
    id: 7,
    title: "NFT Collection",
    description:
      "This is a website where users can mint NFTs and view them on OpenSea.",
    image: "/images/projects/nft-collection.png",
    tag: ["All", "DApps"],
    gitUrl: "https://github.com/trishateh/NFT-collection",
    previewUrl: "",
  },
  {
    id: 8,
    title: "Wave Portal",
    description:
      "The WavePortal is a website where anyone can send me a wave / message and have the data saved on the blockchain.",
    image: "/images/projects/wave-portal.png",
    tag: ["All", "DApps"],
    gitUrl: "https://github.com/trishateh/wave-portal",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DApps"
          isSelected={tag === "DApps"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Smart Contracts"
          isSelected={tag === "Smart Contracts"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;