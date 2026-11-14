---
version: 1
slug: "src-screens-home-index-tsx"
primary_target: "src/screens/home/index.tsx"
related_targets: ["src/app/page.tsx", "src/components/hero-scene/index.tsx", "src/components/cost-slab/index.tsx", "src/components/outcome-ledger/index.tsx", "src/components/career-ruler/index.tsx", "src/components/signature-finale/index.tsx", "src/app/opengraph-image.tsx"]
---

# Home surface brief (v3: light in production, as shipped)

**Scope:** `/` (src/screens/home).

**Mode:** Persuade.

**Audience:**
- Recruiters and tech leads, who give the page about a 10-second scan.
- Freelance clients.

**Action:** the visitor leaves convinced of his seniority by outcomes he shipped. The résumé and contact are one step away.

**History:**
- v2 (2026-11-12): the "Cost slab" direction.
- v3 (2026-11-13/14): the owner brought light back as a real scene: a WebGL beam, a 3D badge and a closing scene. The photo was replaced by the hand-drawn caricature.

## Direction contract

**THESIS:** light means software running in production right now. A beam falls onto the slab, and the slab is the real measurement: the featured result (`isFeatured`), the monthly cloud bill of the Linda Lifetech platform, still in production (owner's role Aug 2025 – Aug 2026, AWS → GCP, about USD 2,100 → about USD 1,300, −38%). The imagery is data and the owner's own hand (caricature, signature). Nothing is invented and no number is hard-coded except the measurements the owner confirmed.

**OWN-WORLD:**
- The ground is midnight, and the cobalt → neon → neon-soft light (`LIGHT_GRADIENT`) is the only emitter.
- The hero beam is `LaserFlow`. It lands on the slab's edge at the fold, and the slab glows where it lands.
- After the beam's intro, a lanyard badge drops in: a 3D card whose faces are generated at `/badge/front|back` from the caricature and signature. It is static on phones, on weak GPUs and under reduced motion.
- Geist is the display face. Geist Mono is only for measurements and labels.
- The header uses CSS frost glass (`header-glass` + `header-rim`) that catches the light on scroll.
- There is no photo anywhere.

**STORY:**
1. **Hero:** name and role ("Tech Lead · Software Engineer & Architect"), the H1 "{years} years of software running in production. Now I lead the team that ships it.", the current role line, availability ("Open to full-time, contract and freelance · Remote from Brazil (UTC−3) or relocation"), and the CTAs Download resume and Start a project. The beam and badge sit on the right.
2. **Cost slab:** −38%, with Before/Now bars and a caption under the figure.
3. **Outcome ledger:** past outcomes, each with a metric or marked as scope.
4. **Career ruler:** 2020 → now, with FloatingLines behind the section.
5. **Stack:** 4 groups × 6 tools, in 2 columns on mobile.
6. **Contact:** a first-person line, the email with a copy button, and links.
7. **Signature finale:** a sticky, scroll-scrubbed scene with Lightfall and GhostFibers that ends on the signature, `HOME_HERO.closingLine` ("Send the role or the project.") and the CTAs Start a project and Download resume.

**FIRST VIEWPORT:**
- **Desktop 1440×900:** the text block takes the left ~58%, the beam and badge the right. Only the lit edge of the slab shows at the fold.
- **Mobile 390:** name and role, H1, status and CTAs. The beam is a thin strip at the right edge (`-right-5`, 70% opacity) that never crosses the text. No 3D badge. The slab starts just below.

**FORM:** a light scene over a data slab. Career years are computed from the first role's start date, never typed.

## Motion grammar

- **Hero sequence:**
  1. The beam intro: a 1.25 s drop and the landing flash, 1.6 s in total (`LIGHT_INTRO_MS`).
  2. Then, and only then, the badge appears: the 3D one drops in on its first painted frame, or the static one fades in. Never both.
  3. Then the slab bars retract (`slab-retract`, 900 ms, `cubic-bezier(0.16,1,0.3,1)`) and the labels fade in.
- **Below the fold:** view-driven (`animation-timeline: view()`): ledger filaments and ruler spans. The finale is scrubbed by scroll position. Keyboard focus inside it jumps it to its end state (`--end: 1`).
- **Ambient:** the beam and the WebGL lines keep moving while visible.
- **Reduced motion or the header pause control** (`html[data-motion="paused"]`, `useStillMotion`): everything shows its final, lit state. No intro wait. The static badge replaces the 3D one.
- **Gating:** the finale WebGL and the 3D badge render only on desktop (`min-width: 64rem`) when `canRenderHeavyWebgl` passes. Three.js always loads through `next/dynamic` with `ssr: false`.
- **OG image:** a still of this hero (grid, beam, surface, hanging badge, "Software running in production."), with no numbers.
