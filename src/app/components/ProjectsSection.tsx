"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  LayoutGroup,
  useReducedMotion,
} from "framer-motion";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "./ui/ProjectCard";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Chip from "./ui/Chip";
import { fadeUp, stagger } from "@/lib/motion";

type FilterType = "all" | "dapp" | "smart-contract" | "web" | "mobile";

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "DApps", value: "dapp" },
  { label: "Smart Contracts", value: "smart-contract" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  const allProjects = getAllProjects();

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 9);

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  return (
    <Section id="projects">
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
              {"projects"}
            </p>
            <h2 className="font-display text-display-lg text-white mb-6">
              Things I&apos;ve <span className="gradient-text">shipped</span>
            </h2>
            <p className="text-slate-300/90 text-lg max-w-2xl mx-auto">
              Production work alongside personal builds — e-commerce and event
              platforms, mobile apps, DeFi protocols, and the experiments where
              I try new ideas first.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <Chip
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                active={activeFilter === filter.value}
                variant={activeFilter === filter.value ? "accent" : "default"}
                className="cursor-pointer"
              >
                {filter.label}
              </Chip>
            ))}
          </motion.div>

          {/* Projects Grid — bento */}
          <LayoutGroup>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-4"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {displayedProjects.map((project, index) => {
                  // Every second featured card sits on the right so the wide
                  // cards alternate sides; dense flow backfills the left column.
                  const featuredIndex = project.featured
                    ? displayedProjects
                        .slice(0, index)
                        .filter((p) => p.featured).length
                    : -1;
                  const alignRight = featuredIndex % 2 === 1;
                  // Phones show six cards before "View All"; md+ shows nine.
                  const hideOnPhone = !showAll && index >= 6;

                  return (
                    <motion.div
                      key={project.id}
                      layout={!prefersReducedMotion}
                      variants={fadeUp}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                        transition: { duration: 0.18 },
                      }}
                      transition={{
                        delay: index * 0.1,
                        layout: { duration: 0.3, ease: "easeOut" },
                      }}
                      className={`h-full ${
                        project.featured ? "md:col-span-2" : ""
                      } ${alignRight ? "lg:col-start-2" : ""} ${
                        hideOnPhone ? "hidden md:block" : ""
                      }`}
                    >
                      <ProjectCard
                        project={project}
                        featured={project.featured}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

          {/* View All Projects CTA */}
          {!showAll && filteredProjects.length > 6 && (
            // With 7–9 projects nothing is hidden on md+, so only phones need it.
            <div className={filteredProjects.length > 9 ? "" : "md:hidden"}>
              <motion.div variants={fadeUp} className="text-center mt-12">
                <p className="text-slate-400 mb-4">
                  Showing{" "}
                  <span className="md:hidden">
                    {Math.min(6, filteredProjects.length)}
                  </span>
                  <span className="hidden md:inline">
                    {displayedProjects.length}
                  </span>{" "}
                  of {filteredProjects.length} projects
                </p>
                <button
                  onClick={() => setShowAll(true)}
                  className="text-brand-accent hover:text-brand-accentDark transition-colors font-medium"
                >
                  View All Projects →
                </button>
              </motion.div>
            </div>
          )}

          {/* Show Less CTA */}
          {showAll && filteredProjects.length > 9 && (
            <motion.div variants={fadeUp} className="text-center mt-12">
              <button
                onClick={() => setShowAll(false)}
                className="text-brand-accent hover:text-brand-accentDark transition-colors font-medium"
              >
                ← Show Less
              </button>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
