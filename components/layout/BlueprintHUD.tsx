"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BlueprintHUD() {
  const pathname = usePathname();
  const [gridOn, setGridOn] = useState(false);
  const [dark, setDark] = useState(false);

  // Keyboard shortcuts: G (8pt grid overlay), T (theme)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.metaKey || e.ctrlKey) return;
      if (e.key === "g" || e.key === "G") {
        setGridOn((v) => !v);
      } else if (e.key === "t" || e.key === "T") {
        setDark((v) => {
          const next = !v;
          document.documentElement.dataset.theme = next ? "dark" : "light";
          return next;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    setDark((v) => {
      const next = !v;
      document.documentElement.dataset.theme = next ? "dark" : "light";
      return next;
    });
  };

  const navItems = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* 12-column / 8-pt Architectural Grid Overlay (Press G) */}
      {gridOn && (
        <div
          aria-hidden
          className="fixed inset-0 z-40 pointer-events-none px-[var(--pad-x)]"
        >
          <div className="max-w-[1360px] mx-auto w-full h-full grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-full border-x border-[var(--signal)]/20 bg-[var(--signal)]/[0.025] hidden md:flex items-start justify-center pt-20 font-mono text-[9px] text-[var(--signal)]"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calm, High-Clarity Navigation Header */}
      <header
        style={{ viewTransitionName: "site-header" }}
        className="sticky top-0 z-30 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line)] px-[var(--pad-x)] print:hidden"
      >
        <div className="max-w-[1360px] mx-auto flex items-center justify-between h-16 gap-6">
          {/* Brand identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-sm font-medium tracking-tight"
          >
            <span className="inline-grid place-items-center w-6 h-6 rounded-[2px] bg-[var(--ink)] text-[var(--bg)] font-mono text-[11px] font-semibold group-hover:bg-[var(--signal)] group-hover:text-white transition-colors">
              IS
            </span>
            <span className="text-[var(--ink)] font-semibold">Ivan Sierra</span>
            <span className="hidden sm:inline text-[var(--ink-3)] font-normal">
              — UI/UX &amp; Systems
            </span>
          </Link>

          {/* Center Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link relative py-1 text-sm transition-colors ${
                    active
                      ? "text-[var(--ink)] font-medium"
                      : "text-[var(--ink-2)] hover:text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-[19px] h-[2px] bg-[var(--signal)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right utilities: quiet theme toggle + primary CV action */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setGridOn((v) => !v)}
              className={`hidden lg:inline-flex items-center px-2 py-1 rounded-[2px] font-mono text-[11px] border transition-colors cursor-pointer ${
                gridOn
                  ? "border-[var(--signal)] text-[var(--signal)] bg-[var(--surface)]"
                  : "border-transparent text-[var(--ink-3)] hover:text-[var(--ink)]"
              }`}
              title="Toggle 12-column architectural grid (Shortcut: G)"
            >
              Grid
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="px-2.5 py-1 rounded-[2px] font-mono text-[11px] text-[var(--ink-2)] hover:text-[var(--ink)] border border-[var(--line)] bg-[var(--surface)] transition-colors cursor-pointer"
              title="Switch light/dark theme (Shortcut: T)"
            >
              {dark ? "Light" : "Dark"}
            </button>

            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[3px] text-xs font-medium bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--signal)] hover:text-white transition-colors"
            >
              <span>Resume / CV</span>
              <span className="font-mono text-[11px]">→</span>
            </Link>
          </div>
        </div>

        {/* Mobile navigation row */}
        <div className="flex md:hidden items-center gap-6 py-2.5 border-t border-[var(--line)] overflow-x-auto text-xs">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap ${
                  active ? "text-[var(--signal)] font-semibold" : "text-[var(--ink-2)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>
    </>
  );
}
