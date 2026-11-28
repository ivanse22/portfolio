import Link from "next/link";
import { Page } from "@/components/layout/Page";
import { ProjectPlate } from "@/components/blocks/ProjectPlate";
import { Reveal, Rise } from "@/components/motion/Reveal";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);

  return (
    <Page>
      {/* ——— HERO — owns the first viewport cleanly, fact strip docked at foot ——— */}
      <section className="px-[var(--pad-x)] min-h-[calc(100svh-4rem)] flex flex-col justify-between pt-12 pb-10 md:pt-20 md:pb-12">
        <div className="max-w-[1360px] mx-auto w-full flex-1 flex flex-col justify-between gap-12">
          <div>
            <Rise delay={0} className="inline-flex items-center gap-2.5 font-mono text-xs text-[var(--ink-2)] mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--ok)] ring-4 ring-[var(--ok)]/15" />
              <span>Available for work · Bogotá (GMT-5) · Remote</span>
            </Rise>

            <h1 className="text-[clamp(44px,7vw,108px)] font-semibold leading-[0.94] tracking-[-0.04em] max-w-[15ch]">
              <Reveal delay={0}>Designing the system</Reveal>
              <Reveal delay={0.08}>
                behind the <span className="voice-serif">interface.</span>
              </Reveal>
            </h1>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <Rise delay={0.18} className="lg:col-span-7">
                <p className="text-lg md:text-xl leading-relaxed text-[var(--ink-2)] max-w-[54ch]">
                  I’m <strong className="text-[var(--ink)] font-medium">Ivan Sierra</strong>, a
                  Senior{" "}
                  <strong className="text-[var(--ink)] font-medium">
                    UI/UX &amp; Experience Designer
                  </strong>{" "}
                  with <strong className="text-[var(--ink)] font-medium">13+ years</strong> crafting
                  intuitive interfaces, scalable design systems, and research-backed information
                  architecture.
                </p>
              </Rise>

              <Rise
                delay={0.24}
                className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-3"
              >
                <a href="#work" className="bp-btn bp-btn--primary">
                  <span>Selected work</span>
                  <span className="bp-btn__icon bp-btn__icon--down">↓</span>
                </a>
                <Link href="/cv" className="bp-btn bp-btn--ghost">
                  <span>Resume / CV</span>
                  <span className="bp-btn__icon">→</span>
                </Link>
              </Rise>
            </div>
          </div>

          <Rise
            delay={0.3}
            className="pt-6 border-t border-[var(--line)] grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { k: "Current role", v: "UI Designer at Twilio" },
              { k: "Experience", v: "13+ years in digital products" },
              { k: "Education", v: "MSc UX (UOC) · Honors in IA" },
              { k: "Focus", v: "Design Systems · IA · UI Craft" },
            ].map((item) => (
              <div key={item.k}>
                <div className="font-mono text-xs text-[var(--ink-3)]">{item.k}</div>
                <div className="text-sm font-medium mt-1">{item.v}</div>
              </div>
            ))}
          </Rise>
        </div>
      </section>

      {/* ——— SELECTED WORK — the core of the page ——— */}
      <section
        id="work"
        className="scroll-mt-16 px-[var(--pad-x)] pt-24 md:pt-32 pb-24 md:pb-32 border-t border-[var(--line)] bg-[var(--bg-work)] transition-colors duration-300"
      >
        <div className="max-w-[1360px] mx-auto">
          {/* Section header at display scale — same rank as the hero */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 md:pb-24">
            <h2 className="lg:col-span-8 text-[clamp(48px,7vw,108px)] font-semibold leading-[0.92] tracking-[-0.045em]">
              Selected <span className="voice-serif">work</span>
              <span className="ml-3 align-baseline font-mono text-[0.22em] font-normal tracking-normal tabular-nums text-[var(--ink-3)]">
                ({String(featured.length).padStart(2, "0")})
              </span>
            </h2>
            <div className="lg:col-span-4 space-y-4">
              <p className="text-base text-[var(--ink-2)] leading-relaxed">
                Three projects across design systems, information architecture and product
                research — each documented from problem to outcome.
              </p>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-medium py-1"
              >
                <span className="link-underline">All projects ({projects.length})</span>
                <span className="font-mono inline-block transition-transform duration-150 group-hover:translate-x-[3px]">
                  →
                </span>
              </Link>
            </div>
          </header>

          {/* Plates — generous rhythm, standing solid at rest */}
          <div className="space-y-20 md:space-y-28">
            {featured.map((project) => (
              <ProjectPlate key={project.slug} project={project} total={featured.length} />
            ))}
          </div>

          {/* More work — compact index, deliberately secondary */}
          <div className="mt-28 md:mt-40">
            <div className="flex items-baseline justify-between pb-5">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">More work</h3>
              <span className="font-mono text-xs tabular-nums text-[var(--ink-3)]">
                {String(archive.length).padStart(2, "0")} projects
              </span>
            </div>
            <div className="focus-list border-t border-[var(--line)]">
              {archive.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  transitionTypes={["nav-forward"]}
                  data-cursor="View case"
                  className="grid grid-cols-1 md:grid-cols-12 items-baseline gap-2 md:gap-6 py-6 border-b border-[var(--line)]"
                >
                  <span className="md:col-span-1 font-mono text-xs tabular-nums text-[var(--ink-3)]">
                    {p.index}
                  </span>
                  <span className="md:col-span-4 text-lg md:text-xl font-semibold tracking-tight">
                    {p.title}
                  </span>
                  <span className="md:col-span-5 text-sm text-[var(--ink-2)]">
                    {p.headlineResult}
                  </span>
                  <span className="md:col-span-2 font-mono text-xs tabular-nums text-[var(--ink-3)] md:text-right">
                    {p.client} · {p.year} <span className="row-arrow">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— HOW I WORK — UI & UX centered, unified top-rule block grammar ——— */}
      <section className="px-[var(--pad-x)] py-20 md:py-28 border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs text-[var(--signal)] block">Methodology</span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] leading-tight">
              How I <span className="voice-serif font-normal">work</span>
            </h2>
            <p className="text-base text-[var(--ink-2)] leading-relaxed max-w-[34ch]">
              Combining user-centered UX methodology with high-precision UI craft and
              scalable systems.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "User-Centered UX & IA",
                desc: "Grounding every product in user research, clear information architecture, and intuitive flows that remove friction and lower cognitive load.",
              },
              {
                num: "02",
                title: "UI Craft & Interaction",
                desc: "Designing sharp visual hierarchy, accessible interfaces (WCAG), and purposeful micro-interactions that guide users and drive conversion.",
              },
              {
                num: "03",
                title: "Scalable Design Systems",
                desc: "Building tokenized component libraries and clear usage standards in Figma so teams can ship consistent experiences at scale.",
              },
            ].map((pillar) => (
              <div key={pillar.num} className="border-t border-[var(--line)] pt-5 space-y-2.5">
                <span className="font-mono text-xs tabular-nums text-[var(--ink-3)] block">
                  {pillar.num}
                </span>
                <h3 className="text-base font-semibold tracking-tight">{pillar.title}</h3>
                <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
