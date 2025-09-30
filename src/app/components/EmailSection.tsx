"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { FeedbackForm } from "./FeedbackForm";
import { fadeUp, slideInLeft, slideInRight, stagger } from "@/lib/motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/trishateh",
    icon: Github,
    color: "hover:text-white",
  },
  {
    name: "LinkedIn", 
    href: "https://linkedin.com/in/trishateh",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/_disco_giraffe",
    icon: Twitter,
    color: "hover:text-blue-400",
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hi, 
              I'd love to hear from you. Let's build something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left side - Contact info */}
            <motion.div variants={slideInLeft} className="lg:col-span-5">
              <Card className="p-8">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Let's start a conversation
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    I'm always interested in hearing about new opportunities, 
                    interesting projects, and ways to collaborate in the Web3 space.
                  </p>
                </div>

                {/* Direct contact */}
                <div className="mb-8">
                  <Button
                    href="mailto:hello@trishateh.com"
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    hello@trishateh.com
                  </Button>
                </div>

                {/* Social links */}
                <div>
                  <p className="text-slate-400 text-sm mb-4">Find me on</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 text-slate-400 transition-colors duration-200 rounded-lg hover:bg-slate-800/50 ${social.color}`}
                          aria-label={social.name}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
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
