import Link from "next/link";
import type { Project } from "@/lib/projects";
import { BlueprintDiagram } from "@/components/blocks/BlueprintDiagram";
import { RevealFrame } from "@/components/motion/RevealFrame";
import { Rise } from "@/components/motion/Reveal";

/**
 * Featured project plate — 12-column side-by-side architecture:
 * - Left column (5 cols): Index, Title, Description, and structured Case Metadata (Client/Role/Timeline/Year, Stack, Outcome).
 * - Right column (7 cols): Large visual container.
 * Both Title and Visual are shared ViewTransition elements that morph into the Case Study page.
 */
export function ProjectPlate({ project, total }: { project: Project; total: number }) {
  return (
    <article className="plate border-t border-[var(--line)] pt-12 md:pt-16">
      <Link
        href={`/work/${project.slug}`}
        transitionTypes={["nav-forward"]}
        data-cursor="View case"
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch"
        aria-label={`${project.title} — read case study`}
      >
        {/* ——— Left Column: Title, Description & Case Metadata ——— */}
        <Rise className="lg:col-span-5 flex flex-col justify-between space-y-8">
          {/* Top block: Index + Title + Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--ink-3)]">
              <span className="text-[var(--signal)] font-medium tabular-nums">
                {project.index}
                <span className="text-[var(--ink-3)]">/{String(total).padStart(2, "0")}</span>
              </span>
              <span>·</span>
              <span className="plate-meta">{project.pillar}</span>
            </div>

            <h3 className="text-[clamp(28px,3.2vw,46px)] font-semibold leading-[1.04] tracking-[-0.035em]">
              <span className="plate-title">{project.title}</span>
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-[var(--ink-2)]">
              {project.subtitle}
            </p>
          </div>

          {/* Bottom block: Structured Metadata (matching Case Study sidebar) */}
          <div className="space-y-5 pt-6 border-t border-[var(--line)]">
            <dl className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Client</dt>
                <dd className="font-medium mt-0.5">{project.client}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Role</dt>
                <dd className="font-medium mt-0.5">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Timeline</dt>
                <dd className="font-medium mt-0.5">{project.timeline}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-[var(--ink-3)]">Year</dt>
                <dd className="font-medium mt-0.5">{project.year}</dd>
              </div>
            </dl>

            <div className="pt-4 border-t border-[var(--line)] space-y-2">
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

            <div className="pt-4 border-t border-[var(--line)] space-y-3">
              <div>
                <div className="font-mono text-[11px] text-[var(--ink-3)]">Outcome</div>
                <p className="text-sm font-medium mt-0.5 leading-relaxed">
                  {project.headlineResult}
                </p>
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-medium pt-1">
                <span className="link-underline">Read case study</span>
                <span className="plate-arrow font-mono">→</span>
              </span>
            </div>
          </div>
        </Rise>

        {/* ——— Right Column: Visual Content Container ——— */}
        <div className="lg:col-span-7 flex">
          <div className="w-full h-full">
            <RevealFrame className="h-full">
              <BlueprintDiagram
                type={project.diagramType}
                specCode={project.specCode}
                size="lg"
              />
            </RevealFrame>
          </div>
        </div>
      </Link>
    </article>
  );
}
