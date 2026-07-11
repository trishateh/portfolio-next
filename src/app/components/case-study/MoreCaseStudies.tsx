import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";
import Reveal from "./Reveal";
import { getProjectBySlug } from "@/lib/projects";
import { getCaseStudy } from "@/lib/case-studies";

interface MoreCaseStudiesProps {
  slugs: string[];
}

export default function MoreCaseStudies({ slugs }: MoreCaseStudiesProps) {
  // Only link to slugs that actually have a case study page. Card details
  // come from the matching project, or from the case study itself when no
  // project shares its slug (e.g. arcaden).
  const related = slugs
    .map((slug) => {
      const caseStudy = getCaseStudy(slug);
      if (!caseStudy) return null;
      const project = getProjectBySlug(slug);
      const image = project?.heroMedia.src ?? caseStudy.cardImage;
      if (!image) return null;
      return {
        slug,
        title: project?.title ?? caseStudy.title,
        summary: project?.summary ?? caseStudy.intro,
        image,
      };
    })
    .filter((card): card is NonNullable<typeof card> => !!card);

  if (related.length === 0) return null;

  return (
    <Reveal>
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        more deep dives
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          >
            <Card className="h-full transition-transform duration-200 group-hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden border-b border-brand-line">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="flex items-start justify-between gap-2 font-display text-lg font-semibold text-white">
                  {project.title}
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-brand-purple"
                    strokeWidth={1.5}
                  />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
