"use client";

import Link from "next/link";
import { Page } from "@/components/layout/Page";

export default function CVDossierPage() {
  return (
    <Page className="px-[var(--pad-x)] pt-12 pb-20">
      <div className="max-w-[1080px] mx-auto w-full">
        {/* Top action bar (hidden when printing to PDF) */}
        <div className="print:hidden flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[var(--line)]">
          <Link
            href="/"
            transitionTypes={["nav-back"]}
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-2)] hover:text-[var(--ink)]"
          >
            <span>←</span>
            <span className="link-underline">Back to portfolio</span>
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="bp-btn bp-btn--primary cursor-pointer"
          >
            <span>Print / Save as PDF</span>
            <span className="bp-btn__icon">↓</span>
          </button>
        </div>

        {/* Printable CV Sheet */}
        <article className="border border-[var(--line)] bg-[var(--surface)] rounded-[3px] p-8 md:p-14 space-y-10 print:border-none print:p-0">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--line)]">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[var(--signal)]">Curriculum Vitae</div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">
                Ivan Sierra
              </h1>
              <p className="text-lg md:text-xl font-medium text-[var(--ink-2)]">
                Senior UI/UX Designer · Experience Designer · Design Systems &amp; IA
              </p>
            </div>

            <div className="font-mono text-xs space-y-1 text-[var(--ink-2)] md:text-right">
              <div>Bogotá, Colombia (GMT-5 · Remote)</div>
              <div>
                <a href="mailto:ivan.se22@gmail.com" className="text-[var(--ink)] underline">
                  ivan.se22@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/ivansierrae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--signal)]"
                >
                  linkedin.com/in/ivansierrae
                </a>
              </div>
            </div>
          </header>

          {/* Executive Summary */}
          <section className="space-y-2">
            <h2 className="font-mono text-xs text-[var(--signal)]">01 / Summary</h2>
            <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
              UI/UX and Experience Designer with{" "}
              <strong className="text-[var(--ink)] font-medium">13+ years</strong> of experience
              designing scalable web products, multi-brand design systems, and high-clarity
              information architecture for global tech companies. Currently designing at{" "}
              <strong className="text-[var(--ink)] font-medium">Twilio</strong>. Holds an{" "}
              <strong className="text-[var(--ink)] font-medium">MSc in UX Design from UOC</strong>{" "}
              with <em>Matrícula de Honor</em> in Information Architecture. Proven ability to
              bridge Figma token architecture with production code (React, Tailwind CSS,
              HubSpot CMS).
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs text-[var(--signal)] border-b border-[var(--line)] pb-2">
              02 / Professional Experience (13+ Years)
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-lg font-semibold">UI Designer — Twilio</h3>
                  <span className="font-mono text-xs text-[var(--signal)]">2024 — Present</span>
                </div>
                <p className="text-sm text-[var(--ink-2)] mt-2 leading-relaxed">
                  Craft high-conversion web pages, landing systems, and modular UI components for
                  Twilio’s global web presence. Maintain and evolve the design system to ensure
                  1:1 consistency, accessibility, and scalability across marketing and product
                  surfaces.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-lg font-semibold">
                    Senior UI/UX Designer &amp; Design Systems Lead — CJ.com
                  </h3>
                  <span className="font-mono text-xs text-[var(--ink-2)]">2022 — 2024</span>
                </div>
                <p className="text-sm text-[var(--ink-2)] mt-2 leading-relaxed">
                  Architected the CJ Design System &amp; UI Kit from atomic tokens to documented
                  multi-variant Figma components aligned 1:1 with HubSpot CRM and front-end
                  frameworks. Led the Information Architecture overhaul and responsive Mega-Menu
                  system accommodating 3 new strategic business verticals.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-lg font-semibold">
                    UI / Visual &amp; Experience Designer — Torre &amp; Global Clients
                  </h3>
                  <span className="font-mono text-xs text-[var(--ink-2)]">2020 — 2022</span>
                </div>
                <p className="text-sm text-[var(--ink-2)] mt-2 leading-relaxed">
                  Designed conversion-focused digital products, event identities (Remote Hiring
                  Bootcamp by Torre), and responsive web architectures across Latin America and US
                  markets.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-lg font-semibold">
                    Senior Digital Designer &amp; Art Director — Digital Agencies &amp; Brands
                  </h3>
                  <span className="font-mono text-xs text-[var(--ink-2)]">2013 — 2020</span>
                </div>
                <p className="text-sm text-[var(--ink-2)] mt-2 leading-relaxed">
                  Led visual design, interactive campaigns, and user-centered web products for
                  major regional and international brands over 7+ years.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs text-[var(--signal)] border-b border-[var(--line)] pb-2">
              03 / Education &amp; Honors
            </h2>
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <div>
                <h3 className="text-base font-semibold">
                  Master’s Degree (MSc) in User Experience (UX) Design
                </h3>
                <p className="text-sm text-[var(--ink-2)]">
                  Universitat Oberta de Catalunya (UOC), Barcelona · Awarded{" "}
                  <strong className="text-[var(--ink)] font-medium">
                    Matrícula de Honor in Information Architecture
                  </strong>
                </p>
              </div>
              <span className="font-mono text-xs text-[var(--signal)]">Honors</span>
            </div>
          </section>

          {/* Core Competencies */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs text-[var(--signal)] border-b border-[var(--line)] pb-2">
              04 / Core Competencies &amp; Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-mono text-xs text-[var(--ink)] font-semibold mb-1">
                  Design Systems &amp; UI
                </div>
                <p className="text-[var(--ink-2)]">
                  Figma, Design Tokens, Atomic Design, Component Variants, Accessibility (WCAG
                  AA/AAA), Micro-interactions.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--ink)] font-semibold mb-1">
                  UX &amp; Info Architecture
                </div>
                <p className="text-[var(--ink-2)]">
                  Taxonomy &amp; Sitemaps, Card Sorting, Tree Testing, Usability Testing, User
                  Interviews, JTBD, Wireframing.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--ink)] font-semibold mb-1">
                  Code &amp; Platforms
                </div>
                <p className="text-[var(--ink-2)]">
                  React, Next.js, Tailwind CSS, HTML/CSS, HubSpot CMS Alignment, Framer, Webflow,
                  Git Workflow.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </Page>
  );
}
