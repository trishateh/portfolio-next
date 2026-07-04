"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Timeline from "./ui/Timeline";
import SkillsGrid from "./ui/SkillsGrid";
import AchievementsList from "./ui/AchievementsList";
import { skillCategories, experiences, achievements } from "../data/aboutData";
import { revealUp, stagger, bentoHover } from "@/lib/motion";

const labelClass = "font-mono text-xs uppercase tracking-[0.2em] text-slate-500";

interface BentoCellProps {
  span: string;
  className?: string;
  children: React.ReactNode;
}

const BentoCell = ({ span, className, children }: BentoCellProps) => (
  <motion.div variants={revealUp} whileHover={bentoHover} className={span}>
    <Card className={cn("h-full p-6", className)}>{children}</Card>
  </motion.div>
);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
          <motion.div variants={revealUp} className="mb-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
              {"// about"}
            </p>
            <h2 className="font-display text-display-lg text-white">
              From medicine to <span className="gradient-text">mainnet</span>
            </h2>
          </motion.div>

          {/* Bento grid */}
          <motion.div
            variants={stagger}
            className="grid gap-4 md:grid-cols-6"
          >
            {/* Bio */}
            <BentoCell span="md:col-span-4" className="md:p-8">
              <p className={cn(labelClass, "mb-5")}>bio</p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/about.webp"
                    alt="Trisha Teh"
                    width={128}
                    height={128}
                    quality={100}
                    className="h-24 w-24 rounded-2xl object-cover ring-1 ring-brand-line sm:h-28 sm:w-28"
                  />
                </div>
                <div className="space-y-3 leading-relaxed text-slate-300/90">
                  <p>
                    I started out as a medical doctor — trained to reason under
                    pressure and get the details right. In 2021 I taught myself
                    to code and moved into blockchain full-time, trading
                    diagnostics for distributed systems.
                  </p>
                  <p>
                    Five years on, I&apos;m a senior full-stack engineer
                    shipping production DeFi and web3 across multiple chains,
                    from smart contracts to the interfaces on top of them. The
                    clinical instinct for precision and consequence never left;
                    it just found a new domain.
                  </p>
                </div>
              </div>
            </BentoCell>

            {/* Currently */}
            <BentoCell span="md:col-span-2">
              <p className={cn(labelClass, "mb-5")}>currently</p>
              <p className="font-medium leading-snug text-white">
                Web3 Full Stack Engineer
              </p>
              <p className="mb-6 text-sm text-brand-accent">@ Yei Finance</p>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-glow" />
                <span>status: building</span>
              </div>
            </BentoCell>

            {/* Skills */}
            <BentoCell span="md:col-span-3">
              <p className={cn(labelClass, "mb-5")}>stack</p>
              <SkillsGrid categories={skillCategories} />
            </BentoCell>

            {/* Experience */}
            <BentoCell span="md:col-span-3">
              <p className={cn(labelClass, "mb-5")}>experience</p>
              <Timeline items={experiences} />
            </BentoCell>

            {/* Highlights */}
            <BentoCell span="md:col-span-6">
              <p className={cn(labelClass, "mb-5")}>highlights</p>
              <AchievementsList achievements={achievements} />
            </BentoCell>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default AboutSection;
