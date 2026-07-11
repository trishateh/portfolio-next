import type { CaseStudy } from "@/lib/case-studies/schema";

interface StatStripProps {
  stats: CaseStudy["stats"];
}

export default function StatStrip({ stats }: StatStripProps) {
  if (stats.length === 0) return null;

  return (
    <dl className="mt-12 grid grid-cols-2 gap-y-8 border-y border-brand-line py-8 md:flex md:flex-wrap md:items-baseline md:gap-y-0 md:divide-x md:divide-brand-line">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col-reverse px-2 first:pl-0 md:flex-1 md:px-6 md:first:pl-0 md:last:pr-0"
        >
          {/* dt precedes dd semantically; flex-col-reverse keeps the value on top */}
          <dt className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            {stat.label}
          </dt>
          <dd className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
