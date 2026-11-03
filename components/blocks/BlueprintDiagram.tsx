import type { Project } from "@/lib/projects";

/**
 * Quiet architectural "plate" that frames a UI artifact for each case.
 * `size="lg"` is used for featured plates and case heroes (artifact scales up on desktop).
 * The `.diagram-artifact` wrapper is animated by the parent `.plate` hover (see globals.css).
 */
export function BlueprintDiagram({
  type,
  specCode,
  size = "md",
}: {
  type: Project["diagramType"];
  specCode: string;
  size?: "md" | "lg";
}) {
  const lg = size === "lg";

  return (
    <div
      className={`relative w-full h-full rounded-[4px] bp-bg-subgrid bg-[var(--bg-2)]/60 border border-[var(--line)] flex flex-col justify-between overflow-hidden select-none ${
        lg ? "min-h-[340px] md:min-h-[clamp(420px,40vw,600px)] p-6 md:p-10" : "min-h-[280px] p-6 md:p-8"
      }`}
    >
      {/* Quiet corner label */}
      <div className="flex items-center justify-between font-mono text-[11px] text-[var(--ink-3)]">
        <span>{specCode.split("//")[0]?.trim()}</span>
        <span>8pt · 1:1</span>
      </div>

      {/* UI artifact */}
      <div className="my-auto py-8">
        <div className={`diagram-artifact ${lg ? "md:scale-[1.18] lg:scale-[1.32]" : ""}`}>
          {type === "tokens" && (
            <div className="max-w-[460px] mx-auto bg-[var(--surface)] border border-[var(--line)] rounded-[3px] p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--signal)]" />
                  <span className="text-xs font-medium">CJ Token &amp; Component Spec</span>
                </div>
                <span className="font-mono text-[10px] text-[var(--ink-3)]">Figma ↔ HubSpot</span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {["#111315", "#383E44", "#7C838A", "#DCDFD9", "#E64212"].map((hex) => (
                  <div key={hex} className="space-y-1.5">
                    <div className="h-9 rounded-[2px]" style={{ background: hex }} />
                    <div className="font-mono text-[9px] text-[var(--ink-3)]">{hex}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 gap-3">
                <div className="px-3.5 py-2 rounded-[2px] bg-[var(--ink)] text-[var(--bg)] text-xs font-medium">
                  Primary Action
                </div>
                <div className="px-3.5 py-2 rounded-[2px] border border-[var(--line)] text-xs text-[var(--ink-2)]">
                  Module Slot
                </div>
                <span className="ml-auto font-mono text-[10px] text-[var(--signal)]">h: 40px · 8pt</span>
              </div>
            </div>
          )}

          {type === "ia-tree" && (
            <div className="max-w-[460px] mx-auto space-y-3">
              <div className="bg-[var(--surface)] border border-[var(--line)] rounded-[3px] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-medium">MNAC — Visitor Intent Taxonomy</span>
                <span className="font-mono text-[10px] text-[var(--signal)]">Task-first</span>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-1">
                {[
                  { num: "01", title: "Plan a Visit", sub: "Tickets & Hours" },
                  { num: "02", title: "On View", sub: "Exhibitions" },
                  { num: "03", title: "Collection", sub: "Faceted Search" },
                ].map((node) => (
                  <div
                    key={node.num}
                    className="bg-[var(--surface)] border border-[var(--line)] rounded-[3px] p-3.5 space-y-1"
                  >
                    <div className="font-mono text-[10px] text-[var(--signal)]">{node.num}</div>
                    <div className="text-xs font-semibold">{node.title}</div>
                    <div className="text-[11px] text-[var(--ink-2)]">{node.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {type === "fintech-flow" && (
            <div className="max-w-[440px] mx-auto bg-[var(--surface)] border border-[var(--line)] rounded-[3px] p-5 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase text-[var(--ink-3)]">
                    Net Spendable Balance
                  </div>
                  <div className="text-3xl font-semibold tracking-tight tabular-nums mt-0.5">
                    €3,648.00
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-[2px] bg-[var(--bg-2)] font-mono text-[10px] text-[var(--ink-2)]">
                  Auto-split
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-[var(--bg-2)] overflow-hidden flex">
                <div className="w-[76%] bg-[var(--ink)]" />
                <div className="w-[24%] bg-[var(--signal)]" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1 border-t border-[var(--line)]">
                <span className="text-[var(--ink-2)]">Gross Invoice: €4,800</span>
                <span className="font-mono text-[11px] text-[var(--signal)]">Tax Reserve: €1,152</span>
              </div>
            </div>
          )}

          {type === "megamenu" && (
            <div className="max-w-[460px] mx-auto bg-[var(--surface)] border border-[var(--line)] rounded-[3px] p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-2.5 text-xs">
                <span className="font-semibold">CJ Global Navigation</span>
                <span className="font-mono text-[10px] text-[var(--ink-3)]">Mega-Menu Grid</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 text-xs">
                {["Growth Solutions", "Partner Ecosystem", "Platform & Tools"].map((col, i) => (
                  <div key={col} className="p-2.5 rounded-[2px] bg-[var(--bg)] space-y-1">
                    <div className="font-mono text-[9px] text-[var(--ink-3)]">0{i + 1}</div>
                    <div className="font-medium leading-snug">{col}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {type === "event-brand" && (
            <div className="max-w-[440px] mx-auto bg-[var(--surface)] border border-[var(--line)] rounded-[3px] p-5 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="font-mono text-[10px] text-[var(--ink-3)]">TORRE BOOTCAMP</div>
                <div className="text-base font-semibold">High-Contrast Conversion UI</div>
                <div className="text-xs text-[var(--ink-2)]">High contrast · Sticky signup</div>
              </div>
              <div className="flex gap-2">
                <div
                  className="w-12 h-14 rounded-[2px] flex items-end p-1.5 font-mono text-[9px] text-white"
                  style={{ background: "#6124DC" }}
                >
                  #6124DC
                </div>
                <div
                  className="w-12 h-14 rounded-[2px] flex items-end p-1.5 font-mono text-[9px] text-[#111315]"
                  style={{ background: "#FFDD04" }}
                >
                  #FFDD04
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Subtle bottom caption */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--ink-3)]">
        <span>Fig. UI artifact</span>
        <span>{specCode.split("//")[1]?.trim()}</span>
      </div>
    </div>
  );
}
