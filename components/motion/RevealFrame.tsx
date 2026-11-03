"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Image-style reveal for project visuals: the frame opens from a slight inset
 * while the content settles from a gentle zoom. Plays once on enter.
 */
export function RevealFrame({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`overflow-hidden rounded-[4px] ${className ?? ""}`}
      initial={reduce ? false : { clipPath: "inset(8% 4% 8% 4% round 4px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 4px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="h-full"
        initial={reduce ? false : { scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
