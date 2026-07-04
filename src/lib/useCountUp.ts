"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface UseCountUpOptions {
  duration?: number;
  decimals?: number;
}

export function useCountUp(target: number, options?: UseCountUpOptions) {
  const { duration = 1.2, decimals = 0 } = options ?? {};
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  const format = (value: number) =>
    value.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  const [value, setValue] = useState(() => format(0));

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setValue(format(target));
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setValue(format(latest)),
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, target, duration, decimals, prefersReducedMotion]);

  return { ref, value };
}
