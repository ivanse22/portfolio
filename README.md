# Ivan Sierra — Portfolio

UI/UX & Experience Designer portfolio — Design Systems, Information Architecture, and Product UI.

## Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + custom architectural design tokens (`app/globals.css`)
- **Transitions & Motion:** React 19 `<ViewTransition>` (shared element morphing & directional route transitions) + Motion (`motion/react`)
- **Typography:** Self-hosted Geist Sans, Geist Mono, and Newsreader Variable Italic

## Development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production static build
```

## Routes
- `/` — Home (Hero + Selected Work Plates + Methodology)
- `/work` — Complete Case Study Index (5 projects)
- `/work/[slug]` — Detailed Case Studies (CJ Design System, MNAC IA, Quadra Fintech, CJ Navigation, Torre)
- `/about` — Profile, Philosophy, 13+ Year Trajectory & Capabilities Matrix
- `/contact` — Direct Channels & Recruiter Brief
- `/cv` — Printable / Save-as-PDF Curriculum Vitae
