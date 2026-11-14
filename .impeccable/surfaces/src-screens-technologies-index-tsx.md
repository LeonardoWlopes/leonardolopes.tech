---
version: 1
slug: "src-screens-technologies-index-tsx"
primary_target: "src/screens/technologies/index.tsx"
related_targets: ["src/app/technologies/page.tsx", "src/components/tech-card/index.tsx", "src/utils/tech.ts", "src/utils/mock.ts"]
---

# Technologies surface brief

Scope: `/technologies` (src/screens/technologies). Mode: Read/Operate. Audience: recruiters and tech leads matching stack fit. Action: scan the catalog by category, jump to a category, tell professional experience from personal or academic use, and open a tool's official site.

## Direction contract

THESIS: A layered catalog, from the language to the cloud, that is honest about the depth of experience. Every count is derived from the data (`groupTechsByCategory()`, `items.length`). No hard-coded totals.

OWN-WORLD: Blueprint grid hero with a dimmed FloatingLines field (60%, masked to the right). A legend (`dl`) separates "Professional experience" (a neon-soft dot with `shadow-neon-dot`) from "Personal projects and academic studies" (a muted ring). Tiles labelled "Personal / academic" carry the latter. Category chips are capsules (`border-border`, `bg-background/60`, Mono count) that scroll horizontally on phones and wrap on `sm` and up. Each category is a hairline-topped split row (lg 1fr/3fr): sticky Title name plus a Mono neon-soft count, and a tile grid (`auto-fill minmax(13rem,1fr)`, 1 → 2 columns on phones). Tiles are `rounded-xl` with an icon well, hovering to a neon-soft border and `shadow-neon`, with an external-link arrow.

STORY: Hero (H1 "Technologies I use, from the language to the cloud", 52ch intro, legend, category chip nav) → one section per non-empty category, anchored (`scroll-mt-28`) → close (Headline "Need these tools on your project?", "Start a project" + "See my experience").

FIRST VIEWPORT: Desktop 1440: H1 (max 52rem), intro, legend in a row, and all category chips wrapped. The first category starts near the fold. Mobile 390: H1, intro, the legend stacked, and a single scrollable chip row (edge-to-edge gutter bleed, scrollbar hidden).

## Motion grammar

Quiet. The only ambient motion is FloatingLines in the hero (desktop only, on screen, still under reduced motion or the pause). Tiles transition border, background, and shadow over 200ms ease-out, and the arrow fades in on hover or focus. Chips transition colour. Anchor jumps glide only when `prefers-reduced-motion: no-preference` (`scroll-behavior: smooth` on html).
