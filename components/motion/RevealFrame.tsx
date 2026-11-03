"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Image-style reveal for project visuals: the frame opens from a slight inset
 * while the content settles from a gentle zoom. Plays once on enter.
 */
export function RevealFrame({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden rounded-[4px] ${className ?? ""}`}
      initial={reduce ? false : { clipPath: "inset(6% 3% 6% 3% round 4px)" }}
      animate={
        reduce || visible
          ? { clipPath: "inset(0% 0% 0% 0% round 4px)" }
          : { clipPath: "inset(6% 3% 6% 3% round 4px)" }
      }
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="h-full"
        initial={reduce ? false : { scale: 1.05 }}
        animate={reduce || visible ? { scale: 1 } : { scale: 1.05 }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
