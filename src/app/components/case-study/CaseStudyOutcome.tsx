import Card from "../ui/Card";
import Reveal from "./Reveal";
import type { CaseStudy } from "@/lib/case-studies/schema";

interface CaseStudyOutcomeProps {
  outcome: NonNullable<CaseStudy["outcome"]>;
}

export default function CaseStudyOutcome({ outcome }: CaseStudyOutcomeProps) {
  return (
    <Reveal>
      <Card topAccent hover={false} className="p-8 md:p-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
          outcome
        </p>
        <h2 className="max-w-2xl font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {outcome.heading}
        </h2>
        <div className="mt-5 max-w-3xl space-y-4">
          {outcome.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="leading-relaxed text-slate-300/90"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Card>
    </Reveal>
  );
}
