"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Respect users who prefer reduced motion: keep native scrolling.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // `anchors: true` makes Lenis smooth-scroll to in-page #hash links.
    const lenis = new Lenis({ anchors: true });

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
