import type { Metadata } from "next";
import { Page } from "@/components/layout/Page";
import { ProjectPlate } from "@/components/blocks/ProjectPlate";
import { Reveal, Rise } from "@/components/motion/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in design systems, information architecture and product UI by Ivan Sierra.",
};

export default function WorkIndexPage() {
  return (
    <Page className="px-[var(--pad-x)] pt-16 md:pt-24 pb-24 md:pb-32">
      <div className="max-w-[1360px] mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 md:pb-24">
          <h1 className="lg:col-span-8 text-[clamp(48px,7vw,108px)] font-semibold leading-[0.92] tracking-[-0.045em]">
            <Reveal>
              All <span className="voice-serif">work</span>
              <span className="ml-3 align-baseline font-mono text-[0.22em] font-normal tracking-normal text-[var(--ink-3)]">
                ({String(projects.length).padStart(2, "0")})
              </span>
            </Reveal>
          </h1>
          <Rise className="lg:col-span-4">
            <p className="text-base text-[var(--ink-2)] leading-relaxed">
              Enterprise design systems, information architecture with honors, product
              research and conversion-focused UI — 2022 to today.
            </p>
          </Rise>
        </header>

        <div className="space-y-28 md:space-y-44">
          {projects.map((p) => (
            <ProjectPlate key={p.slug} project={p} total={projects.length} />
          ))}
        </div>
      </div>
    </Page>
  );
}
