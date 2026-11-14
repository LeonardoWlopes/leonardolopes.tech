---
version: 1
slug: "src-screens-about-index-tsx"
primary_target: "src/screens/about/index.tsx"
related_targets: ["src/app/about/page.tsx", "src/utils/date.ts", "src/utils/role.ts", "public/brand/portrait.svg", "src/components/section-lines/index.tsx"]
---

# About surface brief

Scope: `/about` (src/screens/about). Mode: Read. Audience: recruiters and tech leads checking who the person is after the home scan, and freelance clients judging fit. Action: get to know Leonardo as a person and a lead, then go to Experience or Contact.

## Direction contract

THESIS: The owner's hand-drawn caricature is the page's light source: white ink lit from below in neon-soft. The prose is personal and plain, and every claim (age, career time) is computed from data, never typed.

OWN-WORLD: Midnight ground. The caricature is rendered as a CSS mask (`portrait-ink`) inside a 2rem-radius blueprint card (`border-neon-soft/20`, `bg-card/40`). A neon radial pool sits under the card and a `filament-glow` rule on its lower edge. Sticky Headline column on the left, prose at 62ch on the right (lg 5fr/9fr). One FloatingLines field behind "What I do", masked to the left fifth. The signature (SVG) closes the page.

STORY: Hero (H1 "A little about Leonardo Lopes", summary, CTAs "See my experience" (light) and "Start a project" (line + glass), caricature card) → Who I am (computed age and career time) → What I do (SectionLines, core stack row with a neon underline, three paragraphs, text link) → And outside of code? → My future (closing line "Have something to build? Let's talk.", signature, "Start a project" + resume and experience text links). The footer signature is hidden here (`about-signature`).

FIRST VIEWPORT: Desktop 1440: the hero fills `100svh − 8rem`, 7fr/5fr. H1, summary, and both CTAs on the left, caricature card (max 26rem, 4:5) on the right, vertically centred. Mobile 390: H1, summary, and the 2-column CTA grid. The caricature card stacks below and starts at or just past the fold.

## Motion grammar

Ambient only. The caricature breathes slowly (`portrait-drift`, 9s ease-in-out infinite alternate, translateY 0.25rem → −0.5rem and ±0.6deg). FloatingLines drifts behind "What I do", and only mounts on desktop when on screen. The caricature does not react to the cursor or pointer: the owner rejected that as too much. Do not reintroduce it. Micro: CTA press `scale(0.97)`, arrow nudge on text links. Reduced motion or the header pause (`html[data-motion="paused"]`, `useStillMotion`) holds the portrait and the lines still.
