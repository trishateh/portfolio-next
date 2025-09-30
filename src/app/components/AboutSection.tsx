"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { User, Code, Award } from "lucide-react";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Chip from "./ui/Chip";
import Timeline from "./ui/Timeline";
import SkillsGrid from "./ui/SkillsGrid";
import AchievementsList from "./ui/AchievementsList";
import { skillCategories, experiences, achievements } from "../data/aboutData";
import { fadeUp, slideInLeft, slideInRight, stagger } from "@/lib/motion";

type TabType = "skills" | "experience" | "achievements";

const tabs = [
  { id: "skills" as TabType, label: "Skills", icon: Code },
  { id: "experience" as TabType, label: "Experience", icon: User },
  { id: "achievements" as TabType, label: "Achievements", icon: Award },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const renderTabContent = () => {
    switch (activeTab) {
      case "skills":
        return <SkillsGrid categories={skillCategories} />;
      case "experience":
        return <Timeline items={experiences} />;
      case "achievements":
        return <AchievementsList achievements={achievements} />;
      default:
        return null;
    }
  };

  return (
    <Section id="about">
      <Container>
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From medical doctor to blockchain developer — a journey driven by 
              innovation and the transformative power of technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left side - Image and story */}
            <motion.div variants={slideInLeft} className="lg:col-span-5">
              <div className="relative mb-8">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-brand-blue/10 rounded-2xl blur-2xl scale-110"></div>
                
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-700 bg-brand-surface2">
                  <Image
                    src="/images/about.png"
                    alt="Trisha Teh - About"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    quality={100}
                  />
                </div>
              </div>

              {/* Story */}
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  As a former medical doctor turned blockchain developer, my journey 
                  from healthcare to the forefront of technology has been driven by a 
                  fascination with the transformative power of digital solutions.
                </p>
                <p>
                  Transitioning from diagnosing patients to debugging code, I have 
                  leveraged my analytical skills and attention to detail in both realms. 
                  Now, as a software engineer specializing in blockchain technology, 
                  I am committed to continuous learning and innovation.
                </p>
                <p>
                  My aim is to contribute to projects that push the boundaries of what is 
                  possible, harnessing blockchain's potential to create secure, 
                  transparent, and efficient systems.
                </p>
              </div>
            </motion.div>

            {/* Right side - Tabs and content */}
            <motion.div variants={slideInRight} className="lg:col-span-7">
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-3 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Chip
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      active={activeTab === tab.id}
                      variant={activeTab === tab.id ? "accent" : "default"}
                      className="cursor-pointer !px-4 !py-2"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </Chip>
                  );
                })}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderTabContent()}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default AboutSection;
