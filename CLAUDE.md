# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## This is NOT the Next.js you know

This project runs Next.js 16, which has breaking changes: APIs, conventions, and file structure may differ from your training data. Before writing code that touches a Next.js API, read the relevant guide in `node_modules/next/dist/docs/` (version-matched to the installed package) and heed deprecation notices. Automatic `AGENTS.md` generation is disabled in `next.config.ts` (`agentRules: false`); this section replaces it.

## Purpose

Personal website of Leonardo Lopes (`leonardolopes.tech`): a software engineer portfolio with home, about, experiences, technologies, and contact pages. Deployed on Vercel from `master`. All content is in **English** and lives inline in the code (no i18n for now).

## Node and package manager

Node is pinned in `.nvmrc` (`24.19.0`) and in `engines` in `package.json` (use [nvm](https://github.com/nvm-sh/nvm): `nvm install` / `nvm use`). The package manager is **pnpm** (`packageManager` in `package.json`). Do not use `npm`, `yarn`, or `bun`.

## Commands

```bash
pnpm dev          # next dev (Turbopack), localhost:3000
pnpm build        # next build (Turbopack); fails on type errors
pnpm start        # serve the build
pnpm lint         # biome check --fix --unsafe (MODIFIES files)
pnpm check-types  # next typegen + tsc --noEmit
pnpm test:run     # vitest run (logic only; no render tests)
pnpm test:cov     # vitest with coverage (90% minimum)
pnpm test:watch   # vitest in watch mode (also test:ui)
```

## Stack

**Next.js 16** (App Router, Turbopack, **Cache Components**, Partial Prefetching) + **React 19** with the **React Compiler** (`reactCompiler: true`); **TypeScript 6**; **Tailwind CSS v4** through the `@tailwindcss/turbopack` loader (no PostCSS, no `tailwind.config`; tokens in `src/app/globals.css`); **shadcn/ui** on top of `@base-ui/react` (`components.json`: style `base-vega`); **lucide-react** (brand logos in `components/brand-icons`); **date-fns**; **zod** + `@t3-oss/env-nextjs` (env); **Biome**; **Vitest** (jsdom); **lefthook + commitlint**; **semantic-release** (GitHub). Alias `~/` → `src/`.

## Structure

```
src/
  app/         # App Router routes: each page.tsx only re-exports a screen (+ metadata); layout, not-found, opengraph-image, globals.css
  screens/     # one folder per screen: index.tsx (view) + container.ts (useXContainer hook) when there is client logic
  components/
    ui/        # shadcn/ui: one folder per component (index.tsx + types.ts; styles.ts with cva when it has variants)
    <name>/    # domain and layout components: index.tsx (+ types.ts when it has own props, container.ts and container.spec.ts)
  utils/       # pure functions and site content (mock.ts, constants.ts, env.ts); specs in utils/__tests__/
  enums/  interfaces/  assets/  lib/ (cn())
test/
  setup.ts     # loaded before every spec: shared module mocks and DOM/timer/storage resets
  helpers.ts   # shared test helpers, imported as `~test/helpers` (e.g. mockMatchMedia)
```

Create a folder when the need shows up; do not add empty structure ahead of time.

## Rules (always follow)

### Routes and Next.js 16
- `src/app/**/page.tsx` only re-exports the screen (`export { AboutScreen as default } from '~/screens/about'`) and declares `metadata`. Next.js convention files (`page`, `layout`, `not-found`, `opengraph-image`) are the only ones with `export default`.
- Routes are in English and kebab-case. New route: create `src/screens/<name>/`, the `page.tsx` in `src/app/<route>/` and, if it is main navigation, an item in `NAV_LINKS` (`src/utils/navigation.ts`).
- Internal navigation always uses `next/link` (never `<a>`). For a button, use `Button` with `render={<Link href="..." />}` and `nativeButton={false}`.
- **Cache Components is on.** Do not export `revalidate`, `dynamic`, `fetchCache`, or `runtime` from a route (the Edge Runtime is deprecated). Server components never read the clock directly (`new Date()`, `Date.now()`): use `getCachedNow()` (`utils/clock.ts`, `'use cache'` + `cacheLife('hours')`). Dynamic data goes in `'use cache'` or inside `<Suspense>`.
- Server components by default. `'use client'` only on the component that needs state, effects, or browser APIs, and its logic lives in `container.ts`.

### Screens and components
- Screen = view (`index.tsx`, JSX only). Client logic (state, handlers, Next.js hooks) goes in a `useXContainer` hook in `container.ts`. The view has no `useState`, `useEffect`, or business rules. Screens have no `types.ts` or `styles.ts`.
- **Every UI piece is a shadcn/ui component.** Add it through the CLI (`pnpm dlx shadcn@latest add <name>`) and **reorganize it into a folder right away** (`components/ui/<name>/index.tsx` + `types.ts`, plus `styles.ts` with `cva` if it has variants). The CLI generates `import { cn } from "cn"` and adds the `cn` package to `package.json`: switch the import to `~/lib/utils` and remove the package. Apart from that reorganization, do not hand-edit `components/ui/`: new variants go in `styles.ts` (like `glow`, `glass`, `light` and the `xl` size on `Button`) or in composition outside.
- `components/ui/` does not import domain components, `utils/mock.ts`, or `env`. Domain components compose the `ui/` pieces.
- Every component accepts `testId` and `className` (`IDefaultComponentProps`): `testId` has a descriptive default and becomes `data-testid` on the root element; classes are merged with `cn()`. A component whose only props are those two types them as `IDefaultComponentProps` directly, with no `types.ts`; create `types.ts` only for an interface that adds props of its own.
- Site content (experiences, technologies, links, highlights) lives in `utils/mock.ts`, never scattered across views.

### Styles and tokens
- Visual direction "neon on midnight": midnight base `#030407`, cobalt brand `#1558c9`, neon light `#2f6bff`. The living reference is `/styleguide`.
- Tokens live in `src/app/globals.css` following the shadcn structure: brand primitives in `@theme`, semantic tokens in `:root`/`.dark` (oklch) exposed through `@theme inline`. The site always renders in `.dark`.
- **Never** hard-code a color, font, spacing, or radius: use the token classes (`bg-background`, `text-muted-foreground`, `bg-neon`, `shadow-neon`). **Never use `px` in an arbitrary class value** (`text-[32px]`, `w-[calc(100vw-32px)]`): use `rem` (`rounded-[2.5rem]`) or the Tailwind multiplier (`max-w-130`). No ad-hoc `<style>` or CSS outside Tailwind; reusable effects (`neon-mesh`, `neon-text`, `glass-control`, `page-glow`, `neon-rule`) live in `@layer components` in `globals.css`.
- One glowing element per screen. Glass only on top of the glow field. Small text never in pure cobalt (low contrast): use `text-primary` or `text-foreground`.
- Fonts: Geist and Geist Mono (`next/font`).

### Code
- **`useEffect` never takes an inline arrow function**: always a named function declared beforehand and passed by reference (the name describes the effect).
- **`useMemo`/`useCallback`/`memo()` only with a justification** in a comment right above (the React Compiler already memoizes). Without the comment, remove it.
- Prefixes `E` (enum), `I` (interface), `T` (type); enums instead of string unions; files and folders in `kebab-case`; no `export default` outside `src/app`.
- Named imports from `react` (never `import * as React`); `import type` for types (Biome enforces both).
- Logs only through `devLog`/`devWarn`/`devError` (`utils/log.ts`, dev only), never `console`. Never log personal or sensitive data.
- New environment variable: declare it in `utils/env.ts` (zod) and in `.env.example`. Variables read on the client start with `NEXT_PUBLIC_`. A module imported by a client component must not read a server variable (that is why `NAV_LINKS` lives in `utils/navigation.ts`, outside `mock.ts`).

### Tests
Vitest covers **logic**: containers, hooks, and `utils/`, with `renderHook`. **There are no render tests** (only `*.spec.ts`). Environment is `jsdom`. `name.spec.ts` sits next to the file; in `utils/` and `lib/`, under `__tests__/`. Minimum coverage is 90%; excluded: `styles.ts`, `types.ts`, `src/app`, enums, interfaces, `utils/mock.ts`, and `utils/env.ts`. There are no e2e tests.
- **Shared setup (`test/setup.ts`)** runs before every spec: it mocks `~/utils/env` (test values for every variable) and `next/cache` (`cacheLife`, `cacheTag`), and after each test restores real timers and clears `localStorage` and `document.body`. Do not repeat those mocks or resets in a spec; mock a module in the spec only to change its behavior (e.g. a different `NEXT_PUBLIC_CONTACT_NUMBER`), and the spec's `vi.mock` wins.
- **Config resets (`vitest.config.mts`)**: `clearMocks`, `restoreMocks`, `unstubGlobals`, and `unstubEnvs` are on, so specs need no `afterEach` for `vi.clearAllMocks`, `vi.restoreAllMocks`, `vi.unstubAllGlobals`, or `vi.unstubAllEnvs`. Keep an `afterEach` only for state the setup does not know about (e.g. a shared mock variable).
- **Helpers (`~test/helpers`)**: use `mockMatchMedia(true | false | (query) => boolean)` instead of stubbing `matchMedia` by hand; add a helper there when the same stub shows up in a second spec.
- Other modules (`next/navigation`, `next/og`, `node:fs/promises`, components) are mocked per spec with `vi.mock`, with `vi.hoisted` when the mock needs a reference.

### Process
Commits and branches in English, Conventional Commits (commitlint + lefthook); types: `hotfix, feat, fix, chore, style, refactor, doc, wip, revert, test`; lower-case subject. Lefthook runs `lint`, `check-types`, and `test:run` on pre-commit, and `build` + `lint` + commitlint on pre-push. `CHANGELOG.md` is generated by semantic-release (GitHub Actions on `master`); do not edit it.

## Never

- Commit `.env`, `.next/`, `coverage/`, or the `temp/` folder.
- Export `revalidate`, `dynamic`, `fetchCache`, or `runtime` from a route; read the clock directly in a server component.
- Build from scratch a UI piece that shadcn already covers; hand-edit `components/ui/` outside the reorganization.
- Import content, `env`, or domain components inside `components/ui/`.
- Hard-code a color, font, or spacing; use arbitrary `px`; write CSS outside Tailwind.
- `useEffect` with an anonymous function; `useMemo`/`useCallback` without justification; `export default` outside `src/app`.
- `<a>` for internal navigation.
- Log personal or sensitive data; call `console` directly.
- Use `npm`, `yarn`, or `bun`.
