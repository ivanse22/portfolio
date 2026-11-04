"use client";

import type { ReactNode } from "react";

/**
 * Clean container frame for project visuals.
 * Avoids clip-path / scale transforms during route changes so `<ViewTransition>`
 * captures an unclipped, 1:1 geometry snapshot for smooth morphing.
 */
export function RevealFrame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`overflow-hidden rounded-[4px] ${className ?? ""}`}>{children}</div>;
}
