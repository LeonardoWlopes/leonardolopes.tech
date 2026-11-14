---
version: 1
slug: "src-screens-experiences-index-tsx"
primary_target: "src/screens/experiences/index.tsx"
related_targets: ["src/app/experiences/page.tsx", "src/components/experiences-timeline/index.tsx", "src/utils/mock.ts", "src/components/section-lines/index.tsx"]
---

# Experiences surface brief

Scope: `/experiences` (src/screens/experiences). Mode: Read. Audience: recruiters and tech leads verifying seniority, scope, and dates. Action: read the roles, most recent first, with their measured outcomes, then download the resume or start a project.

## Direction contract

THESIS: A career is a rail that lights up as you read it. Only the current role is "in production" and lit. Past roles show their outcomes as plain proof.

OWN-WORLD: Midnight ground with a blueprint grid under the timeline. Each entry is a split row (lg 4fr/10fr): a sticky company column (logo `rounded-xl ring-neon-soft/30`, Title name, role in neon-soft, Mono dates), then roles with stack tags (`neon-soft/20` capsules) and Mono outcome figures. Rail: a `neon-soft/20` hairline with a scroll-driven `timeline-fill` and `timeline-dot`s. `neon-rule` marks the current role. The status marker "Now · in production" is used only for the current role. Content comes from `EXPERIENCES` and `OUTCOMES` in `src/utils/mock.ts`. Dates are computed from `getCachedNow()`.

STORY: Hero (H1 "From freelance mobile apps to tech lead", 60ch summary of employers, Mono line "In production since June 2020", resume (light), LinkedIn (line + glass), "Technologies I use" text link) → timeline, most recent first → close (Headline "Hiring, or have a product to build?", "Start a project" + "More about me").

FIRST VIEWPORT: Desktop 1440: the hero H1 (max 20ch), summary, Mono line, and CTA row. FloatingLines drifts in the right half (masked from 40% to 70%). The top of the first timeline entry sits near the fold. Mobile 390: H1, summary, Mono line, and wrapped CTAs. The timeline starts below the fold.

## Motion grammar

Scroll-driven, with no autoplay. The rail fills toward mid-viewport (`animation-timeline: view(block 50% 50%)`, `fill-down`) and each dot lights to neon with `shadow-neon-dot` as it passes. This only runs where `animation-timeline` is supported and motion is allowed. Otherwise the fill is hidden and the static rail and dots remain. FloatingLines in the hero is desktop only, mounts when on screen, and holds still under reduced motion or the header pause (`useStillMotion`). Micro: CTA press, link arrow nudge.
