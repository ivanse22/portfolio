import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/layout/Page";
import { Magnetic } from "@/components/interaction/Magnetic";
import { Reveal, Rise } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior UI/UX & Experience Designer with 13+ years of experience. Currently at Twilio. MSc UOC with Honors in Information Architecture.",
};

export default function AboutPage() {
  const stackColumns = [
    {
      code: "01",
      title: "Interface & Design Systems",
      items: [
        "Figma (Variables, Auto-Layout, Tokens)",
        "Atomic Design & Multi-Brand Kits",
        "Component Governance & Specs",
        "WCAG AA/AAA Accessibility",
        "Interactive & Motion Prototyping",
      ],
    },
    {
      code: "02",
      title: "Information Architecture & Research",
      items: [
        "Taxonomy & Sitemap Restructuring",
        "Card Sorting & Tree Testing",
        "Qualitative Interviews & JTBD",
        "Heuristic & Cognitive Walkthroughs",
        "Moderated / Unmoderated Usability Testing",
      ],
    },
    {
      code: "03",
      title: "Code & Production Alignment",
      items: [
        "React & Next.js Prototyping",
        "Tailwind CSS & CSS Variables",
        "Semantic HTML5 & ARIA Patterns",
        "HubSpot CMS Module Architecture",
        "1:1 Design-to-DOM QA",
      ],
    },
    {
      code: "04",
      title: "Product & Collaboration",
      items: [
        "Cross-functional Agile / Dual-Track UX",
        "Design Documentation & Governance",
        "Analytics & Conversion Diagnostics",
        "Bilingual Communication (EN / ES)",
        "Remote-First Global Collaboration",
      ],
    },
  ];

  const timeline = [
    {
      period: "2024 — Present",
      role: "UI Designer",
      org: "Twilio",
      location: "Bogotá, Colombia · Remote",
      summary:
        "Designing high-impact web experiences, landing systems, and modular components while maintaining and scaling the global design system for seamless consistency.",
    },
    {
      period: "2022 — 2024",
      role: "Senior UI/UX Designer & Systems Architect",
      org: "CJ.com & Global Tech Clients",
      location: "Remote",
      summary:
        "Led the atomic shift from isolated mockups to the CJ Design System aligned 1:1 with HubSpot CRM and front-end frameworks, plus global navigation IA overhaul.",
    },
    {
      period: "2020 — 2022",
      role: "UI / Visual & Experience Designer",
      org: "Torre & Digital Brands",
      location: "LatAm · Remote",
      summary:
        "Crafted conversion-focused product and event experiences, high-contrast brand systems, and scalable web architectures across Latin America and the US.",
    },
    {
      period: "2013 — 2020",
      role: "Digital Art Director & Senior UI/UX Designer",
      org: "Global Advertising & Product Studios",
      location: "Bogotá, Colombia",
      summary:
        "7+ years leading digital products, campaign ecosystems, and design craft for international brands—building the visual and strategic foundation behind 13+ years in the industry.",
    },
  ];

  return (
    <Page className="px-[var(--pad-x)] pt-16 md:pt-24 pb-20">
      <div className="max-w-[1360px] mx-auto space-y-24">
        {/* Hero */}
        <header className="pb-14 border-b border-[var(--line)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="font-mono text-xs text-[var(--signal)]">About</p>
            <h1 className="text-[clamp(40px,6vw,88px)] font-semibold tracking-[-0.04em] leading-[0.94]">
              <Reveal>13+ years turning</Reveal>
              <Reveal delay={0.06}>
                complexity into <span className="voice-serif font-normal">calm</span> systems.
              </Reveal>
            </h1>
          </div>
          <Rise className="lg:col-span-4 border-t border-[var(--line)] pt-5 text-sm space-y-2 text-[var(--ink-2)]">
            <div className="font-medium text-[var(--ink)]">Ivan Sierra</div>
            <div>UI/UX &amp; Experience Designer</div>
            <div>Bogotá, Colombia (GMT-5) · Remote</div>
            <div>Currently at Twilio (2024–Today)</div>
            <div>MSc UX — UOC (Honors in IA)</div>
          </Rise>
        </header>

        {/* Philosophy Quote + Narrative */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Rise className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[var(--ink-3)]">Philosophy</span>
            <blockquote className="voice-serif text-3xl md:text-4xl leading-[1.15] text-[var(--ink)]">
              “A design system is useless if it doesn’t survive contact with the DOM—and an
              interface only succeeds when its structure feels effortless.”
            </blockquote>
          </Rise>

          <Rise delay={0.08} className="lg:col-span-7 space-y-5 text-base md:text-lg text-[var(--ink-2)] leading-relaxed">
            <p>
              I am a <strong className="text-[var(--ink)] font-medium">UI/UX and Experience Designer</strong>{" "}
              with over <strong className="text-[var(--ink)] font-medium">13 years of experience</strong>{" "}
              working at the intersection of visual craft, information architecture, and
              front-end systems.
            </p>
            <p>
              Currently based in Bogotá and designing at{" "}
              <strong className="text-[var(--ink)] font-medium">Twilio</strong>, I focus on building
              modular web experiences and design system foundations that bridge creative
              direction and engineering execution without friction.
            </p>
            <p>
              My practical work is grounded in formal research: I hold a{" "}
              <strong className="text-[var(--ink)] font-medium">
                Master’s Degree (MSc) in UX Design from Universitat Oberta de Catalunya (UOC)
              </strong>
              , where I was awarded{" "}
              <strong className="text-[var(--ink)] font-medium">
                Matrícula de Honor (Highest Honors) in Information Architecture
              </strong>
              . Whether structuring a museum taxonomy in React/Tailwind or aligning Figma
              tokens with HubSpot CRM, I design for longevity, legibility, and measurable
              impact.
            </p>
          </Rise>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-10 pt-14 border-t border-[var(--line)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[var(--signal)]">01 / Experience</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mt-1">
                Career trajectory &amp; <span className="voice-serif font-normal">education</span>
              </h2>
            </div>
            <Magnetic>
              <Link href="/cv" className="bp-btn bp-btn--primary">
                <span>Printable CV</span>
                <span className="bp-btn__icon">→</span>
              </Link>
            </Magnetic>
          </div>

          <div className="focus-list divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {timeline.map((item) => (
              <div
                key={item.period}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <div className="md:col-span-3 font-mono text-xs text-[var(--ink-3)]">
                  {item.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                  <p className="font-mono text-xs text-[var(--ink-2)] mt-0.5">
                    {item.org} · {item.location}
                  </p>
                </div>
                <p className="md:col-span-6 text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}

            {/* Academic Honors Row */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-3 font-mono text-xs text-[var(--signal)]">
                Academic · Honors
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold tracking-tight">
                  MSc in User Experience Design
                </h3>
                <p className="font-mono text-xs text-[var(--ink-2)] mt-0.5">
                  Universitat Oberta de Catalunya (UOC)
                </p>
              </div>
              <p className="md:col-span-6 text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                Awarded <strong className="text-[var(--ink)] font-medium">Matrícula de Honor</strong>{" "}
                in Information Architecture. Master’s Thesis (TFM):{" "}
                <em>Quadra — Freelancer Fintech Product &amp; UX Research</em>.
              </p>
            </div>
          </div>
        </section>

        {/* Scannable 4-Column Stack */}
        <section className="space-y-10 pt-14 border-t border-[var(--line)]">
          <div>
            <span className="font-mono text-xs text-[var(--signal)]">02 / Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mt-1">
              Stack &amp; <span className="voice-serif font-normal">methods</span>
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
