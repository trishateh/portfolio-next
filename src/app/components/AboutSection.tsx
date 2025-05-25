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
        <li>Ethers.js</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>React / NextJS</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>NestJS</li>
        <li>PostgreSQL</li>
        <li>Docker</li>
        <li>Golang</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <article>
        <div className="p-6">
          <h5 className="text-lg text-white font-semibold">
            Web3 Full Stack Engineer
          </h5>
          <h6 className="text-lg text-gray-300">Lavarage</h6>
          <p className="text-gray-400">November 2024 - Present</p>
          <ul className="list-disc pl-8">
            <li className="text-gray-300">
              Full stack development of a decentralized trading platform.
            </li>
            <li className="text-gray-300">
              Wrote client SDKs from Solana smart contracts for external
              integration.
            </li>
            <li className="text-gray-300">
              Built scalable plug-and-play APIs to onboard partners into our
              trading infrastructure.
            </li>
            <li className="text-gray-300">
              Developed a Telegram trading bot with a Telegram mini app.
            </li>
          </ul>
        </div>

        <div className="p-6">
          <h5 className="text-lg text-white font-semibold">
            Blockchain Developer
          </h5>
          <h6 className="text-lg text-gray-300">Salad Ventures</h6>
          <p className="text-gray-400">April 2022 - October 2024</p>
          <ul className="list-disc pl-8">
            <li className="text-gray-300">
              Smart contracts and full stack development.
            </li>
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
          Certificate of Completion of Covalent&apos;s Data Alchemist Bootcamp
          (2022)
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
          src="/images/about.png"
          alt="about image"
          width={500}
          height={500}
          quality={100}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a former medical doctor turned blockchain developer, my journey
            from healthcare to the forefront of technology has been driven by a
            fascination with the transformative power of digital solutions.
            Transitioning from diagnosing patients to debugging code, I have
            leveraged my analytical skills and attention to detail in both
            realms. Now, as a software engineer specializing in blockchain
            technology, I am committed to continuous learning and innovation. My
            aim is to contribute to projects that push the boundaries of what is
            possible, harnessing blockchain&apos;s potential to create secure,
            transparent, and efficient systems.
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
