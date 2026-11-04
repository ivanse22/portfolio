import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Page } from "@/components/layout/Page";
import { BlueprintDiagram } from "@/components/blocks/BlueprintDiagram";
import { Rise } from "@/components/motion/Reveal";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Case Not Found" };
  return {
    title: `${project.title} (${project.client})`,
    description: project.subtitle,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <Page>
      {/* ——— Case Hero ——— */}
      <header className="border-b border-[var(--line)] px-[var(--pad-x)] pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--ink-3)] mb-10">
            <Link
              href="/work"
              transitionTypes={["nav-back"]}
              className="inline-flex items-center gap-2 text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
            >
              <span>←</span>
              <span className="link-underline">All work</span>
            </Link>
            <span>
              {project.index} / {String(projects.length).padStart(2, "0")} · {project.pillar}
            </span>
          </div>

          <div className="max-w-[920px] space-y-5">
            <p className="font-mono text-xs text-[var(--signal)]">
              {project.client} · {project.year}
            </p>
            <h1 className="text-[clamp(36px,5.6vw,80px)] font-semibold tracking-[-0.04em] leading-[0.96]">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--ink-2)] max-w-[60ch] leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Visual */}
          <div className="mt-12">
            <BlueprintDiagram
              type={project.diagramType}
              specCode={project.specCode}
              size="lg"
            />
          </div>
        </div>
      </header>

      {/* ——— Case Body: Sticky Metadata + Narrative ——— */}
      <div className="px-[var(--pad-x)] py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 border-t border-[var(--line)] pt-6 space-y-6">
            <dl className="grid grid-cols-2 gap-y-5 gap-x-6 text-sm">
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Client</dt>
                <dd className="font-medium mt-1">{project.client}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Role</dt>
                <dd className="font-medium mt-1">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Timeline</dt>
                <dd className="font-medium mt-1">{project.timeline}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Year</dt>
                <dd className="font-medium mt-1">{project.year}</dd>
              </div>
            </dl>

            <div className="pt-5 border-t border-[var(--line)] space-y-2.5">
              <div className="font-mono text-[11px] text-[var(--ink-3)]">Methods &amp; Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-[var(--ink-2)] px-2.5 py-0.5 rounded-[2px] bg-[var(--bg-2)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <nav
              aria-label="Case study sections"
              className="pt-5 border-t border-[var(--line)] space-y-2 font-mono text-xs text-[var(--ink-2)]"
            >
              <div className="text-[11px] text-[var(--ink-3)]">Contents</div>
              <a href="#problem" className="block hover:text-[var(--ink)] transition-colors">
                01 · Problem &amp; Context
              </a>
              <a href="#process" className="block hover:text-[var(--ink)] transition-colors">
                02 · Process &amp; Execution
              </a>
              <a href="#decisions" className="block hover:text-[var(--ink)] transition-colors">
                03 · Key Decisions
              </a>
              <a href="#outcomes" className="block hover:text-[var(--ink)] transition-colors">
                04 · Outcomes &amp; Impact
              </a>
            </nav>
          </aside>

          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-20">
            {/* 01. Problem & Context */}
            <Rise className="space-y-6 pb-16 border-b border-[var(--line)]">
              <span id="problem" className="scroll-mt-24 font-mono text-xs text-[var(--signal)] block">
                01 / Problem &amp; Context
              </span>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.15]">
                {project.problem}
              </h2>
              <p className="text-base md:text-lg text-[var(--ink-2)] leading-relaxed">
                {project.context}
              </p>
            </Rise>

            {/* 02. Process Steps */}
            <section id="process" className="scroll-mt-24 space-y-10 pb-16 border-b border-[var(--line)]">
              <span className="font-mono text-xs text-[var(--signal)] block">
                02 / Process &amp; Execution
              </span>
              <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {project.steps.map((step) => (
                  <Rise key={step.index} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-4 space-y-1">
                      <span className="font-mono text-xs text-[var(--ink-3)]">
                        {step.index} · {step.phase}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                    </div>
                    <div className="md:col-span-8 space-y-2">
                      <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                        {step.summary}
                      </p>
                      <span className="inline-block font-mono text-[11px] text-[var(--ink-3)]">
                        {step.specNote}
                      </span>
                    </div>
                  </Rise>
                ))}
              </div>
            </section>

            {/* 03. Decision Log */}
            <section id="decisions" className="scroll-mt-24 space-y-8 pb-16 border-b border-[var(--line)]">
              <span className="font-mono text-xs text-[var(--signal)] block">
                03 / Key Design Decisions
              </span>
              <div className="grid gap-6">
                {project.decisions.map((d) => (
                  <Rise
                    key={d.id}
                    className="border border-[var(--line)] bg-[var(--surface)] rounded-[3px] p-6 md:p-8 space-y-3"
                  >
                    <div className="font-mono text-xs text-[var(--ink-3)]">{d.id}</div>
                    <h3 className="text-xl font-semibold tracking-tight">{d.title}</h3>
                    <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                      <strong className="text-[var(--ink)] font-medium">Why:</strong> {d.rationale}
                    </p>
                    <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                      <strong className="text-[var(--ink)] font-medium">Result:</strong> {d.outcome}
                    </p>
                  </Rise>
                ))}
              </div>
            </section>

            {/* 04. Outcomes & Metrics */}
            <section id="outcomes" className="scroll-mt-24 space-y-8">
              <span className="font-mono text-xs text-[var(--signal)] block">
                04 / Outcomes &amp; Impact
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((m) => (
                  <Rise
                    key={m.label}
                    className="border-t border-[var(--line)] pt-5 flex flex-col justify-between gap-3"
                  >
                    <span className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] tabular-nums">
                      {m.value}
                    </span>
                    <span className="text-sm text-[var(--ink-2)] leading-relaxed">{m.label}</span>
                  </Rise>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ——— Next Case Handshake ——— */}
      <section className="px-[var(--pad-x)] pt-8 pb-12">
        <div className="max-w-[1360px] mx-auto border-t border-[var(--line)] pt-14">
          <Link
            href={`/work/${nextProject.slug}`}
            transitionTypes={["nav-forward"]}
            data-cursor="Next case"
            className="plate group block"
          >
            <div className="font-mono text-xs text-[var(--ink-3)] mb-3">
              Next case study · {nextProject.index} / {String(projects.length).padStart(2, "0")}
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.035em]">
                <span className="plate-title">{nextProject.title}</span>
              </h2>
              <span className="font-mono text-xs text-[var(--ink-2)]">
                {nextProject.client} · {nextProject.year}{" "}
                <span className="plate-arrow">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>
    </Page>
  );
}
