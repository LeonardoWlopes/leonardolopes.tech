---
name: Leonardo Lopes
description: Neon on midnight. A tech lead's portfolio lit by one source of cobalt light at a time.
colors:
  midnight: "#030407"
  cobalt: "#1558c9"
  neon: "#2f6bff"
  neon-soft: "#7aa6ff"
  background: "oklch(0.107 0.011 266.5)"
  foreground: "oklch(0.948 0.016 262.8)"
  card: "oklch(0.165 0.022 267.2)"
  primary: "oklch(0.581 0.229 263.9)"
  primary-foreground: "oklch(0.985 0 0)"
  secondary: "oklch(0.211 0.034 265.6)"
  muted-foreground: "oklch(0.678 0.038 264.3)"
  border: "oklch(1 0 0 / 12%)"
  input: "oklch(1 0 0 / 16%)"
  destructive: "oklch(0.704 0.191 22.216)"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.6vw + 0.5rem, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 2.4vw + 1rem, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 0.8vw + 1.1rem, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
  figure:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(2rem, 2.4vw + 1rem, 3.75rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontFeature: "\"tnum\", \"zero\""
  meta:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    fontFeature: "\"tnum\", \"zero\""
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
  2xl: "1.125rem"
  3xl: "1.375rem"
  slab: "2rem"
  full: "9999px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 6rem)"
  section-y: "clamp(4rem, 9vw, 7rem)"
  stack-sm: "0.75rem"
  stack-md: "1rem"
  stack-lg: "1.5rem"
  stack-xl: "3rem"
  container-limit: "64rem"
components:
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.full}"
    height: "3rem"
    padding: "0 1.75rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.full}"
    height: "3rem"
    padding: "0 1.75rem"
  button-glow:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.full}"
    height: "3rem"
    padding: "0 1.75rem"
  button-glass:
    backgroundColor: "rgb(255 255 255 / 0.06)"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    height: "2.25rem"
    padding: "0 0.625rem"
  tech-tile:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "0.75rem"
  contact-panel:
    backgroundColor: "rgb(255 255 255 / 0.06)"
    textColor: "{colors.foreground}"
    rounded: "{rounded.3xl}"
    padding: "1.5rem"
  input-field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    height: "2.75rem"
  tag-pill:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.full}"
    padding: "0.25rem 0.75rem"
---

# Design System: Leonardo Lopes

## Overview

**Creative North Star: "Light Means Production"**

The site is a midnight room with one light source in it at a time. In the home hero a laser beam (LaserFlow, WebGL) falls onto the cost slab, the bar that shows the featured result (`isFeatured`): Linda Lifetech's cloud bill after the migration, a platform still running in production. That lit surface is the thesis: light marks what is running in production now, and past work stays unlit. As you scroll, the slab's light moves into the glass header's rim and a "· in production" chip docks there. Section changes get faint drifting cobalt lines (FloatingLines). The home closes with a signature finale: the hand-drawn signature rising out of a light field (Lightfall + GhostFibers). The world is technical and calm. Measurements, ledgers, rulers and blueprint grids carry the proof. Neon is used for emphasis, never as decoration, so it reads as a professional tech brand and never as gaming or crypto.

It is always dark (`html.dark`), with no light theme. Density is editorial: large type over generous section spacing, then compact ledger rows and tiles where the facts live. There are no photos. Identity comes from two single-colour vectors drawn by the owner, the caricature portrait and the handwritten signature.

**Key Characteristics:**
- One light source or scene leads each viewport. Everything else is ink on midnight.
- Cobalt → neon → neon-soft is the only light gradient, shared by CSS and WebGL (`src/utils/palette.ts` mirrors `@theme`; change both together).
- Glass sits only on top of light: the header, the contact panel, and secondary CTAs over the hero.
- Numbers are set in Geist Mono with tabular, slashed-zero figures. Prose is set in Geist.
- Heavy WebGL (3D badge, finale) needs a desktop viewport (min-width 64rem) and a capable device (`canRenderHeavyWebgl`: WebGL2, 4+ cores, 4 GB+ memory, no data saver). Everything has a static or CSS fallback.

## Colors

The palette is a single cobalt hue over blue-tinted near-black. Red appears only in the 404 saber and in error text.

### Primary
- **Cobalt** (`cobalt`): the deep body of the light. It is the base of radial pools (page glow, blueprint pool, finale glow), the outer halo of neon shadows, and the scrollbar thumb. It is never used for text.
- **Neon** (`neon`): the emitter. Used for the beam, the slab's lit segment, timeline fill and lit dots, `shadow-neon`, and the active indicator dot.
- **Neon Soft** (`neon-soft`): the readable end of the light. Used for small accent text (role line, "in production" status, inline links, stack group headings), focus outlines, the caret, and the light at the base of the portrait.
- **Primary** (`primary`): the shadcn semantic brand colour, used for the glow button fill and the focus ring.

### Neutral
- **Midnight** (`midnight`): the raw base. Used for text on the light button and for the legibility halos behind ink that sits over light.
- **Background** (`background`): the page surface. Used at 55–85% opacity for panels over light (`bg-background/70`, `/85` on the header).
- **Card / Secondary** (`card`, `secondary`): raised tonal steps, used sparingly. Most "cards" are translucent background or glass.
- **Foreground** (`foreground`): headings and primary text. Body copy often uses `foreground/85`.
- **Muted Foreground** (`muted-foreground`): captions, meta, inactive nav, and footer links.
- **Border / Input** (`border`, `input`): 12% and 16% white hairlines. Section dividers use `border/60`.

### Named Rules
**The Light-Is-Live Rule.** Saturated light marks something running in production now: the cost slab, the current role's lit timeline dot, the "in production" chip. Do not light past work or decoration.

**The No-Cobalt-Text Rule.** Small text is never pure cobalt or neon, because the contrast is too low. Use `neon-soft`, `foreground`, or `muted-foreground`.

## Typography

**Display / Body Font:** Geist (via `next/font`, falling back to ui-sans-serif and system-ui)
**Figure / Meta Font:** Geist Mono (`.font-mono` always applies `tnum` and `zero`)

**Character:** Geist is a tight, engineered sans with negative tracking at size. Mono is used only for figures, dates, and meta.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 4.6vw+0.5rem, 6rem)`, 0.98, -0.04em): one per page, the page h1. Uses `text-balance` and is capped at 14–20ch. The key word may take `text-neon-soft`.
- **Headline** (500, `clamp(2rem, 2.4vw+1rem, 3.5rem)`, 1.05, -0.03em, max 24ch): section h2s. This is the shared `SECTION_TITLE` string on every screen.
- **Title** (500, `clamp(1.375rem, 0.8vw+1.1rem, 1.875rem)` to `clamp(1.75rem, 1.6vw+1rem, 2.75rem)`, 1–1.25, -0.02 to -0.03em): role and company names in the timeline, and statements on Technologies and About.
- **Body** (400, 1rem/1.0625rem, relaxed 1.625): prose capped at 44–68ch with `text-pretty`. Supporting text is `text-sm` or `text-base` in muted-foreground.
- **Label** (500, 0.875rem): nav, buttons, and status lines. The mobile dock uses 0.75rem.
- **Figure** (Mono 500, `clamp(2rem, 2.4vw+1rem, 3.75rem)`, leading 1): ledger and timeline numbers. The cost slab figure is the one oversize step (`clamp(4rem, 8vw, 8.5rem)`, 0.8, -0.04em). The 404 numeral uses `clamp(6rem, 18vw, 14rem)`.
- **Meta** (Mono 400, 0.75rem): dates, durations, and ruler ticks.

### Named Rules
**The Figures-In-Mono Rule.** Every measured number (cost, percent, years, dates) is set in Geist Mono with tabular figures. Words are never set in mono, except for the contact panel's title bar.

## Layout

- **Gutter:** every full-bleed section uses `px-[clamp(1.25rem,5vw,6rem)]`. The header's inset, the footer, and the footer filament reuse the same clamp. Full-bleed screens opt out of the layout's `px-4` with `.bleed`.
- **Section rhythm:** `py-[clamp(4rem,9vw,7rem)]`. Timeline entries use `py-[clamp(3rem,7vw,5.5rem)]`. The hero fills `100svh` minus chrome and ends where the beam lands, so only the slab's lit edge shows below the fold.
- **Split sections:** on `lg` (64rem) and up, a sticky heading column (`lg:sticky lg:top-32`) sits next to the content at 5fr/9fr (home) or 4fr/10fr (timeline).
- **Internal gaps:** `gap-4`, `gap-6`, and `gap-12`/`gap-16` between column groups. Ledger rows are `py-3` → `sm:py-5`.
- **Breakpoints:** Tailwind defaults. `sm` 40rem moves the header from a bottom dock to a top bar. `lg` 64rem (`DESKTOP_QUERY`) is where WebGL scenes mount.
- **Chrome:** the header is fixed. It docks at the bottom on phones (`bottom-6`, inset 0.5rem) and floats at `top-6` on `sm` and up. `scroll-padding` keeps anchors clear of it (7rem).

## Elevation & Depth

Depth comes from light, not lift. There is no grey drop shadow. Surfaces separate by translucency over a glow field, by hairline borders, and by neon halos. The only dark shadows are midnight legibility halos and the header's floor shadow.

### Shadow Vocabulary
- **Neon** (`shadow-neon`): glow button at rest, static badge, lit timeline dot, tech tile hover.
- **Neon Strong** (`shadow-neon-strong`): glow button hover only.
- **Neon Dot** (`shadow-neon-dot`): small live indicators (lit timeline dot, panel traffic light).
- **Glass Inset** (`shadow-glass-inset`): the lit top edge of glass, and the active nav pill.

### Named Rules
**The Glass-On-Light Rule.** Glass (`glass-control`, `header-glass`) is used only where there is light behind it to refract. Over plain midnight, use `bg-background/70` and a hairline instead.

## Shapes

Shapes split into two families. Interactive and floating elements are capsules (`rounded-full`): the header, nav pill, xl CTAs, tags, and dots. Content containers have large soft corners: tiles at `xl`, the contact panel at `3xl`, the career panel at `3xl`, and the cost slab at 2rem. Rules and rails are 1–2px lines. The slab's unlit part is a dashed outline (`border-dashed border-white/25`). Default shadcn buttons keep the `md` radius.

## Components

### Buttons
- **Shape:** CTAs use `xl`, a 3rem capsule with 1.75rem padding and base text. On phones they shrink to `px-4 text-sm` through the shared `CTA` string. They press with `active:scale-[0.97]`.
- **Light** (`variant="light"`): white fill with midnight text. This is the primary CTA on every screen.
- **Line** (`variant="line"`): 20% white outline that brightens to 40% and `white/5` on hover. Over the hero it always pairs with `glass-control`.
- **Glow** (`variant="glow"`): primary fill with `shadow-neon` that becomes neon-strong on hover. It is the light source of the contact screen (WhatsApp submit).
- **Glass** (`variant="glass"`): available and shown in /styleguide. Use it only over light.
- **Focus:** a 2px neon-soft outline with a 2px offset, plus the ring at 50%.

### Navigation
The header is one glass capsule (`glass-control header-glass`, `bg-background/85`). Its lower edge holds the `header-rim` line, which lights when the slab scrolls out. A sliding `nav-pill` (white/10 with glass inset, 320ms) marks the active link. Desktop shows the label (sm, 500) and, on `md` and up, the live chip, the motion toggle, and social icons. The mobile dock shows an icon over a short label (Home, About, Work, Stack, Contact) at 0.75rem, with equal-width items (`flex-1`, `justify-evenly`).

### Ledger / Ruler / Timeline (the proof surfaces)
- **Outcome ledger:** hairline-ruled rows. Each holds a Mono figure, a caption, a narrative (max 52ch), and the client. Hovering a row dims its siblings to 75%.
- **Career ruler:** `ruler-ticks` hairlines and Mono year labels. Spans are drawn left to right on scroll (`ruler-span`).
- **Experience timeline:** a `neon-soft/20` rail. A scroll-driven `timeline-fill` lights it toward mid-viewport, and each dot lights as it passes (`timeline-dot`). The rail is static under reduced motion.
- **Status marker:** a 0.375rem neon-soft dot followed by "Now · in production" in neon-soft 500 text. It marks only the current role (Callink) and its outcome; the header chip reads "{current client} · in production".

### Cost Slab (signature)
The hero's lit surface. The neon→white `slab-lit` segment retracts to the real ratio (900ms) and sits over a dashed unlit remainder. A light pool spills beneath it, and labels fade in afterward. The slab names the `--lit` view timeline that dims its emission and lights the header rim and chip. While it is on the page, it suppresses `page-glow`.

### Tech Tile and Tags
Tiles: `rounded-xl`, `border/70`, `bg-background/70`, a 2.5rem icon well. On hover the border turns neon-soft/50, a faint neon tint appears with `shadow-neon`, and an arrow fades in (200ms ease-out). Tags: capsules with `neon-soft/20` borders, `bg-background/60`, and xs text.

### Inputs
shadcn Input and Textarea at 2.75rem height on `bg-background/70` with base text. Focus turns the border neon-soft and adds a `neon-soft/40` ring. Errors use `text-destructive` sm text. They sit inside the contact panel, a glass card at `rounded-3xl` with a title bar (two white/15 dots and one neon dot).

### Light Scenes (vendored WebGL in `components/ui/`)
- **LaserFlow:** the hero beam, desktop only, with an intro unless motion is reduced. Phones get the CSS `css-beam`.
- **Lanyard:** the 3D badge (textures from `/badge/front` and `/badge/back`, generated by `src/utils/badge-texture.tsx`). It drops in (`badge-stage`, 1100ms overshoot) only after the beam lands, and only on desktop with a capable device. Otherwise a static badge image drops in (`badge-drop`, 700ms). A click flips it, it has no drag, and the breeze stops when motion is still.
- **FloatingLines:** cobalt lines behind section transitions (home career, Experiences and Technologies heroes masked to the right, About).
- **Lightfall + GhostFibers:** the home finale, on desktop with a capable device. It is a sticky scroll scene where sea, signature, and closing line resolve in turn.

### Portrait
The caricature is rendered as a mask (`portrait-ink`): foreground ink fading to neon-soft at the base, as if lit from below. On About it breathes slowly (`portrait-drift`, 9s alternate, ±0.6deg). It does not react to the cursor.

### 404 Duel
A blue and a red saber cross in an X, as a nod to Star Wars. They ignite (blue first), hum, and clash every 3.2s with a flare and sparks. This is the only place red is used as light.

## Do's and Don'ts

### Do:
- **Do** let exactly one light source or scene lead each viewport: the beam and slab, the timeline fill, the glow button, the finale, or the sabers.
- **Do** take every colour, shadow, and radius from tokens. Use rem or the Tailwind multiplier in arbitrary values (`rounded-[2rem]`, `max-w-130`).
- **Do** put reusable effects in `@layer components` in `globals.css`, and keep `src/utils/palette.ts` in sync with `@theme` for WebGL props.
- **Do** gate every ambient or looping animation on both `prefers-reduced-motion` and the header pause. In CSS, wrap it in `@media (prefers-reduced-motion: no-preference) { html:not([data-motion="paused"]) … }`. In JS, use `useStillMotion()`.
- **Do** use the house easing `cubic-bezier(0.16, 1, 0.3, 1)` for entrances and UI transitions (slab, badge drop, nav pill, ledger). Durations are 180–320ms for UI and 700–1200ms for one-shot scene entrances. Scroll-linked effects use `animation-timeline: view()` or `--lit`.
- **Do** ship a static or CSS fallback for every WebGL scene, and mount heavy scenes only after `canRenderHeavyWebgl` passes.
- **Do** use the owner's vectors (portrait, signature) as the only imagery. Generate icons and OG from them in code. The OG image is a still of the hero (grid, beam, surface, badge) with no numbers.

### Don't:
- **Don't** use photos, stock imagery, invented testimonials, or client logos beyond the owner's employers.
- **Don't** set small text in pure cobalt or neon.
- **Don't** put glass over plain midnight, or stack two glowing elements competing in one viewport.
- **Don't** use grey drop shadows or lift-on-hover cards. Depth comes from light.
- **Don't** hard-code px in arbitrary values, or write CSS outside Tailwind and `globals.css` `@layer components`.
- **Don't** make the portrait follow the cursor, or add pointer-reactive motion to identity art.
- **Don't** add a light theme.
