"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Button from "./ui/Button";
import GradientBG from "./ui/GradientBG";
import TetrominoField from "./ui/TetrominoField";
import Magnetic from "./ui/Magnetic";
import { stagger, fadeUp, heroLineStagger, heroLine } from "@/lib/motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

const TetrisPlaceholder = () => (
  <div className="h-[420px] md:h-[480px] w-full rounded-2xl border border-brand-line bg-brand-surface/40" />
);

const TetrisPanel = dynamic(() => import("./TetrisPanel"), {
  ssr: false,
  loading: TetrisPlaceholder,
});

const stats = ["5+ yrs", "20+ products", "$200M+ processed", "300K+ users"];

const HeroSection = () => {
  // Visibility is CSS-gated (lg:hidden / hidden lg:block) so SSR markup matches;
  // isDesktop only decides which slot mounts the game, so it never mounts twice.
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [tetrisOpen, setTetrisOpen] = useState(false);

  return (
    <GradientBG
      className="pt-28 pb-12 md:pt-36 md:pb-20"
      before={<TetrominoField />}
    >
      <Container>
        <Section spacing="lg" className="!py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center">
            {/* Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="lg:col-span-7"
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
                className="text-slate-300/90 text-lg max-w-[60ch] mb-8"
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
                className="flex flex-wrap items-center gap-3"
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

              {/* Below lg the game is opt-in so the intro and CTAs stay above the fold */}
              <motion.div variants={fadeUp} className="mt-6 lg:hidden">
                <button
                  type="button"
                  onClick={() => setTetrisOpen((open) => !open)}
                  aria-expanded={tetrisOpen}
                  aria-controls="hero-tetris"
                  className="font-mono text-xs text-brand-accent hover:text-brand-accentDark transition-colors"
                >
                  play tetris →
                </button>
                {tetrisOpen && !isDesktop && (
                  <div id="hero-tetris" className="mt-4">
                    <TetrisPanel />
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Interactive Tetris mini-game */}
            <div className="hidden lg:block lg:col-span-5 w-full">
              {isDesktop ? <TetrisPanel /> : <TetrisPlaceholder />}
            </div>
          </div>
        </Section>
      </Container>
    </GradientBG>
  );
};

export default HeroSection;
