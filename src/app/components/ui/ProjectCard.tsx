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
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    dapp: "accent",
    "smart-contract": "blue",
    web: "default",
  } as const;

  return (
    <motion.div whileHover={hoverLift} className="group h-full">
      <Card className="overflow-hidden h-full flex flex-col">
        {/* Hero Media */}
        <div className="aspect-video overflow-hidden rounded-t-2xl bg-slate-800 relative">
          {project.heroMedia.type === "image" ? (
            <Image
              src={project.heroMedia.src}
              alt={project.title}
              fill
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
            <div className="backdrop-blur-md bg-black/30 rounded-full px-3 py-1 border border-white/20">
              <span className="text-xs font-medium text-white">
                {project.category === "smart-contract"
                  ? "Smart Contract"
                  : project.category === "web"
                  ? "Web App"
                  : "DApp"}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title & Summary */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 line-clamp-3 mb-4 leading-relaxed text-sm">
              {project.summary}
            </p>
          </div>

          {/* Impact (if available) */}
          {project.impact && project.impact.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-brand-accent font-medium mb-2">
                Key Impact:
              </p>
              <p className="text-sm text-slate-400 line-clamp-2">
                {project.impact[0]}
              </p>
            </div>
          )}

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
