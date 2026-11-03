"use client";

import { useState } from "react";
import Link from "next/link";

export function BlueprintFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ivan.se22@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = "mailto:ivan.se22@gmail.com";
    }
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)] px-[var(--pad-x)] pt-20 pb-12 print:hidden">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--line)]">
          {/* Left block: Call to action */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs text-[var(--signal)]">
              Available for Senior UI/UX &amp; Design Systems roles
            </p>
            <h2 className="text-[clamp(34px,5vw,68px)] font-semibold leading-[0.96] tracking-[-0.035em] max-w-[16ch]">
              Let’s build something{" "}
              <span className="voice-serif font-normal">considered</span> and scalable.
            </h2>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={copyEmail}
                className="bp-btn bp-btn--primary cursor-pointer"
              >
                <span>{copied ? "Copied: ivan.se22@gmail.com" : "ivan.se22@gmail.com"}</span>
                <span className="bp-btn__icon">{copied ? "✓" : "⧉"}</span>
              </button>

              <Link href="/cv" className="bp-btn bp-btn--ghost">
                <span>Resume / CV</span>
                <span className="bp-btn__icon">→</span>
              </Link>
            </div>
          </div>

          {/* Right block: Navigation & external channels */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <div className="font-mono text-xs text-[var(--ink-3)]">Navigation</div>
              <ul className="space-y-2.5 text-[var(--ink-2)]">
                <li>
                  <Link href="/" className="hover:text-[var(--ink)] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[var(--ink)] transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[var(--ink)] transition-colors">
                    About &amp; Experience
                  </Link>
                </li>
                <li>
                  <Link href="/cv" className="hover:text-[var(--ink)] transition-colors">
                    Printable CV
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs text-[var(--ink-3)]">Connect</div>
              <ul className="space-y-2.5 text-[var(--ink-2)]">
                <li>
                  <a
                    href="https://www.linkedin.com/in/ivansierrae/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/ivan_sierra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] transition-colors"
                  >
                    Behance ↗
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ivan.se22@gmail.com"
                    className="hover:text-[var(--ink)] transition-colors"
                  >
                    Email ↗
                  </a>
                </li>
                <li className="pt-2 font-mono text-xs text-[var(--ink-3)]">
                  Bogotá, Colombia (GMT-5)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[var(--ink-3)]">
          <span>© {new Date().getFullYear()} Ivan Sierra — UI/UX &amp; Experience Designer</span>
          <span>
            Shortcuts: press <strong className="text-[var(--ink-2)]">G</strong> for 12-col grid ·{" "}
            <strong className="text-[var(--ink-2)]">T</strong> for dark theme
          </span>
        </div>
      </div>
    </footer>
  );
}
