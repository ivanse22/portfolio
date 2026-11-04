"use client";

import Link from "next/link";
import { Page } from "@/components/layout/Page";

export default function CVDossierPage() {
  const experience = [
    {
      role: "UI Designer",
      company: "Twilio",
      period: "June 2024 — Present",
      bullets: [
        "Design and maintain scalable UI components for Twilio’s global marketing website, ensuring strict alignment with the company’s design system.",
        "Collaborate with developers, product managers, and content teams within an agile environment to deliver high-fidelity landing pages focused on user conversion.",
        "Create and document reusable visual modules to streamline developer handoff, improve consistency, and reduce implementation time across teams.",
      ],
    },
    {
      role: "Senior UI & Visual Designer",
      company: "PGD Publicis",
      period: "2020 — Present",
      bullets: [
        "Lead interface design and visual direction for CJ Affiliate’s digital ecosystem, including responsive websites and content hubs.",
        "Translate complex marketing and business requirements into intuitive UI layouts, interaction flows, and interactive prototypes.",
        "Manage the end-to-end design process for digital assets, ensuring accessibility compliance and pixel-perfect execution across devices.",
      ],
    },
    {
      role: "Senior Art Director",
      company: "Nobox",
      period: "2018 — 2020",
      bullets: [
        "Partnered with global brands (Marriott CALA, Sheraton) to transform their digital presence through responsive web design and video content.",
        "Designed e-commerce interfaces and digital campaigns, focusing on user retention and visual storytelling.",
        "Led remote creative teams to deliver high-quality digital products within tight deadlines.",
      ],
    },
    {
      role: "Senior Art Director",
      company: "Beat MullenLowe SSP3",
      period: "2016 — 2018",
      bullets: [
        "Led the digital design department, overseeing the creation of mobile applications, e-commerce platforms, and large-scale web projects.",
        "Directed UI strategies for major clients like BMW, Hyundai, and Nestlé, ensuring high visual standards and brand compliance.",
        "Mentored junior designers and implemented efficient workflows for digital production and prototyping.",
      ],
    },
    {
      role: "Senior Art Director (Digital Dept.)",
      company: "Sistole – Sancho BBDO",
      period: "2014 — 2016",
      bullets: [
        "Led interface design and visual direction for digital ecosystems, including responsive websites and content hubs.",
        "Translated complex marketing requirements into intuitive, user-friendly UI layouts and interactive prototypes.",
        "Managed the end-to-end design process for digital assets, ensuring accessibility standards and pixel-perfect execution across devices.",
      ],
    },
  ];

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
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Ivan_Sierra_CV.pdf"
              download="Ivan_Sierra_CV.pdf"
              className="bp-btn bp-btn--primary"
            >
              <span>Download Original PDF</span>
              <span className="bp-btn__icon">↓</span>
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="bp-btn bp-btn--ghost cursor-pointer"
            >
              <span>Print Web View</span>
              <span className="bp-btn__icon">⎙</span>
            </button>
          </div>
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
                UI/UX Designer · Interaction and Experience Designer
              </p>
            </div>

            <div className="font-mono text-xs space-y-1 text-[var(--ink-2)] md:text-right">
              <div>Bogotá, Colombia · Open to remote roles</div>
              <div>LATAM-based · Full overlap with EST</div>
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

          {/* Description Profile */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs text-[var(--signal)]">01 / Profile</h2>
            <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
              Senior UI/UX Designer with{" "}
              <strong className="text-[var(--ink)] font-medium">13+ years of experience</strong>{" "}
              in digital product design, combining strong visual design foundations with advanced
              UX and interaction design methodologies. Proven background designing SaaS and B2B
              platforms, marketing websites, and scalable design systems for global companies.
            </p>
            <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
              Experienced in cross-functional collaboration within agile teams, translating
              complex business and technical requirements into intuitive, accessible, and
              high-performing user interfaces. Strong focus on design systems, usability,
              accessibility (WCAG), and conversion-driven design.
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs text-[var(--signal)] border-b border-[var(--line)] pb-2">
              02 / Professional Experience
            </h2>

            <div className="space-y-8">
              {experience.map((job) => (
                <div key={`${job.company}-${job.period}`} className="space-y-2.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-lg font-semibold">
                      {job.role} — <span className="text-[var(--ink-2)]">{job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-[var(--ink-3)]">{job.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-[var(--ink-2)] leading-relaxed">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <span className="text-[var(--ink-3)] select-none">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs text-[var(--signal)] border-b border-[var(--line)] pb-2">
              03 / Education &amp; Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-base font-semibold">
                      Master’s Degree in Interaction Design &amp; User Experience
                    </h3>
                    <span className="font-mono text-xs text-[var(--signal)] shrink-0">UOC</span>
                  </div>
                  <p className="text-xs font-mono text-[var(--ink-2)] mt-0.5">
                    Universitat Oberta de Catalunya
                  </p>
                  <p className="text-sm text-[var(--ink-2)] mt-1">
                    Focus on User Research, Information Architecture (Matrícula de Honor),
                    Usability Testing, and Human-Computer Interaction (HCI).
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-base font-semibold">B.A. in Graphic Design</h3>
                    <span className="font-mono text-xs text-[var(--ink-3)] shrink-0">2015</span>
                  </div>
                  <p className="text-xs font-mono text-[var(--ink-2)] mt-0.5">
                    Universidad Los Libertadores
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-base font-semibold">Certified Product Designer</h3>
                    <span className="font-mono text-xs text-[var(--ink-3)] shrink-0">2023</span>
                  </div>
                  <p className="text-xs font-mono text-[var(--ink-2)]">Dribbble</p>
                  <p className="text-sm text-[var(--ink-2)] mt-0.5">
                    End-to-end product design training, from research to high-fidelity
                    prototyping.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-base font-semibold">Design Systems Bootcamp</h3>
                    <span className="font-mono text-xs text-[var(--ink-3)] shrink-0">2022</span>
                  </div>
                  <p className="text-xs font-mono text-[var(--ink-2)]">Memorisely</p>
                  <p className="text-sm text-[var(--ink-2)] mt-0.5">
                    Specialized training in scalable design systems, tokenization, and component
                    libraries using Figma.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-base font-semibold">
                      Interface Design &amp; Usability Certifications
                    </h3>
                    <span className="font-mono text-xs text-[var(--ink-3)] shrink-0">2020</span>
                  </div>
                  <p className="text-xs font-mono text-[var(--ink-2)]">Platzi</p>
                  <p className="text-sm text-[var(--ink-2)] mt-0.5">
                    UI design, UX research, and accessibility fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Tools */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs text-[var(--signal)] border-b border-[var(--line)] pb-2">
              04 / Skills, Tools &amp; Languages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-mono text-xs text-[var(--ink)] font-semibold mb-1.5">
                  Main Skills
                </div>
                <p className="text-[var(--ink-2)] leading-relaxed">
                  Product Design · User Interface (UI) · Interaction Design (IxD) · Design
                  Systems · Information Architecture · Prototyping &amp; Wireframing · User
                  Research &amp; Testing · Accessibility (WCAG).
                </p>
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--ink)] font-semibold mb-1.5">
                  Tools &amp; Platforms
                </div>
                <p className="text-[var(--ink-2)] leading-relaxed">
                  Figma &amp; FigJam · Design Tokens &amp; Tokenization · Component-based Design ·
                  Responsive &amp; Mobile-First Design · CMS-driven Websites · Collaboration with
                  Engineering &amp; Product Teams.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--ink)] font-semibold mb-1.5">
                  Languages &amp; Location
                </div>
                <p className="text-[var(--ink-2)] leading-relaxed">
                  Spanish (Native) · English (Professional Working Proficiency).
                  <br />
                  Bogotá, Colombia · LATAM-based · Full overlap with EST.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </Page>
  );
}
