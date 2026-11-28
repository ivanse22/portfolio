"use client";

import type { ReactNode } from "react";

/**
 * Clean container wrapper for project visuals.
 * Inner `.plate-frame` owns `overflow-hidden` and `border` so its 2px hover lift
 * is never clipped, while `<ViewTransition>` captures clean 1:1 geometry.
 */
export function RevealFrame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
