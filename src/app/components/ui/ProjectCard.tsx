"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, FileText } from "lucide-react";
import { Project } from "@/lib/projects";
import Card from "./Card";
import Chip from "./Chip";
import Button from "./Button";
import { hoverLift } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const categoryLabels = {
  dapp: "DApp",
  "smart-contract": "Smart Contract",
  web: "Web App",
  mobile: "Mobile App",
} as const;

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={hoverLift} className="group h-full">
      <Card className="overflow-hidden h-full flex flex-col">
        {/* Hero Media */}
        <div
          className={`overflow-hidden rounded-t-2xl bg-slate-800 relative ${
            featured ? "aspect-video md:aspect-[2/1]" : "aspect-video"
          }`}
        >
          {project.heroMedia.type === "image" ? (
            <Image
              src={project.heroMedia.src}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <video
              src={project.heroMedia.src}
              poster={project.heroMedia.poster}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Chip
              size="sm"
              className="bg-black/40 backdrop-blur-md text-white border border-white/20"
            >
              {categoryLabels[project.category]}
            </Chip>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title & Summary */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-purple transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-300/90 line-clamp-3 mb-4 leading-relaxed text-base">
              {project.summary}
            </p>

            {/* Impact — two lines on featured cards, one otherwise */}
            {project.impact && project.impact.length > 0 && (
              <div className="mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-accent">
                  impact
                </span>
                <ul className="mt-1.5 space-y-1">
                  {project.impact.slice(0, featured ? 2 : 1).map((line) => (
                    <li
                      key={line}
                      className="flex gap-2 text-sm text-slate-300/90 leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="text-brand-accent shrink-0"
                      >
                        —
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <Chip key={tech} size="sm">
                  {tech}
                </Chip>
              ))}
              {project.stack.length > 4 && (
                <Chip size="sm" className="text-slate-500">
                  +{project.stack.length - 4}
                </Chip>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            {project.links?.demo && (
              <Button
                href={project.links.demo}
                external
                size="sm"
                className="flex-1"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}

            {project.links?.repo && (
              <Button
                href={project.links.repo}
                external
                variant="outline"
                size="sm"
                className="!px-3"
                aria-label={`${project.title} repository on GitHub`}
              >
                <Github className="w-4 h-4" />
              </Button>
            )}

            {project.links?.caseStudy && (
              <Button
                href={project.links.caseStudy}
                variant="outline"
                size="sm"
                className="!px-3"
                aria-label={`${project.title} case study`}
              >
                <FileText className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
