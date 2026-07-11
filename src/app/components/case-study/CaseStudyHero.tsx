import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Chip from "../ui/Chip";
import Button from "../ui/Button";
import Reveal from "./Reveal";
import StatStrip from "./StatStrip";
import type { CaseStudy } from "@/lib/case-studies/schema";

// Renders the title with the single allowed gradient-text span.
function HeroTitle({
  title,
  gradientWord,
}: {
  title: string;
  gradientWord?: string;
}) {
  if (!gradientWord || !title.includes(gradientWord)) {
    return <>{title}</>;
  }
  const [before, ...rest] = title.split(gradientWord);
  const after = rest.join(gradientWord);
  return (
    <>
      {before}
      <span className="gradient-text">{gradientWord}</span>
      {after}
    </>
  );
}

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const { links } = caseStudy;
  const primaryLink = links.live ?? links.store;

  return (
    <header className="mb-20 md:mb-28">
      <Reveal>
        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          back to projects
        </Link>

        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
          {caseStudy.eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-display-lg text-white">
          <HeroTitle
            title={caseStudy.title}
            gradientWord={caseStudy.gradientWord}
          />
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          {caseStudy.intro}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        {(caseStudy.role || caseStudy.timeline) && (
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            {[caseStudy.role, caseStudy.timeline].filter(Boolean).join(" · ")}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {caseStudy.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        {(primaryLink || links.repo) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryLink && (
              <Button variant="primary" size="sm" href={primaryLink} external>
                <span className="inline-flex items-center gap-2">
                  {links.live ? "Visit live site" : "View on store"}
                  <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </Button>
            )}
            {links.repo && (
              <Button variant="outline" size="sm" href={links.repo} external>
                View code / docs
              </Button>
            )}
          </div>
        )}
      </Reveal>

      <Reveal delay={0.12}>
        <StatStrip stats={caseStudy.stats} />
      </Reveal>
    </header>
  );
}
