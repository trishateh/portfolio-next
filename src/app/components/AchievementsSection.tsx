"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { fadeUp, stagger } from "@/lib/motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
    description: "Blockchain projects delivered",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "300000",
    postfix: "+",
    description: "Users reached across platforms",
  },
  {
    metric: "Volume",
    value: "200",
    postfix: "M+",
    description: "Trading volume processed",
  },
  {
    metric: "Experience",
    value: "4",
    postfix: "+",
    description: "Years in Web3 development",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section spacing="md">
      <Container>
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <Card className="p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievementsList.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="mb-2">
                    <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
                      {achievement.prefix}
                      <AnimatedNumbers
                        includeComma
                        animateToNumber={parseInt(achievement.value)}
                        locale="en-US"
                        className="text-white text-3xl md:text-4xl font-bold"
                        transitions={(index: any) => ({
                          type: "spring",
                          stiffness: 100,
                          duration: index + 0.3,
                        })}
                      />
                      {achievement.postfix}
                    </div>
                  </div>
                  <h3 className="text-brand-accent font-semibold mb-1">
                    {achievement.metric}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
};

export default AchievementsSection;
