"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { FeedbackForm } from "./FeedbackForm";
import { fadeUp, slideInLeft, slideInRight, stagger } from "@/lib/motion";

const socialLinks = [
  {
    name: "GitHub",
    label: "github.com/trishateh",
    href: "https://github.com/trishateh",
    icon: Github,
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/trishateh",
    href: "https://linkedin.com/in/trishateh",
    icon: Linkedin,
  },
  {
    name: "X",
    label: "@_disco_giraffe",
    href: "https://twitter.com/_disco_giraffe",
    icon: Twitter,
  },
];

const EmailSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section id="contact">
      <Container>
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-4">
              // contact
            </p>
            <h2 className="font-display text-display-lg text-white">
              Let's build something{" "}
              <span className="gradient-text">on-chain</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left side - Contact info */}
            <motion.div variants={slideInLeft} className="lg:col-span-5">
              <Card className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Open to what's next
                  </h3>
                  <p className="text-slate-300/90 leading-relaxed">
                    I'm looking for senior full-stack / web3 roles and
                    interesting protocol work. If you're building something
                    with real users on-chain, I'd like to hear about it.
                  </p>
                </div>

                {/* Contact metadata */}
                <div className="flex flex-col gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 font-mono text-sm text-slate-400 transition-colors duration-200 hover:text-brand-purple"
                        aria-label={social.name}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Right side - Contact form */}
            <motion.div variants={slideInRight} className="lg:col-span-7">
              <Card className="p-8">
                <FeedbackForm />
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default EmailSection;
