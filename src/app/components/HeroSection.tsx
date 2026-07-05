"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Button from "./ui/Button";
import GradientBG from "./ui/GradientBG";
import Magnetic from "./ui/Magnetic";
import { stagger, fadeUp, heroLineStagger, heroLine } from "@/lib/motion";

const TetrisPanel = dynamic(() => import("./TetrisPanel"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] md:h-[480px] w-full rounded-2xl border border-brand-line bg-brand-surface/40" />
  ),
});

const stats = ["5+ yrs", "20+ products", "$200M+ processed", "300K+ users"];

const HeroSection = () => {
  return (
    <GradientBG className="min-h-screen flex items-center pt-24 md:pt-28 pb-12 md:pb-16">
      <Container>
        <Section spacing="lg" className="!py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="order-1 lg:col-span-6 text-center lg:text-left"
            >
              {/* Eyebrow */}
              <motion.p
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-6"
              >
                senior full-stack engineer · web2 × web3
              </motion.p>

              {/* Main heading — two masked reveal lines */}
              <motion.h1
                variants={heroLineStagger}
                className="font-display text-display-2xl text-white mb-6"
              >
                <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                  <motion.span variants={heroLine} className="block">
                    Full-stack engineer.
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                  <motion.span variants={heroLine} className="block">
                    Zero to <span className="gradient-text">shipped.</span>
                  </motion.span>
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={fadeUp}
                className="text-slate-300/90 text-lg max-w-xl mx-auto lg:mx-0 mb-8"
              >
                I&apos;m Trisha. For the past five years I&apos;ve taken
                products from first commit to production — DeFi protocols,
                e-commerce platforms, mobile apps, and everything in between.
              </motion.p>

              {/* Stat line */}
              {/* <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 font-mono text-sm text-slate-500 mb-8"
              >
                {stats.map((stat, i) => (
                  <React.Fragment key={stat}>
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <span>{stat}</span>
                  </React.Fragment>
                ))}
              </motion.div> */}

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

            {/* Interactive Tetris mini-game */}
            <div className="order-2 lg:col-span-6 w-full">
              <TetrisPanel />
            </div>
          </div>
        </Section>
      </Container>
    </GradientBG>
  );
};

export default HeroSection;
