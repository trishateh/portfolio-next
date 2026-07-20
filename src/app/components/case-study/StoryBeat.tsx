import Reveal from "./Reveal";
import MediaFigure from "./MediaFigure";
import type { Beat } from "@/lib/case-studies/schema";

interface StoryBeatProps {
  beat: Beat;
  index: number;
  // Marks the very first media item on the page for eager loading.
  first?: boolean;
}

export default function StoryBeat({ beat, index, first = false }: StoryBeatProps) {
  const number = String(index + 1).padStart(2, "0");
  const hasMedia = beat.media.length > 0;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Sticky prose column; spans wider when the beat has no media */}
      <div className={hasMedia ? "lg:col-span-5" : "lg:col-span-8"}>
        <div className={hasMedia ? "lg:sticky lg:top-28" : undefined}>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              <span className="text-brand-purple">{number}</span>
              <span aria-hidden className="h-px w-8 bg-brand-line2" />
              {beat.eyebrow}
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {beat.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {beat.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="leading-relaxed text-slate-300/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scrolling media column */}
      {hasMedia && (
        <div className="space-y-6 lg:col-span-7">
          {beat.media.map((media, mediaIndex) => (
            <Reveal key={media.src}>
              <MediaFigure media={media} priority={first && mediaIndex === 0} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
