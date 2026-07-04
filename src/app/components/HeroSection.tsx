"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Button from "./ui/Button";
import GradientBG from "./ui/GradientBG";
import Magnetic from "./ui/Magnetic";
import HeroArt from "./HeroArt";
import { stagger, fadeUp, heroLineStagger, heroLine } from "@/lib/motion";

const stats = ["5+ yrs", "20+ projects", "5 chains", "$200M+ volume"];

const HeroSection = () => {
  return (
    <GradientBG className="min-h-screen flex items-center pt-24 md:pt-0">
      <Container>
        <Section spacing="lg" className="!py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="order-1 lg:col-span-7 text-center lg:text-left"
            >
              {/* Eyebrow */}
              <motion.p
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-6"
              >
                {"// senior web3 engineer · ex-medical doctor"}
              </motion.p>

              {/* Main heading — two masked reveal lines */}
              <motion.h1
                variants={heroLineStagger}
                className="font-display text-display-2xl text-white mb-6"
              >
                <span className="block overflow-hidden">
                  <motion.span variants={heroLine} className="block">
                    Building the
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span variants={heroLine} className="block">
                    <span className="gradient-text">on-chain web.</span>
                  </motion.span>
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={fadeUp}
                className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Trisha Teh — full-stack engineer shipping DeFi and web3 products
                across 5+ chains. Formerly a medical doctor.
              </motion.p>

              {/* Tx-style stat line */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 font-mono text-sm text-slate-500 mb-8"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
                  </span>
                  mainnet
                </span>
                {stats.map((stat) => (
                  <React.Fragment key={stat}>
                    <span aria-hidden="true">·</span>
                    <span>{stat}</span>
                  </React.Fragment>
                ))}
              </motion.div>

              {/* CTA row */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <Magnetic>
                  <Button variant="gradient" size="lg" href="#projects">
                    View work
                  </Button>
                </Magnetic>
                <Button
                  href="https://github.com/trishateh"
                  variant="outline"
                  size="lg"
                  external
                  className="!px-4"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  href="https://linkedin.com/in/trishateh"
                  variant="outline"
                  size="lg"
                  external
                  className="!px-4"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero art */}
            <div className="order-2 lg:col-span-5 flex justify-center">
              <HeroArt />
            </div>
          </div>
        </Section>
      </Container>
    </GradientBG>
  );
};

export default HeroSection;
