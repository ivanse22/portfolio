"use client";

import { useState } from "react";
import Link from "next/link";
import { Page } from "@/components/layout/Page";
import { Magnetic } from "@/components/interaction/Magnetic";
import { Reveal, Rise } from "@/components/motion/Reveal";

export default function ContactPage() {
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
    <Page className="px-[var(--pad-x)] pt-16 md:pt-24 pb-20">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <p className="font-mono text-xs text-[var(--signal)]">Contact</p>
          <h1 className="text-[clamp(40px,6.2vw,88px)] font-semibold tracking-[-0.04em] leading-[0.94]">
            <Reveal>Ready for your next</Reveal>
            <Reveal delay={0.06}>
              <span className="voice-serif font-normal">design system</span> or product
              challenge.
            </Reveal>
          </h1>
          <Rise delay={0.12}>
            <p className="text-base md:text-lg text-[var(--ink-2)] max-w-[56ch] leading-relaxed">
              Available for Senior / Staff UI/UX Designer, Experience Designer, and Design
              Systems roles with international tech teams. Based in Bogotá (GMT-5), working
              seamlessly across US and European time zones.
            </p>
          </Rise>

          <Rise delay={0.18} className="flex flex-wrap gap-3 pt-4">
            <Magnetic>
              <button
                type="button"
                onClick={copyEmail}
                className="bp-btn bp-btn--primary cursor-pointer"
              >
                <span>{copied ? "Copied: ivan.se22@gmail.com" : "Copy: ivan.se22@gmail.com"}</span>
                <span className="bp-btn__icon">{copied ? "✓" : "⧉"}</span>
              </button>
            </Magnetic>

            <Magnetic>
              <a
                href="mailto:ivan.se22@gmail.com?subject=Opportunity%20for%20Ivan%20Sierra%20(UI%2FUX%20%26%20Design%20Systems)"
                className="bp-btn bp-btn--ghost"
              >
                <span>Open Email Client</span>
                <span className="bp-btn__icon">↗</span>
              </a>
            </Magnetic>

            <Magnetic>
              <Link href="/cv" className="bp-btn bp-btn--ghost">
                <span>Printable CV</span>
                <span className="bp-btn__icon">→</span>
              </Link>
            </Magnetic>
          </Rise>
        </div>

        <Rise delay={0.2} className="lg:col-span-5 border-t border-[var(--line)] pt-6 space-y-6">
          <div className="font-mono text-xs text-[var(--ink-3)]">Recruiter Summary</div>

          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-mono text-[11px] text-[var(--ink-3)]">Target Roles</dt>
              <dd className="font-medium mt-1">
                Senior UI/UX Designer · Experience Designer · Design Systems Architect ·
                Information Architect
              </dd>
            </div>

            <div>
              <dt className="font-mono text-[11px] text-[var(--ink-3)]">Experience</dt>
              <dd className="font-medium mt-1">
                13+ Years (Currently UI Designer at Twilio)
              </dd>
            </div>

            <div>
              <dt className="font-mono text-[11px] text-[var(--ink-3)]">Education</dt>
              <dd className="font-medium mt-1">
                MSc in UX Design — Universitat Oberta de Catalunya (Honors / Matrícula de
                Honor in Information Architecture)
              </dd>
            </div>

            <div>
              <dt className="font-mono text-[11px] text-[var(--ink-3)]">Location &amp; Timezone</dt>
              <dd className="font-medium mt-1">
                Bogotá, Colombia · GMT-5 (EST/EDT aligned · Remote global)
              </dd>
            </div>
          </dl>

          <div className="pt-5 border-t border-[var(--line)] flex flex-col gap-2 text-sm">
            <a
              href="https://www.linkedin.com/in/ivansierrae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--signal)] transition-colors"
            >
              <span className="link-underline">linkedin.com/in/ivansierrae</span>
              <span className="font-mono text-xs">↗</span>
            </a>
            <a
              href="https://www.behance.net/ivan_sierra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--signal)] transition-colors"
            >
              <span className="link-underline">behance.net/ivan_sierra</span>
              <span className="font-mono text-xs">↗</span>
            </a>
          </div>
        </Rise>
      </div>
    </Page>
  );
}
