import Link from "next/link";
import { ViewTransition } from "react";
import type { Project } from "@/lib/projects";
import { BlueprintDiagram } from "@/components/blocks/BlueprintDiagram";
import { RevealFrame } from "@/components/motion/RevealFrame";
import { Rise } from "@/components/motion/Reveal";

/**
 * Featured project "plate": the dominant unit of the portfolio.
 * Visual first (full width), then a two-column caption: title ↔ summary/outcome.
 * The visual and title are shared elements that morph into the case-study hero.
 */
export function ProjectPlate({ project, total }: { project: Project; total: number }) {
  return (
    <article className="plate">
      <Link
        href={`/work/${project.slug}`}
        transitionTypes={["nav-forward"]}
        data-cursor="View case"
        className="block"
        aria-label={`${project.title} — read case study`}
      >
        {/* Meta rail */}
        <Rise className="flex items-baseline justify-between gap-6 pb-5 font-mono text-xs text-[var(--ink-3)]">
          <span className="flex items-baseline gap-4">
            <span className="text-[var(--ink)] tabular-nums">
              {project.index}
              <span className="text-[var(--ink-3)]">/{String(total).padStart(2, "0")}</span>
            </span>
            <span className="plate-meta">{project.pillar}</span>
          </span>
          <span className="plate-meta">
            {project.client} — {project.year}
          </span>
        </Rise>

        {/* Visual — shared element */}
        <ViewTransition name={`visual-${project.slug}`} share="morph" default="none">
          <div>
            <RevealFrame>
              <BlueprintDiagram type={project.diagramType} specCode={project.specCode} size="lg" />
            </RevealFrame>
          </div>
        </ViewTransition>

        {/* Caption */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 pt-10 md:pt-12">
          <div className="lg:col-span-6">
            <ViewTransition name={`title-${project.slug}`} share="morph" default="none">
              <h3 className="text-[clamp(32px,4.2vw,60px)] font-semibold leading-[1.02] tracking-[-0.035em]">
                <span className="plate-title">{project.title}</span>
              </h3>
            </ViewTransition>
          </div>

          <Rise className="lg:col-span-5 lg:col-start-8 space-y-6">
            <p className="text-lg leading-relaxed text-[var(--ink-2)]">{project.subtitle}</p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-[var(--line)] text-sm">
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Role</dt>
                <dd className="mt-1 font-medium">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Timeline</dt>
                <dd className="mt-1 font-medium">{project.timeline}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Outcome</dt>
                <dd className="mt-1 font-medium leading-relaxed">{project.headlineResult}</dd>
              </div>
            </dl>

            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <span className="link-underline">Read case study</span>
              <span className="plate-arrow font-mono">→</span>
            </span>
          </Rise>
        </div>
      </Link>
    </article>
  );
}
