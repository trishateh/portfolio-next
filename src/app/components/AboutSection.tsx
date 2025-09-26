"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillsList from "./SkillsList";
import ExperienceSection from "./ExperienceSection";
import AchievementsList from "./AchievementsList";
import { skills, experiences, achievements } from "../data/aboutData";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsList skills={skills} />,
  },
  {
    title: "Experience",
    id: "experience",
    content: <ExperienceSection experiences={experiences} />,
  },
  {
    title: "Achievements",
    id: "achievements",
    content: <AchievementsList achievements={achievements} />,
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
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
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
