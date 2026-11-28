"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Tracks whether the app has completed its initial load.
 * Per design-taste-frontend (motion.md):
 * - The hero enters once on load (700ms masked lines 80ms apart; 520ms 12px rise 60ms apart).
 * - Scrolling moves nothing (no stock IntersectionObserver scroll reveals).
 * - On subsequent client-side route navigations, `<ViewTransition>` handles the
 *   page-level entrance so elements render immediately at rest.
 */
let appHasLoadedOnce = false;

function useInitialLoadEntrance() {
  const reduce = useReducedMotion();
  const [shouldAnimate] = useState(() => !appHasLoadedOnce);

  useEffect(() => {
    appHasLoadedOnce = true;
  }, []);

  return shouldAnimate && !reduce;
}

/** Hero masked line reveal — 700ms, cubic-bezier(0.22, 1, 0.36, 1), once on load. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const animateEntrance = useInitialLoadEntrance();

  return (
    <span
      className={`block overflow-hidden pt-[0.06em] -mt-[0.06em] pb-[0.1em] -mb-[0.1em] ${className ?? ""}`}
    >
      <motion.span
        className="block"
        initial={animateEntrance ? { y: "104%" } : false}
        animate={{ y: "0%" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Hero secondary block rise — 12px, 520ms, cubic-bezier(0.22, 1, 0.36, 1), once on load. */
export function Rise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const animateEntrance = useInitialLoadEntrance();

  return (
    <motion.div
      className={className}
      initial={animateEntrance ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
