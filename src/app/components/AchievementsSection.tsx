"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { revealUp, stagger } from "@/lib/motion";
import { useCountUp } from "@/lib/useCountUp";

interface Stat {
  monoLabel: string;
  prefix?: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  {
    monoLabel: "volume_processed",
    prefix: "$",
    value: 200,
    suffix: "M+",
  },
  {
    monoLabel: "users_reached",
    prefix: "~",
    value: 300,
    suffix: "K+",
  },
  {
    monoLabel: "products_shipped",
    value: 20,
    suffix: "+",
  },
  {
    monoLabel: "years_experience",
    value: 5,
    suffix: "+",
  },
];

const StatValue = ({
  prefix,
  value,
  suffix,
}: {
  prefix?: string;
  value: number;
  suffix: string;
}) => {
  const { ref, value: animatedValue } = useCountUp(value);

  return (
    <div className="font-display text-4xl md:text-5xl text-white">
      {prefix}
      <span ref={ref as React.RefObject<HTMLSpanElement>}>{animatedValue}</span>
      {suffix}
    </div>
  );
};

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
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.monoLabel} variants={revealUp}>
              <Card topAccent className="p-6 h-full">
                <div className="flex h-full flex-col justify-between gap-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stat.monoLabel}
                  </span>
                  <StatValue
                    prefix={stat.prefix}
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default AchievementsSection;
