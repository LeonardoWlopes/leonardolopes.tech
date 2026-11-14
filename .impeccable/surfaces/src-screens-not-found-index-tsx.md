---
version: 1
slug: "src-screens-not-found-index-tsx"
primary_target: "src/screens/not-found/index.tsx"
related_targets: ["src/app/not-found.tsx", "src/components/not-found-saber/index.tsx", "src/app/globals.css"]
---

# Not found surface brief

Scope: any unknown route (`src/app/not-found.tsx` → src/screens/not-found). Mode: Experience-lite. Audience: visitors who followed an old or mistyped link. Action: smile at the nod, then go home, to Experience, or to Contact.

## Direction contract

THESIS: "These are not the droids you are looking for." A small Star Wars nod in the house light: a blue and a red saber crossed in a duel. Nothing is running in production at this address, so the only light is the duel.

OWN-WORLD: A full-height blueprint ground (`min-h-svh`). The 404 numeral is at display-plus scale (`clamp(6rem,18vw,14rem)`, 600, −0.06em) above the Headline "Page not found" with neon-soft on "not found". The sabers are pure CSS (`.saber*` in globals.css): white blade cores with `--saber-glow`/`--saber-soft` halos (blue is neon, red is 255 40 64), metallic hilts, and a flare plus six sparks at the crossing. This is the only place red is used as light.

STORY: 404 + headline → one-line copy (44ch) → "Ways back" nav: "Back to home page" (light, xl, full width on phones), then Experience and Contact text links.

FIRST VIEWPORT: Desktop 1440: copy and links on the left (max 46rem), the saber duel absolutely positioned behind the copy (right 17% on lg, 6% on sm), vertically centred. Mobile 390: 404, headline, copy, and links. The duel sits below the links at 0.48 zoom, centred.

## Motion grammar

The only looping scene on the site, and it is fully gated. It plays only inside `@media (prefers-reduced-motion: no-preference)` with `html:not([data-motion="paused"])`. Each blade ignites once (0.5s, blue at 0.2s, red at 0.65s), the halos hum (0.16s alternate), and every 3.2s (from 1.4s) the blades swing in, grind, and pull back with a flare and sparks. Under reduced motion or the header pause, both sabers stay lit, crossed, and still. Micro: CTA press, link arrow nudge.
