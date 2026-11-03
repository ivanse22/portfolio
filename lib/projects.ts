export type CaseDecision = {
  id: string;
  title: string;
  rationale: string;
  outcome: string;
};

export type CaseStep = {
  index: string;
  phase: string;
  title: string;
  summary: string;
  specNote: string;
};

export type CaseMetric = {
  value: string;
  label: string;
  spec: string;
};

export type Project = {
  slug: string;
  index: string;
  featured: boolean;
  status: "shipped" | "specification";
  pillar: "Systems" | "Clarity" | "Craft";
  title: string;
  subtitle: string;
  client: string;
  role: string;
  timeline: string;
  year: string;
  tools: string[];
  headlineResult: string;
  specCode: string;
  tint: string;
  problem: string;
  context: string;
  steps: CaseStep[];
  decisions: CaseDecision[];
  metrics: CaseMetric[];
  diagramType: "tokens" | "ia-tree" | "fintech-flow" | "megamenu" | "event-brand";
};

export const projects: Project[] = [
  {
    slug: "cj-design-system",
    index: "01",
    featured: true,
    status: "shipped",
    pillar: "Systems",
    title: "CJ Design System & UI Kit",
    subtitle: "From isolated pages to a multi-team atomic architecture with 1:1 HubSpot & front-end parity.",
    client: "CJ.com",
    role: "Senior UI/UX Designer",
    timeline: "8 Months",
    year: "2024",
    tools: ["Figma", "Design Tokens", "HubSpot CMS", "React Specs", "Auto-Layout"],
    headlineResult: "1:1 parity between Figma tokens and live HubSpot production modules",
    specCode: "SYS-CJ-01 // ATOMIC-TOKENS",
    tint: "#E4E9F5",
    problem:
      "While Creative Strategy defined the brand soul, engineering and marketing teams struggled with fragmented UI across HubSpot CRM templates and custom front-end frameworks. Shipping a single landing page meant manual QA loops and visual drift.",
    context:
      "The challenge wasn't aesthetic—it was operational. We needed a system that spoke Brand fluently while behaving like Code under strict CRM constraints.",
    steps: [
      {
        index: "01",
        phase: "Audit & Foundation",
        title: "The Atomic Shift",
        summary:
          "Replaced ad-hoc page mockups with a strict token foundation: semantic color ramps, fluid typographic scales, and an 8-pt spatial grid translated into reusable logic.",
        specNote: "TOKENS: 48 COLOR / 9 TYPE / 11 SPACE",
      },
      {
        index: "02",
        phase: "System Architecture",
        title: "Scalability via Variants & Constraints",
        summary:
          "Engineered multi-state Figma components with nested auto-layout, slot patterns, and strict property matrices so marketing could assemble pages without breaking brand rules.",
        specNote: "64 CORE COMPONENTS · 240+ VARIANTS",
      },
      {
        index: "03",
        phase: "The Tech Handshake",
        title: "HubSpot & Framework Alignment",
        summary:
          "Mapped every Figma property directly to HubSpot module fields and DOM constraints—achieving 1:1 visual and structural parity with production.",
        specNote: "FIGMA PROP ↔ HUBSPOT FIELD 1:1",
      },
      {
        index: "04",
        phase: "Source of Truth",
        title: "Governance, Do/Don't Specs & Handoff",
        summary:
          "Delivered an annotated specification library with usage rules, spacing redlines, and interaction states—enabling autonomous shipping across teams.",
        specNote: "DOC COVERAGE: 100% CORE MODULES",
      },
    ],
    decisions: [
      {
        id: "DEC-01",
        title: "Semantic tokens over raw hex values",
        rationale: "Marketing needed seasonal campaign themes without forking components.",
        outcome: "Swapping surface/accent tokens re-skins an entire module tree in minutes.",
      },
      {
        id: "DEC-02",
        title: "Constraint-first HubSpot mapping",
        rationale: "Design components that ignore CMS field limits break during engineering handoff.",
        outcome: "Zero rejected components in sprint QA; dev handoff friction dropped drastically.",
      },
      {
        id: "DEC-03",
        title: "Embedded redlines inside component docs",
        rationale: "External PDF guidelines go stale the week they are published.",
        outcome: "Living specs inside Figma kept designers and engineers on the exact same version.",
      },
    ],
    metrics: [
      { value: "1:1", label: "Figma ↔ HubSpot production parity", spec: "QA VERIFIED" },
      { value: "8pt", label: "Spatial & token grid standardization", spec: "ATOMIC BASE" },
      { value: "100%", label: "Core marketing modules documented", spec: "SINGLE SOURCE" },
    ],
    diagramType: "tokens",
  },
  {
    slug: "mnac-information-architecture",
    index: "02",
    featured: true,
    status: "specification",
    pillar: "Clarity",
    title: "Museu Nacional d'Art de Catalunya",
    subtitle: "Information architecture overhaul, tree-testing validation and interactive React/Tailwind prototype.",
    client: "MNAC · Academic / UOC Honors",
    role: "Information Architect & UI/UX Designer",
    timeline: "4 Months",
    year: "2024",
    tools: ["Information Architecture", "Tree Testing", "Card Sorting", "Figma", "React", "Tailwind CSS"],
    headlineResult: "Restructured taxonomy & interactive React/Tailwind prototype reducing visitor cognitive load",
    specCode: "IA-MNAC-02 // TAXONOMY-PROTO",
    tint: "#E2EEE7",
    problem:
      "Museum visitors, researchers, and educators faced a deep, institutional navigation tree built around internal departments rather than visitor intent—burying tickets, collections, and current exhibitions under ambiguous labels.",
    context:
      "Developed within the MSc in UX at Universitat Oberta de Catalunya (awarded Matrícula de Honor in Information Architecture), combining rigorous IA research with a coded high-fidelity prototype.",
    steps: [
      {
        index: "01",
        phase: "IA Audit & Heuristic Inventory",
        title: "Mapping Institutional Debt",
        summary:
          "Catalogued existing nodes, depth levels, and nomenclature mismatches across visitor journeys (Plan a Visit, Explore Collection, Research).",
        specNote: "DEPTH REDUCED: 5 LEVELS → 3 LEVELS",
      },
      {
        index: "02",
        phase: "Card Sorting & Tree Testing",
        title: "Mental-Model Alignment",
        summary:
          "Validated category groupings and label clarity with target users, replacing institutional jargon with task-oriented entry points.",
        specNote: "TASK-FIRST TAXONOMY",
      },
      {
        index: "03",
        phase: "Structural Wireframing",
        title: "Progressive Disclosure & Wayfinding",
        summary:
          "Designed a dual-track navigation system: rapid utility access (tickets, hours, map) paired with deep editorial discovery for artworks and authors.",
        specNote: "DUAL-TRACK WAYFINDING",
      },
      {
        index: "04",
        phase: "Coded Prototype",
        title: "Interactive React + Tailwind Validation",
        summary:
          "Built a functional front-end prototype in React and Tailwind CSS to test real responsive behavior, keyboard navigation, and search filtering.",
        specNote: "STACK: REACT + TAILWIND CSS",
      },
    ],
    decisions: [
      {
        id: "DEC-01",
        title: "Intent-based top-level navigation",
        rationale: "Visitors think in actions ('Visit', 'On View', 'Collection'), not museum departments.",
        outcome: "Eliminated competing top-level items and clarified primary entry paths.",
      },
      {
        id: "DEC-02",
        title: "Prototyping in code (React + Tailwind)",
        rationale: "Static artboards cannot truly test faceted collection filtering or responsive IA breakpoints.",
        outcome: "Usability sessions ran on a real browser interface with authentic interaction latency.",
      },
    ],
    metrics: [
      { value: "Honors", label: "Matrícula de Honor in Information Architecture (UOC)", spec: "ACADEMIC EXCELLENCE" },
      { value: "5→3", label: "Navigation depth levels simplified", spec: "TAXONOMY TREE" },
      { value: "React", label: "Coded interactive prototype for usability testing", spec: "LIVE DOM" },
    ],
    diagramType: "ia-tree",
  },
  {
    slug: "quadra-fintech-research",
    index: "03",
    featured: true,
    status: "specification",
    pillar: "Craft",
    title: "Quadra — Freelancer Fintech",
    subtitle: "End-to-end UX research, JTBD synthesis, and product design for independent professionals' cashflow & taxes.",
    client: "Quadra · MSc Thesis (TFM)",
    role: "Product & UX Researcher / UI Designer",
    timeline: "5 Months",
    year: "2024",
    tools: ["User Interviews", "JTBD", "Usability Testing", "Figma", "Design System"],
    headlineResult: "Research-backed financial cockpit turning irregular freelance income into predictable tax & cashflow clarity",
    specCode: "UXR-QDR-03 // FINTECH-TFM",
    tint: "#F4E6DF",
    problem:
      "Independent workers juggle volatile income, multi-currency invoices, and opaque quarterly tax obligations using disconnected spreadsheets and generic banking apps built for salaried employees.",
    context:
      "Master's Thesis (TFM) focused on grounding a zero-to-one fintech product in empirical user research, behavioral archetypes, and iterative usability testing.",
    steps: [
      {
        index: "01",
        phase: "Generative Research",
        title: "Interviews, Archetypes & JTBD",
        summary:
          "Conducted qualitative interviews and surveys with freelancers to map emotional triggers around invoicing, tax anxiety, and liquidity forecasting.",
        specNote: "QUAL + QUANT DISCOVERY",
      },
      {
        index: "02",
        phase: "Problem Framing & Flows",
        title: "Automated Tax & Cashflow Buckets",
        summary:
          "Translated insights into a core product loop: every incoming payment automatically previews net spendable income vs. reserved tax provisions.",
        specNote: "NET-FIRST BALANCE ARCHITECTURE",
      },
      {
        index: "03",
        phase: "Interface & System Craft",
        title: "High-Precision Financial UI",
        summary:
          "Designed a calm, tabular-numeral interface with scannable ledger cards, invoice states, and zero-jargon tax projections.",
        specNote: "TABULAR NUMS · AA CONTRAST",
      },
      {
        index: "04",
        phase: "Usability Testing",
        title: "Task Validation & Iteration",
        summary:
          "Evaluated critical flows (creating an invoice, checking quarterly tax exposure, reconciling expenses) and refined micro-copy where financial terms caused hesitation.",
        specNote: "ITERATIVE USABILITY LOOP",
      },
    ],
    decisions: [
      {
        id: "DEC-01",
        title: "'Real Spendable' as the primary hero number",
        rationale: "Raw bank balances mislead freelancers into overspending money owed to taxes.",
        outcome: "Users immediately understood their true liquidity without mental math.",
      },
      {
        id: "DEC-02",
        title: "Plain-language fiscal timeline",
        rationale: "Accounting terminology caused drop-off during early wireframe tests.",
        outcome: "Replaced jargon with progressive explanations and visual deadline markers.",
      },
    ],
    metrics: [
      { value: "TFM", label: "Master's Thesis in UX & Product Design (UOC)", spec: "RESEARCH-LED" },
      { value: "3 Flows", label: "Invoicing, Tax Reserve & Cashflow Forecast validated", spec: "END-TO-END" },
      { value: "AA+", label: "Accessible financial data density & tabular typography", spec: "UI CRAFT" },
    ],
    diagramType: "fintech-flow",
  },
  {
    slug: "cj-navigation-redesign",
    index: "04",
    featured: false,
    status: "shipped",
    pillar: "Clarity",
    title: "CJ Global Navigation Redesign",
    subtitle: "Information architecture restructuring and responsive mega-menu system for 3 new business pillars.",
    client: "CJ.com",
    role: "UI/UX Designer",
    timeline: "3 Months",
    year: "2023",
    tools: ["Information Architecture", "Figma", "Interactive Prototyping", "Design System"],
    headlineResult: "Categorical mega-menu & mobile drawer scaling across 3 new strategic service pillars",
    specCode: "IA-CJ-04 // MEGAMENU",
    tint: "#E4E9F5",
    problem:
      "As CJ expanded with 3 new strategic service pillars, the legacy linear navigation became cluttered and obsolete—forcing users to guess between corporate links and product workflows.",
    context:
      "We needed a navigation architecture that offered deep discoverability while preserving visual clarity across desktop and mobile viewports.",
    steps: [
      {
        index: "01",
        phase: "The IA Challenge",
        title: "Separating Corporate from User Intent",
        summary:
          "Audited the full sitemap and replaced the flat link list with a categorical hierarchy that separates primary user tasks from secondary corporate nodes.",
        specNote: "SITEMAP RESTRUCTURE",
      },
      {
        index: "02",
        phase: "Mega-Menu System",
        title: "Guided Visual Exploration",
        summary:
          "Engineered a modular grid mega-menu allowing users to scan services, partner ecosystems, and tools at a glance.",
        specNote: "12-COL MODULAR MEGA-MENU",
      },
      {
        index: "03",
        phase: "Interaction Logic",
        title: "Adaptive Sticky Behavior",
        summary:
          "Specified a sticky header that adapts its visual weight and contrast dynamically on scroll without obstructing content.",
        specNote: "SCROLL-AWARE STATES",
      },
      {
        index: "04",
        phase: "Mobile Parity",
        title: "Hierarchical Drawer Architecture",
        summary:
          "Translated the desktop mega-menu into a progressive mobile drawer that preserves identical hierarchy and scannability on small screens.",
        specNote: "DESKTOP ↔ MOBILE PARITY",
      },
    ],
    decisions: [
      {
        id: "DEC-01",
        title: "Two-tier utility + discovery bar",
        rationale: "Mixing login/support links with service discovery created visual noise.",
        outcome: "Clean separation reduced initial cognitive load on landing.",
      },
    ],
    metrics: [
      { value: "+3", label: "New business verticals integrated without clutter", spec: "SCALABLE IA" },
      { value: "100%", label: "Hierarchy parity between desktop mega-menu & mobile", spec: "RESPONSIVE" },
      { value: "3 Mo", label: "From IA audit to production specification", spec: "SHIPPED Q3 2023" },
    ],
    diagramType: "megamenu",
  },
  {
    slug: "torre-remote-hiring",
    index: "05",
    featured: false,
    status: "shipped",
    pillar: "Craft",
    title: "Remote Hiring by Torre",
    subtitle: "High-contrast visual system and conversion-focused web experience for a LatAm recruitment bootcamp.",
    client: "Torre",
    role: "UI / Visual Designer",
    timeline: "3 Months",
    year: "2022",
    tools: ["Figma", "Visual Identity", "Conversion UI", "Landing System"],
    headlineResult: "Conversion-focused landing architecture & high-contrast identity cutting through webinar fatigue",
    specCode: "UI-TOR-05 // CONVERSION",
    tint: "#F4E6DF",
    problem:
      "Post-pandemic, generic blue HR webinars flooded LinkedIn. Torre needed to position its Remote Hiring Bootcamp as an energetic, must-attend learning experience for LatAm talent leaders.",
    context:
      "Partnered with Product and Marketing Managers to craft a distinctive visual system and a single-goal registration experience.",
    steps: [
      {
        index: "01",
        phase: "Visual Strategy",
        title: "Breaking the Corporate Blue Cliché",
        summary:
          "Paired electric purple (#6124DC) with high-visibility yellow (#FFDD04) and Plus Jakarta Sans—projecting energy while meeting strict contrast ratios.",
        specNote: "CONTRAST RATIO: AAA HIGH-VIS",
      },
      {
        index: "02",
        phase: "Conversion Architecture",
        title: "Sticky Registration & Social Proof Loop",
        summary:
          "Kept the registration CTA persistent in the viewport and sequenced speaker credentials and industry insights to resolve objections on scroll.",
        specNote: "FRICTIONLESS SIGNUP FLOW",
      },
    ],
    decisions: [
      {
        id: "DEC-01",
        title: "Persistent viewport registration",
        rationale: "Users decided to register mid-scroll after reading speaker topics.",
        outcome: "Zero scroll-back required to complete conversion.",
      },
    ],
    metrics: [
      { value: "LatAm", label: "Regional rollout for recruitment professionals", spec: "CAMPAIGN SCOPE" },
      { value: "Sticky", label: "Zero-scroll-back registration architecture", spec: "CONVERSION UI" },
      { value: "3 Mo", label: "End-to-end visual identity & web launch", spec: "SHIPPED" },
    ],
    diagramType: "event-brand",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
