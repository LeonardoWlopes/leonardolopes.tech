# CLAUDE.md

Guidance for Claude Code (claude.ai/code) and for anyone working in this repository. `README.md` covers setup and scripts. `DESIGN.md` covers the design system and `PRODUCT.md` the audience and voice. This file holds the engineering rules and the patterns settled during the review rounds of the 2026 rebuild.

## This is NOT the Next.js you know

This project runs Next.js 16, which has breaking changes: APIs, conventions, and file structure may differ from your training data. Before writing code that touches a Next.js API, read the relevant guide in `node_modules/next/dist/docs/` (version-matched to the installed package) and heed deprecation notices. Automatic `AGENTS.md` generation is disabled in `next.config.ts` (`agentRules: false`); this section replaces it.

## Purpose

Personal website of Leonardo Lopes (`leonardolopes.tech`): tech lead, software engineer and architect, open to full-time, contract and freelance work. Pages:
- home, about, experiences, technologies and contact;
- a 404;
- `/styleguide` (internal, noindex).

Deployed on Vercel from `master`. All content is in **English** and lives inline in the code (no i18n).

## Node and package manager

- **Node** is pinned in `.nvmrc` (`24.19.0`) and in `engines` in `package.json`. Use nvm: `nvm install` / `nvm use`.
- **pnpm** is the package manager (`packageManager` in `package.json`). Do not use `npm`, `yarn`, or `bun`.

## Commands

```bash
pnpm dev          # next dev (Turbopack), localhost:3000
pnpm build        # next build (Turbopack); fails on type errors; route table shows ○ static / ƒ dynamic
pnpm start        # serve the build (use -p 3100 to verify next to dev)
pnpm lint         # biome check --fix --unsafe (MODIFIES files)
pnpm check-types  # next typegen + tsc --noEmit
pnpm test:run     # vitest run (logic only; no render tests), with coverage
pnpm test:cov     # vitest with coverage (90% minimum)
pnpm test:watch   # vitest in watch mode (also test:ui)
```

## Stack

- **Framework:** **Next.js 16** with the App Router, Turbopack, **Cache Components** and Partial Prefetching, plus **React 19** with the **React Compiler** (`reactCompiler: true`). Language is **TypeScript 6**.
- **Styles:** **Tailwind CSS v4** through the `@tailwindcss/turbopack` loader. There is no PostCSS and no `tailwind.config`; tokens live in `src/app/globals.css`.
- **UI:** **shadcn/ui** on top of `@base-ui/react` (`components.json`: style `base-vega`). Icons come from **lucide-react**; brand logos are in `components/brand-icons` and `src/assets/icons`.
- **3D and WebGL:** **three** / **@react-three/fiber** for the scenes, vendored from React Bits into `components/ui/`.
- **Generated images:** `next/og` (`ImageResponse`).
- **Libraries:** **date-fns**; **zod** + `@t3-oss/env-nextjs` for env.
- **Tooling:** **Biome** (`biome.jsonc`), **Vitest** (jsdom), **lefthook + commitlint**, **semantic-release** (GitHub).
- **Aliases:** `~/` → `src/`, `~test/` → `test/`.

## Structure

```
src/
  app/         # routes: each page.tsx only re-exports a screen (+ metadata); layout, not-found, globals.css
               # generated assets: icon.tsx (64/192/512), apple-icon.tsx, opengraph-image.tsx, manifest.ts,
               # sitemap.ts, robots.ts, badge/front|back/route.ts (3D badge textures)
  screens/     # one folder per screen: index.tsx (view) + container.ts (useXContainer hook) when there is client logic
  components/
    ui/        # shadcn/ui pieces (one folder each: index.tsx + types.ts, styles.ts with cva when it has variants)
               # + vendored WebGL scenes: laser-flow, lanyard, floating-lines, ghost-fibers, lightfall
    <name>/    # domain and layout components: index.tsx (+ types.ts with own props, container.ts + container.spec.ts)
  utils/       # pure functions and site content; specs in utils/__tests__/
               # mock.ts (all content), seo.ts, navigation.ts, palette.ts, brand-assets.ts, badge-texture.tsx,
               # portrait-icon.tsx, media.ts, still-motion.ts, motion-preference.ts, device.ts, clock.ts, env.ts, log.ts
  enums/  interfaces/  assets/ (fonts for ImageResponse, icons, logos)  lib/ (cn())
public/
  brand/       # portrait.svg and signature.svg: the source of every generated image
  llms.txt     # plain-text profile for AI crawlers, hand-written: keep in sync with mock.ts
test/
  setup.ts     # loaded before every spec: shared module mocks and DOM/timer/storage resets
  helpers.ts   # shared test helpers, imported as `~test/helpers` (e.g. mockMatchMedia)
```

Create a folder when the need shows up; do not add empty structure ahead of time.

## Rules (always follow)

### Routes and Next.js 16
- `src/app/**/page.tsx` only re-exports the screen (`export { AboutScreen as default } from '~/screens/about'`) and declares `metadata` through `buildPageMetadata` (`utils/seo.ts`). Next.js convention files (`page`, `layout`, `not-found`, `opengraph-image`, `icon`, `apple-icon`, `manifest`, `sitemap`, `robots`) are the only ones with `export default`.
- Routes are in English and kebab-case. To add a route:
  1. Create `src/screens/<name>/`.
  2. Create the `page.tsx` in `src/app/<route>/`.
  3. Add the route to `sitemap.ts`.
  4. If it is main navigation, add an item to `NAV_LINKS` (`src/utils/navigation.ts`) with a `label` and a short `shortLabel` for phones.
- Internal navigation always uses `next/link` (never `<a>`). For a button, use `Button` with `render={<Link href="..." />}` and `nativeButton={false}`, or `buttonVariants()` on a `Link`.
- **Cache Components is on.**
  - Do not export `revalidate`, `dynamic`, `fetchCache`, or `runtime` from a route (the Edge Runtime is deprecated).
  - Server components never read the clock directly (`new Date()`, `Date.now()`): use `getCachedNow()` (`utils/clock.ts`, `'use cache'` + `cacheLife('hours')`).
  - Uncached I/O makes a route dynamic. File reads (`readFile` of fonts or SVGs) go in a `'use cache'` + `cacheLife('max')` helper (`utils/brand-assets.ts`). Every route, generated image and route handler must build as `○` (static); check the route table after `pnpm build`.
- Server components by default. `'use client'` only on the component that needs state, effects, or browser APIs, and its logic lives in `container.ts`.

### Screens and components
- Screen = view (`index.tsx`, JSX only). Client logic (state, handlers, Next.js hooks) goes in a `useXContainer` hook in `container.ts`. The view has no `useState`, `useEffect`, or business rules. Screens have no `types.ts` or `styles.ts`.
- **A `container.ts` is a React hook, nothing else.** Pure helpers (formatting, grouping, math) live in `utils/` with specs in `utils/__tests__/`. Interfaces go in `interfaces/`. If a component has no client logic, it has no container.
- **Do not create a component for a small piece used in one place.** Inline it in the screen. Extract a component only when it is reused, or when it isolates client JS (`'use client'`) so the rest of the page stays a server component.
- **Every UI piece is a shadcn/ui component.**
  - Add it through the CLI (`pnpm dlx shadcn@latest add <name>`) and **reorganize it into a folder right away**: `components/ui/<name>/index.tsx` + `types.ts`, plus `styles.ts` with `cva` if it has variants.
  - The CLI generates `import { cn } from "cn"` and adds the `cn` package to `package.json`: switch the import to `~/lib/utils` and remove the package.
  - Apart from that reorganization, do not hand-edit `components/ui/`. New variants go in `styles.ts` or in composition outside. `Button` has the extra variants `glow`, `glass`, `light` and `line`, and the extra size `xl`.
  - Delete shadcn pieces that are no longer used.
- **Vendored WebGL scenes** (`ui/laser-flow`, `ui/lanyard`, `ui/floating-lines`, `ui/ghost-fibers`, `ui/lightfall`, from React Bits) are the exception to "do not hand-edit". They carry local changes such as pause support and props, and they are the only files with the Biome `useHookAtTopLevel` override, because `gl.useProgram()` reads as a hook.
- `components/ui/` does not import domain components, `utils/mock.ts`, or `env`. Domain components compose the `ui/` pieces.
- Every component accepts `testId` and `className` (`IDefaultComponentProps`):
  - `testId` has a descriptive default and becomes `data-testid` on the root element; classes are merged with `cn()`.
  - A component whose only props are those two types them as `IDefaultComponentProps` directly, with no `types.ts`. Create `types.ts` only for an interface that adds props of its own.
- Site content (experiences, outcomes, technologies, links, hero copy) lives in `utils/mock.ts`, never scattered across views. Copy that is reused across places (`HOME_HERO.role`, `HOME_HERO.closingLine`) is read from there, including inside generated images.

### Styles and tokens
- Visual direction "neon on midnight": midnight base `#030407`, cobalt brand `#1558c9`, neon light `#2f6bff`, neon soft `#7aa6ff`. The living reference is `/styleguide`, and the full system is in `DESIGN.md`.
- Tokens live in `src/app/globals.css` following the shadcn structure: brand primitives in `@theme`, semantic tokens in `:root`/`.dark` (oklch) exposed through `@theme inline`. The site always renders in `.dark`.
- **`src/utils/palette.ts` (`PALETTE`, `LIGHT_GRADIENT`) mirrors the brand primitives for code that cannot read CSS tokens** (WebGL props, `ImageResponse`). Change both together. Never paste hex values into components.
- **Never** hard-code a color, font, spacing, or radius: use the token classes (`bg-background`, `text-muted-foreground`, `bg-neon`, `shadow-neon`). In an arbitrary value, use the token variable (`var(--color-midnight)`, with `color-mix()` for alpha), never `rgb()`.
- **Never use `px` in an arbitrary class value** (`text-[32px]`, `w-[calc(100vw-32px)]`): use `rem` (`rounded-[2.5rem]`) or the Tailwind multiplier (`max-w-130`).
- No ad-hoc `<style>` or CSS outside Tailwind. Reusable effects live in `@layer components` in `globals.css`:

  | Group | Classes |
  |---|---|
  | Ground and light | `page-glow`, `neon-rule`, `filament-glow`, `blueprint` |
  | Glass | `glass-control`, `header-glass` + `header-rim` (CSS frost; the old SVG "liquid glass" filter was removed) |
  | Page pieces | `slab-*` + `slab-label` (cost slab), `timeline-fill` / `timeline-dot` (scroll-driven rail), `ledger-row`, `ruler-*`, `live-chip`, `nav-pill` |
  | 404 | `saber*` (two crossed sabers) |
  | Caricature | `portrait-ink` (portrait SVG as a mask) + `portrait-drift` (slow float) |

  Before adding a class, reuse one of these. Remove a class when its last user goes away.
- **Light rule:** one light scene leads each viewport: the hero beam on the slab, the closing scene, or FloatingLines between sections. Do not stack two glowing focal points in the same view. Glass only goes on top of the glow field. Small text is never pure cobalt (low contrast): use `text-primary`, `text-neon-soft` or `text-foreground`.
- Fonts: Geist and Geist Mono (`next/font`). `ImageResponse` needs TTF copies, which are in `src/assets/fonts`.
- No photos. The identity is the hand-drawn caricature (`public/brand/portrait.svg`) and the signature (`public/brand/signature.svg`).
- Smooth scroll: CSS `scroll-behavior: smooth` under `prefers-reduced-motion: no-preference`, plus `data-scroll-behavior="smooth"` on `<html>`. No scroll library.

### Motion and WebGL
- **Every animation respects `prefers-reduced-motion` and the header pause control.** The pause preference is stored by `utils/motion-preference.ts` and mirrored to `html[data-motion="paused"]` by the motion-toggle container.
  - **CSS:** wrap animations in `@media (prefers-reduced-motion: no-preference) { html:not([data-motion="paused"]) .x { animation: … } }`. The still state must look finished (lit, in place), never blank.
  - **JS:** `useStillMotion()` (`utils/still-motion.ts`) returns true when motion must hold still.
- **Browser state goes through `useSyncExternalStore`** (`subscribeToMedia` / `readMedia` in `utils/media.ts`, the motion preference) with a server snapshot. Never use `useState` + `useEffect` to mirror `matchMedia`.
- Ambient motion is gentle. The owner turned down a cursor-reactive portrait as "too much". Prefer slow, small loops (seconds, rem-scale translate, under 1° rotation) over pointer-driven effects.
- **WebGL rules:**
  - Scenes load with `next/dynamic(() => import(...), { ssr: false })` so three.js stays out of the first load.
  - Heavy scenes render only on desktop (`DESKTOP_QUERY`) and when `canRenderHeavyWebgl(navigator)` passes (`utils/device.ts`). Phones and weak GPUs get a static fallback.
  - On the home hero, the beam plays its intro first. Only after it does the badge appear: 3D, or static as the fallback. Never both.
  - Do not call `loseContext()` in effect cleanup: it breaks the StrictMode remount and leaves a blank canvas.
- Scroll-linked effects use CSS scroll-driven animations (`animation-timeline: view()`), not scroll listeners.

### Generated images (`ImageResponse` / Satori)
- Generated images are favicon sizes, apple icon, OG image and the 3D badge faces.
  - **Sources:** they are built from the SVGs in `public/brand/` through `utils/brand-assets.ts` (`readPortraitSvg`, `readSignatureSvg`, `loadImageFonts`, `inkDataUrl`, `glowInkDataUrl`, `gridDataUrl`).
  - **Rendering:** the code lives in `utils/` (`portrait-icon.tsx`, `badge-texture.tsx`), and the files in `app/` only call it.
  - **Caching:** they are built once at build time and served from cache.
- Satori limits:
  - No CSS `filter`: bake glows into an SVG data URL.
  - No `backgroundSize` with multiple gradients.
  - A `div` with more than one child node needs `display: flex`, so write `{`${a} years`}` instead of `{a} years`.
  - Fonts must be TTF or OTF.
- The OG image is a still of the hero with no numbers in it: no career years, no metrics. Multi-size icons use `generateImageMetadata`.

### SEO and metadata
- Page metadata comes from `buildPageMetadata`, and the canonical origin from `env.APP_URL`.
- JSON-LD:
  - `Person` is in the layout. `ProfilePage` is on home and about, and `ContactPage` is on contact.
  - All are built in `utils/seo.ts` and rendered with `serializeJsonLd`.
- `SITE_DESCRIPTION` stays under ~160 characters and matches the current facts.
- When content changes, update `mock.ts`, `public/llms.txt` and `SITE_DESCRIPTION` together.

### Content and copy
- **Never invent facts, numbers, clients or testimonials.** Every metric in `mock.ts` must come from the owner. Mark a claim as "needs owner input" in `PENDING.md` instead of guessing.
  - Currency is USD.
  - Results are labeled honestly: a measured result has a metric; a scope-only line uses `isScope: true` and the screen-reader label "Scope:".
- Voice:
  - First person ("I led…").
  - Concrete and plain: a fact instead of a marketing line, with no "passionate", "cutting-edge" or similar.
  - The title is "Tech Lead · Software Engineer & Architect". Do not call him "full stack".
- Role descriptions lead with impact and scope, then name only the main stack: a short closing "Built with …" or the tools tied to a feat (2–5, never a keyword list). The full tool list lives in the technologies catalog; `public/llms.txt` may keep the detailed version for AI crawlers.
- The primary stack is Node.js and TypeScript, with Go where it fits. Do not attribute a technology to a role where the owner did not use it (for example, no Go and no OpenTelemetry at Linda Lifetech).
- Facts in copy that change over time are computed, not typed: career years come from the first role's `startDate`, age from `CONSTANTS.BIRTHDAY`, and catalog totals from the data. Never hard-code a count.
- Mobile layouts must survive 320 px. Long labels get short variants, such as `shortLabel` in navigation.

### Accessibility
- Decorative scenes, glows and the caricature are `aria-hidden`. The person is named in text.
- Visually hidden labels give context where the visual relies on layout, for example "Scope:" vs "Measured result:" on the timeline.
- Forms: on submit errors, move focus to the first invalid field and re-announce the message. `flushSync` clears the live region before the new message so screen readers repeat it.
- Interactive targets are at least 24 px (`min-h-6`), and focus is always visible (`outline` with `neon-soft`).

### Code
- **`useEffect` never takes an inline arrow function**: always a named function declared beforehand and passed by reference (the name describes the effect).
- **`useMemo`/`useCallback`/`memo()` only with a justification** in a comment right above (the React Compiler already memoizes). Without the comment, remove it.
- **React 19 event types:**
  - `FormEvent` is deprecated: use `SubmitEvent` for form submit and `InputEvent` / `ChangeEvent` for fields.
  - For per-frame values (pointer position), write CSS variables on the element instead of setting state.
- Prefixes `E` (enum), `I` (interface), `T` (type); enums instead of string unions; files and folders in `kebab-case`; no `export default` outside `src/app`.
- Named imports from `react` (never `import * as React`); `import type` for types (Biome enforces both).
- Logs only through `devLog`/`devWarn`/`devError` (`utils/log.ts`, dev only), never `console`. Never log personal or sensitive data.
- New environment variable: declare it in `utils/env.ts` (zod) and in `.env.example`. Variables read on the client start with `NEXT_PUBLIC_`. A module imported by a client component must not read a server variable (that is why `NAV_LINKS` lives in `utils/navigation.ts`, outside `mock.ts`).
- Delete dead code as you go: unused components, CSS classes, assets, env vars and config (for example, `images.remotePatterns` once no remote image is left).
- `poweredByHeader: false` stays in `next.config.ts`.

### Biome
- The config is `biome.jsonc`, so comments are allowed there. Never add a comment to a `.json` config: Biome then ignores the file, drops `files.includes`, and `--fix` reformats the whole repo, including `temp/` and `.claude/`.
- `pnpm lint` runs with `--unsafe` and rewrites files, including removing imports it thinks are unused while the code is broken. Fix type errors first, then lint.
- After a lint run, check that the "Checked N files" count did not jump. A jump means the config was not read.

### Tests
Vitest covers **logic**: containers, hooks, and `utils/`, with `renderHook`. **There are no render tests** (only `*.spec.ts`), and the environment is `jsdom`.
- **Location:** `name.spec.ts` sits next to the file; in `utils/` and `lib/`, specs go under `__tests__/`.
- **Coverage:** 90% minimum. Excluded: `styles.ts`, `types.ts`, `src/app`, enums, interfaces, `utils/mock.ts`, and `utils/env.ts`.
- **No e2e tests.**
- **Shared setup (`test/setup.ts`)** runs before every spec.
  - It mocks `~/utils/env` (test values for every variable) and `next/cache` (`cacheLife`, `cacheTag`). After each test it restores real timers and clears `localStorage` and `document.body`.
  - Do not repeat those mocks or resets in a spec. Mock a module in a spec only to change its behavior (e.g. a different `NEXT_PUBLIC_CONTACT_NUMBER`); the spec's `vi.mock` wins.
- **Config resets (`vitest.config.mts`):** `clearMocks`, `restoreMocks`, `unstubGlobals`, and `unstubEnvs` are on. Specs need no `afterEach` for `vi.clearAllMocks`, `vi.restoreAllMocks`, `vi.unstubAllGlobals`, or `vi.unstubAllEnvs`. Keep an `afterEach` only for state the setup does not know about (e.g. a shared mock variable).
- **Helpers (`~test/helpers`):** use `mockMatchMedia(true | false | (query) => boolean)` instead of stubbing `matchMedia` by hand. Add a helper there when the same stub shows up in a second spec.
- **Per-spec mocks:** other modules (`next/navigation`, `next/og`, `node:fs/promises`, components) are mocked per spec with `vi.mock`, with `vi.hoisted` when the mock needs a reference.
- **Injectable dependencies:** functions that touch the browser take them as parameters, so specs pass fakes instead of patching globals. Example: `canRenderHeavyWebgl(nav, createCanvas)`.

### Verifying a change
- **Gates:** `pnpm lint`, `pnpm check-types`, `pnpm test:run` and `pnpm build`. The build must keep every route `○`.
- **CSS:** check CSS changes on a production build (`rm -rf .next/cache .next/static .next/server && pnpm build && pnpm start -p 3100`). The dev server can serve a stale `globals.css`. Lightning CSS drops an unprefixed `backdrop-filter`, so check that glass still renders.
- **Visual check:** check 1440 px, 390 px and 320 px. Look for no horizontal scroll, no overlap with the scenes, and readable text.
- **Targets:**
  - **Lighthouse mobile:** performance ≥ 90 on every page; desktop 100; accessibility and SEO 100; CLS 0.
  - **axe:** zero violations (WCAG 2.2 AA plus best practices) on every page and on the 404.
- **WebGL:** headless browsers have no GPU, so WebGL scenes must be checked in a real browser.

### Process
- Commits and branches are in English and follow Conventional Commits (commitlint + lefthook). Types: `hotfix, feat, fix, chore, style, refactor, doc, wip, revert, test`. The subject is lower-case.
- Lefthook runs `lint`, `check-types` and `test:run` on pre-commit, and `build` + `lint` + commitlint on pre-push.
- **CI (GitHub Actions, mirrors the Horizontes backoffice pipeline):**
  - `.github/workflows/ci.yml` runs on pull requests only: `biome ci`, `check-types`, `build` (with placeholder env), PR title through commitlint (squash merges use it as the commit message), `pnpm audit` (critical only, informational), gitleaks over the full history, and `test:cov` after lint + types. Shared setup is `.github/actions/setup` (Node from `.nvmrc`, pnpm from `packageManager`, frozen install).
  - `.github/workflows/release.yml` runs on push to `master`: semantic-release (`.releaserc.cjs`) bumps `package.json`, writes `CHANGELOG.md`, commits `chore(release): x.y.z`, tags `vX.Y.Z` and creates the GitHub release. It needs the `GH_TOKEN` secret (push to protected `master`) and skips its own release commit.
  - Tags keep the `v` prefix: changing `tagFormat` would make semantic-release miss the last release.
  - The release type comes from the commits on `master` (default angular preset): `feat` → minor, `fix` → patch, a `BREAKING CHANGE: <why>` footer → major. `refactor`, `chore`, `style` and `doc` alone release nothing, and the `type!:` shorthand is **not** recognized. With a squash merge, put the footer in the PR description so it lands in the squash commit body.
  - The footer shows the running version (`utils/app-version.ts` reads `package.json`, linked to its GitHub release). Do not bump `version` by hand: the release commit writes it.
- `CHANGELOG.md` is generated by semantic-release; do not edit it.
- `PENDING.md` lists only open items that live in the code (for example, a claim in `mock.ts` waiting for the owner). Nothing external (hosting settings, the résumé PDF, ideas). Remove an item when it is done.
- Anything confirmed unused (component, CSS class, asset, env var, config) is deleted in the same change, never parked as pending.

## Never

- Commit `.env`, `.next/`, `coverage/`, or the `temp/` folder.
- Export `revalidate`, `dynamic`, `fetchCache`, or `runtime` from a route; read the clock directly in a server component; leave uncached I/O in a route or generated image.
- Build from scratch a UI piece that shadcn already covers; hand-edit shadcn files in `components/ui/` outside the reorganization.
- Import content, `env`, or domain components inside `components/ui/`.
- Hard-code a color, font, or spacing; use arbitrary `px`; write CSS outside Tailwind; paste hex values instead of using `PALETTE`.
- Add an animation that ignores reduced motion or the pause control; render a heavy WebGL scene on phones or without the capability check.
- Invent a fact or number in the copy; hard-code a count or a number of years.
- `useEffect` with an anonymous function; `useMemo`/`useCallback` without justification; `export default` outside `src/app`; a `container.ts` that is not a hook.
- `<a>` for internal navigation.
- Log personal or sensitive data; call `console` directly.
- Put a comment in a `.json` config.
- Use `npm`, `yarn`, or `bun`.
