"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

export default function Magnetic({ children, strength = 6 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const prefersReducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const disabled = prefersReducedMotion || isTouch;

  if (disabled) {
    return <span className="inline-block">{children}</span>;
  }

  const clamp = (value: number) => Math.max(-strength, Math.min(strength, value));

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    // Normalize to half the element size, then scale to the max strength.
    x.set(clamp((offsetX / (rect.width / 2)) * strength));
    y.set(clamp((offsetY / (rect.height / 2)) * strength));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
