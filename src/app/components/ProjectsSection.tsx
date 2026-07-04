"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { getAllProjects, Project } from "@/lib/projects";
import ProjectCard from "./ui/ProjectCard";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Chip from "./ui/Chip";
import { fadeUp, stagger } from "@/lib/motion";

type FilterType = "all" | "dapp" | "smart-contract" | "web";

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "DApps", value: "dapp" },
  { label: "Smart Contracts", value: "smart-contract" },
  { label: "Web", value: "web" },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
              // projects
            </p>
            <h2 className="font-display text-display-lg text-white mb-6">
              Things I&apos;ve <span className="gradient-text">shipped</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A collection of projects spanning DeFi protocols, smart contracts,
              full-stack Web3 development, web & mobile applications.
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
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className={`h-full ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <ProjectCard project={project} featured={project.featured} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects CTA */}
          {!showAll && filteredProjects.length > 9 && (
            <motion.div variants={fadeUp} className="text-center mt-12">
              <p className="text-slate-400 mb-4">
                Showing {displayedProjects.length} of {filteredProjects.length}{" "}
                projects
              </p>
              <button
                onClick={() => setShowAll(true)}
                className="text-brand-accent hover:text-brand-accentDark transition-colors font-medium"
              >
                View All Projects →
              </button>
            </motion.div>
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
