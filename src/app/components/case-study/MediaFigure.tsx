import Image from "next/image";
import { cn } from "@/lib/utils";
import LazyVideo from "../ui/LazyVideo";
import type { MediaItem } from "@/lib/case-studies/schema";

const aspectClasses = {
  video: "aspect-video",
  wide: "aspect-[2/1]",
  tall: "aspect-[9/16] max-w-xs mx-auto",
  square: "aspect-square",
} as const;

interface MediaFigureProps {
  media: MediaItem;
  className?: string;
  // Set on the first media item of the first beat so LCP images load eagerly.
  priority?: boolean;
}

export default function MediaFigure({
  media,
  className,
  priority = false,
}: MediaFigureProps) {
  const aspect = media.aspect ?? (media.type === "video" ? "video" : "auto");
  const frameClass = cn(
    "overflow-hidden rounded-xl ring-1 ring-brand-line bg-brand-surface",
    aspect !== "auto" && aspectClasses[aspect],
    className
  );

  return (
    <figure>
      {media.type === "video" ? (
        <div className={frameClass}>
          <LazyVideo
            src={media.src}
            poster={media.poster ?? ""}
            className="h-full w-full"
          />
        </div>
      ) : aspect === "auto" ? (
        <div className={frameClass}>
          <Image
            src={media.src}
            alt={media.alt}
            width={1600}
            height={1000}
            priority={priority}
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      ) : (
        <div className={cn(frameClass, "relative")}>
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      {media.caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
