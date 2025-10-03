"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Button from "./ui/Button";
import GradientBG from "./ui/GradientBG";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

const HeroSection = () => {
  return (
    <GradientBG
      showOrbs
      className="min-h-screen flex items-center pt-24 md:pt-0"
    >
      <Container>
        <Section spacing="lg" className="!py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Greeting */}
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-brand-surface2 border border-slate-700 text-slate-300 text-sm font-medium mb-4">
                  👋 Hello, I&apos;m
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              >
                <span className="gradient-text">Trisha</span>
                <br />
                <span className="text-white">
                  <TypeAnimation
                    sequence={[
                      "Blockchain Developer",
                      2000,
                      "Web3 Developer",
                      2000,
                      "Full Stack Developer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="inline-block"
                  />
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Highly motivated software engineer with the ability to learn and
                collaborate in the face of rapidly changing environments and
                technological advancement.
              </motion.p>

              {/* KPI Stats */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span>20+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span>5+ Blockchains</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span>4+ Years Experience</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button href="#projects" size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
                <div className="flex gap-3">
                  <Button
                    href="https://github.com/trishateh"
                    variant="outline"
                    external
                    className="!px-4"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    href="https://linkedin.com/in/trishateh"
                    variant="outline"
                    external
                    className="!px-4"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="show"
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-brand-blue/20 rounded-full blur-3xl scale-110"></div>

                {/* Image container */}
                <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden ring-1 ring-slate-700 bg-brand-surface2">
                  <Image
                    src="/images/hero-image.gif"
                    alt="Trisha Teh - Blockchain Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </Container>
    </GradientBG>
  );
};

export default HeroSection;
