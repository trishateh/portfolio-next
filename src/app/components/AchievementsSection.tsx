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
  footer: string;
}

const stats: Stat[] = [
  {
    monoLabel: "volume_processed",
    prefix: "$",
    value: 200,
    suffix: "M+",
    footer: "confirmed",
  },
  {
    monoLabel: "users_reached",
    prefix: "~",
    value: 300,
    suffix: "K+",
    footer: "confirmed",
  },
  {
    monoLabel: "projects_shipped",
    value: 20,
    suffix: "+",
    footer: "confirmed",
  },
  {
    monoLabel: "years_in_web3",
    value: 5,
    suffix: "+",
    footer: "confirmed",
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
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    {stat.footer}
                  </div>
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
