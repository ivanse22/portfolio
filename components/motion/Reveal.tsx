"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Tracks whether the app has completed its initial load.
 * On subsequent client-side route navigations, `<ViewTransition>` handles the
 * page-level entrance—so elements starts visible immediately in the first render
 * pass, preventing `::view-transition-new` from capturing an `opacity: 0` snapshot.
 */
let appHasLoadedOnce = false;

function useEnterViewport<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(() => appHasLoadedOnce);

  useEffect(() => {
    appHasLoadedOnce = true;
    if (visible) return;

    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return { ref, visible };
}

/** Masked line reveal — text stays real in the DOM (a11y/SEO safe). */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const skipInitial = reduce || appHasLoadedOnce;
  const { ref, visible } = useEnterViewport<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className={`block overflow-hidden pt-[0.06em] -mt-[0.06em] pb-[0.1em] -mb-[0.1em] ${className ?? ""}`}
    >
      <motion.span
        className="block"
        initial={skipInitial ? false : { y: "105%" }}
        animate={skipInitial || visible ? { y: "0%" } : { y: "105%" }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Soft rise for blocks. One choreography, used sparingly. */
export function Rise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const skipInitial = reduce || appHasLoadedOnce;
  const { ref, visible } = useEnterViewport<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={skipInitial ? false : { opacity: 0, y: 16 }}
      animate={skipInitial || visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
