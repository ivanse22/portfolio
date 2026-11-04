import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/layout/Page";
import { Reveal, Rise } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior UI/UX Designer & Interaction and Experience Designer with 13+ years of experience. Currently at Twilio & PGD Publicis.",
};

export default function AboutPage() {
  const stackColumns = [
    {
      code: "01",
      title: "Product & UI Design",
      items: [
        "Product Design (SaaS & B2B)",
        "User Interface (UI) Craft",
        "Interaction Design (IxD)",
        "Responsive & Mobile-First Design",
        "Conversion-Driven Landing Systems",
      ],
    },
    {
      code: "02",
      title: "Design Systems & Tokens",
      items: [
        "Figma & FigJam (Variables, Auto-Layout)",
        "Design Tokens & Tokenization",
        "Component-Based Architecture",
        "Reusable Module Documentation",
        "Developer Handoff & Governance",
      ],
    },
    {
      code: "03",
      title: "UX, IA & Accessibility",
      items: [
        "Information Architecture (Honors)",
        "User Research & Usability Testing",
        "Prototyping & Wireframing",
        "Accessibility Compliance (WCAG)",
        "Human-Computer Interaction (HCI)",
      ],
    },
    {
      code: "04",
      title: "Platforms & Collaboration",
      items: [
        "CMS-Driven Websites (HubSpot, Framer)",
        "React & Tailwind CSS Prototyping",
        "Agile Cross-Functional Collaboration",
        "Spanish (Native) · English (Pro Working)",
        "LATAM-Based · Full EST Overlap",
      ],
    },
  ];

  const timeline = [
    {
      period: "June 2024 — Present",
      role: "UI Designer",
      org: "Twilio",
      location: "Remote · Global Marketing",
      bullets: [
        "Design and maintain scalable UI components for Twilio’s global marketing website, ensuring strict alignment with the company’s design system.",
        "Collaborate with developers, product managers, and content teams within an agile environment to deliver high-fidelity landing pages focused on user conversion.",
        "Create and document reusable visual modules to streamline developer handoff, improve consistency, and reduce implementation time across teams.",
      ],
    },
    {
      period: "2020 — Present",
      role: "Senior UI & Visual Designer",
      org: "PGD Publicis (CJ Affiliate)",
      location: "Remote · Global Ecosystem",
      bullets: [
        "Lead interface design and visual direction for CJ Affiliate’s digital ecosystem, including responsive websites, design systems, and content hubs.",
        "Translate complex marketing and business requirements into intuitive UI layouts, interaction flows, and interactive prototypes.",
        "Manage the end-to-end design process for digital assets, ensuring accessibility compliance and pixel-perfect execution across devices.",
      ],
    },
    {
      period: "2018 — 2020",
      role: "Senior Art Director",
      org: "Nobox",
      location: "Marriott CALA · Sheraton",
      bullets: [
        "Partnered with global hospitality brands (Marriott CALA, Sheraton) to transform their digital presence through responsive web design and video content.",
        "Designed e-commerce interfaces and digital campaigns, focusing on user retention and visual storytelling.",
        "Led remote creative teams to deliver high-quality digital products within tight deadlines.",
      ],
    },
    {
      period: "2016 — 2018",
      role: "Senior Art Director",
      org: "Beat MullenLowe SSP3",
      location: "BMW · Hyundai · Nestlé",
      bullets: [
        "Led the digital design department, overseeing the creation of mobile applications, e-commerce platforms, and large-scale web projects.",
        "Directed UI strategies for major global clients including BMW, Hyundai, and Nestlé, ensuring high visual standards and brand compliance.",
        "Mentored junior designers and implemented efficient workflows for digital production and prototyping.",
      ],
    },
    {
      period: "2014 — 2016",
      role: "Senior Art Director (Digital Dept.)",
      org: "Sistole – Sancho BBDO",
      location: "Bogotá, Colombia",
      bullets: [
        "Led interface design and visual direction for digital ecosystems, responsive websites, and content hubs.",
        "Translated complex marketing requirements into intuitive, user-friendly UI layouts and interactive prototypes.",
        "Managed the end-to-end design process for digital assets, ensuring accessibility standards and pixel-perfect execution across devices.",
      ],
    },
  ];

  const education = [
    {
      year: "UOC · Honors in IA",
      title: "Master’s Degree in Interaction Design & User Experience",
      institution: "Universitat Oberta de Catalunya (UOC)",
      detail:
        "Focus on User Research, Information Architecture (Matrícula de Honor), Usability Testing, and Human-Computer Interaction (HCI).",
    },
    {
      year: "2015",
      title: "B.A. in Graphic Design",
      institution: "Universidad Los Libertadores",
      detail: "Visual communication, typography, editorial systems, and digital design foundations.",
    },
  ];

  const certifications = [
    {
      year: "2023",
      title: "Certified Product Designer",
      institution: "Dribbble",
      detail: "End-to-end product design training, from user research to high-fidelity prototyping.",
    },
    {
      year: "2022",
      title: "Design Systems Bootcamp",
      institution: "Memorisely",
      detail:
        "Specialized training in scalable design systems, tokenization, and component libraries using Figma.",
    },
    {
      year: "2020",
      title: "Interface Design & Usability Certifications",
      institution: "Platzi",
      detail: "UI design, UX research, and accessibility (WCAG) fundamentals.",
    },
  ];

  return (
    <Page className="px-[var(--pad-x)] pt-16 md:pt-24 pb-20">
      <div className="max-w-[1360px] mx-auto space-y-24">
        {/* ——— Hero ——— */}
        <header className="pb-14 border-b border-[var(--line)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="font-mono text-xs text-[var(--signal)]">
              About · UI/UX, Interaction &amp; Experience Designer
            </p>
            <h1 className="text-[clamp(40px,6vw,88px)] font-semibold tracking-[-0.04em] leading-[0.94]">
              <Reveal>Designing scalable</Reveal>
              <Reveal delay={0.06}>
                products &amp; <span className="voice-serif font-normal">considered</span> systems.
              </Reveal>
            </h1>
          </div>
          <Rise className="lg:col-span-4 border-t border-[var(--line)] pt-5 text-sm space-y-1.5 text-[var(--ink-2)]">
            <div className="font-medium text-[var(--ink)]">Ivan Sierra</div>
            <div>UI/UX · Interaction &amp; Experience Designer</div>
            <div>Bogotá, Colombia · Full overlap with EST</div>
            <div>Open to remote roles · LATAM-based</div>
            <div className="pt-1 font-mono text-xs text-[var(--ink-3)]">
              ES (Native) · EN (Professional Working)
            </div>
          </Rise>
        </header>

        {/* ——— Profile Narrative + Philosophy ——— */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Rise className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[var(--ink-3)]">Profile</span>
            <blockquote className="voice-serif text-3xl md:text-4xl leading-[1.15] text-[var(--ink)]">
              “Translating complex business and technical requirements into intuitive,
              accessible, and high-performing interfaces.”
            </blockquote>
          </Rise>

          <Rise
            delay={0.08}
            className="lg:col-span-7 space-y-5 text-base md:text-lg text-[var(--ink-2)] leading-relaxed"
          >
            <p>
              I am a <strong className="text-[var(--ink)] font-medium">Senior UI/UX, Interaction and Experience Designer</strong>{" "}
              combining strong visual design foundations with advanced UX and interaction
              design methodologies. I have a proven background designing{" "}
              <strong className="text-[var(--ink)] font-medium">
                SaaS and B2B platforms, marketing websites, and scalable design systems
              </strong>{" "}
              for global companies including <strong className="text-[var(--ink)] font-medium">Twilio</strong>,{" "}
              <strong className="text-[var(--ink)] font-medium">CJ Affiliate (PGD Publicis)</strong>,{" "}
              <strong className="text-[var(--ink)] font-medium">Marriott</strong>, and{" "}
              <strong className="text-[var(--ink)] font-medium">BMW</strong>.
            </p>
            <p>
              Experienced in cross-functional collaboration within agile teams, I bridge the
              gap between creative direction and front-end execution—with a strong focus on{" "}
              <strong className="text-[var(--ink)] font-medium">
                design systems, tokenization, usability, accessibility (WCAG), and
                conversion-driven design
              </strong>
              .
            </p>
          </Rise>
        </section>

        {/* ——— Experience Timeline ——— */}
        <section className="space-y-10 pt-14 border-t border-[var(--line)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[var(--signal)]">01 / Experience</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mt-1">
                Professional <span className="voice-serif font-normal">trajectory</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Ivan_Sierra_CV.pdf"
                download="Ivan_Sierra_CV.pdf"
                className="bp-btn bp-btn--primary"
              >
                <span>Download CV (PDF)</span>
                <span className="bp-btn__icon">↓</span>
              </a>
              <Link href="/cv" className="bp-btn bp-btn--ghost">
                <span>Web CV View</span>
                <span className="bp-btn__icon">→</span>
              </Link>
            </div>
          </div>

          <div className="focus-list divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {timeline.map((item) => (
              <div
                key={`${item.org}-${item.period}`}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3 font-mono text-xs text-[var(--ink-3)] pt-1">
                  {item.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                  <p className="font-mono text-xs text-[var(--ink-2)] mt-1">
                    {item.org}
                  </p>
                  <p className="font-mono text-[11px] text-[var(--ink-3)] mt-0.5">
                    {item.location}
                  </p>
                </div>
                <ul className="md:col-span-6 space-y-2.5 text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-[var(--ink-3)] select-none">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Education & Certifications ——— */}
        <section className="space-y-10 pt-14 border-t border-[var(--line)]">
          <div>
            <span className="font-mono text-xs text-[var(--signal)]">
              02 / Education &amp; Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mt-1">
              Academic degrees &amp; <span className="voice-serif font-normal">certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Degrees */}
            <div className="lg:col-span-6 space-y-6">
              <div className="font-mono text-xs text-[var(--ink-3)] border-b border-[var(--line)] pb-3">
                Academic Degrees
              </div>
              <div className="divide-y divide-[var(--line)]">
                {education.map((ed) => (
                  <div key={ed.title} className="py-5 first:pt-0 space-y-1.5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-tight">{ed.title}</h3>
                      <span className="font-mono text-xs text-[var(--signal)] shrink-0">
                        {ed.year}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-[var(--ink-2)]">{ed.institution}</div>
                    <p className="text-sm text-[var(--ink-2)] leading-relaxed pt-1">
                      {ed.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-6 space-y-6">
              <div className="font-mono text-xs text-[var(--ink-3)] border-b border-[var(--line)] pb-3">
                Specialized Certifications
              </div>
              <div className="divide-y divide-[var(--line)]">
                {certifications.map((cert) => (
                  <div key={cert.title} className="py-5 first:pt-0 space-y-1.5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-tight">{cert.title}</h3>
                      <span className="font-mono text-xs text-[var(--ink-3)] shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-[var(--ink-2)]">
                      {cert.institution}
                    </div>
                    <p className="text-sm text-[var(--ink-2)] leading-relaxed pt-1">
                      {cert.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ——— Scannable 4-Column Stack ——— */}
        <section className="space-y-10 pt-14 border-t border-[var(--line)]">
          <div>
            <span className="font-mono text-xs text-[var(--signal)]">03 / Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mt-1">
              Skills, tools &amp; <span className="voice-serif font-normal">platforms</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stackColumns.map((col, idx) => (
              <Rise
                key={col.code}
                delay={idx * 0.05}
                className="border-t border-[var(--line)] pt-5 space-y-4"
              >
                <div className="font-mono text-xs text-[var(--ink-3)]">{col.code}</div>
                <h3 className="text-base font-semibold tracking-tight">{col.title}</h3>
                <ul className="space-y-2 text-sm text-[var(--ink-2)]">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Rise>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
