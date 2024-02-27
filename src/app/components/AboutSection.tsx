"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Solidity</li>
        <li>Hardhat</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>TypeORM</li>
        <li>Prisma</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <article>
        <div className="pl-6">
          <h5 className="text-lg text-white font-semibold">
            Blockchain Developer
          </h5>
          <h6 className="text-lg text-gray-300">Salad Ventures</h6>
          <p className="text-gray-400">April 2022 - Present</p>
          <ul className="list-disc pl-8">
            <li className="text-gray-300">
              Collaborate with developers and designers in building blockchain
              related applications and platforms.
            </li>
            <li className="text-gray-300">
              Maintain and upgrade client and server-side applications.
            </li>
          </ul>
        </div>

        <div className="p-6">
          <h5 className="text-lg text-white font-semibold">
            Blockchain Developer
          </h5>
          <h6 className="text-lg text-gray-300">Freelance</h6>
          <p className="text-gray-400">January 2021 - March 2022</p>
          <ul className="list-disc pl-8">
            <li className="text-gray-300">
              Write, test and deploy Smart Contracts to the Blockchain.
            </li>
            <li className="text-gray-300">
              Integrate smart contracts to create full-stack blockchain
              applications (DApps).
            </li>
          </ul>
        </div>

        <div className="p-6">
          <h5 className="text-lg text-white font-semibold">Medical Doctor</h5>
          <h6 className="text-lg text-gray-300">
            Ministry of Health, Malaysia
          </h6>
          <p className="text-gray-400">October 2012 - March 2022</p>
          <ul className="list-disc pl-8">
            <li className="text-gray-300">
              Clinical skills to diagnose, educate, treat and care for patients.
            </li>
            <li className="text-gray-300">
              Mentor junior doctors to attain the necessary skills.
            </li>
          </ul>
        </div>
      </article>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Certificate of Completion of Official (ISC)<sup>2</sup> Certified in
          Cybersecurity (CC) Training (2003)
        </li>
        <li>
          Certificate of Completion of Covalent's Data Alchemist Bootcamp (2022)
        </li>
        <li>Bachelor of Medicine, Bachelor of Surgery (2012)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.svg"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a former doctor who has experienced firsthand how technology
            transforms healthcare. My background in radiology exposed me to the
            world of computers and machines. Little did i know that it would
            lead to discovering my passion for coding and web development. It is
            no secret that being a doctor is not a bed of roses. In those
            moments of darkness, I would retreat to my developer-cave, immerse
            myself in building web3 applications, and find a renewed sense of
            joy and accomplishment. As a software engineer with a passion for
            blockchain technology, I am ever learning new skills, programming
            languages and frameworks to advance in this exciting field.
          </p>
          <div className="flex flex-row md:justify-start justify-center mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
