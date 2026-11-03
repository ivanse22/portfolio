"use client";

import { ViewTransition, type ReactNode } from "react";
import { BlueprintFooter } from "./BlueprintFooter";

const enterExit = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "page",
};

/**
 * Page shell. Wraps every route's content (+ footer) in a ViewTransition so
 * navigations animate. The header lives in the root layout and stays anchored.
 */
export function Page({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ViewTransition enter={enterExit} exit={enterExit} default="none">
      <div className="flex-1 flex flex-col">
        <main className={`flex-1 ${className ?? ""}`}>{children}</main>
        <BlueprintFooter />
      </div>
    </ViewTransition>
  );
}
