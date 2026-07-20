"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface LazyVideoProps {
  src: string;
  poster: string;
  className?: string;
}

// Renders the <video> only once it scrolls into view so the heavy mp4 files
// are never requested until the user actually reaches them.
export default function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className={className}>
      {isInView && (
        <video
          preload="none"
          controls
          muted
          playsInline
          loop
          poster={poster}
          className="h-full w-full"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
