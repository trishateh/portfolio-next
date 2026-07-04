// Framer Motion variants for consistent animations

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const stagger = {
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerFast = {
  show: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.02,
    },
  },
};

export const scale = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.16, ease: "easeOut" },
};

export const hoverLift = {
  y: -4,
  transition: { duration: 0.16, ease: "easeOut" },
};

export const bentoHover = {
  y: -4,
  transition: { duration: 0.2 },
};

export const revealUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Container for masked hero line reveals (pair with heroLine children)
export const heroLineStagger = {
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Child for masked hero line reveals; use inside an overflow-hidden wrapper
export const heroLine = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
