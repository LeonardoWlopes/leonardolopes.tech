/**
 * Brand colors for code that cannot read CSS tokens (WebGL props). Mirrors the
 * `@theme` primitives in src/app/globals.css: change both together.
 */
export const PALETTE = {
	cobalt: '#1558c9',
	neon: '#2f6bff',
	neonSoft: '#7aa6ff',
	badgeCard: '#04060c',
	badgeStrap: '#0b1a3a',
} as const

/** Cobalt → neon → neon soft, the gradient every light scene uses */
export const LIGHT_GRADIENT = [
	PALETTE.cobalt,
	PALETTE.neon,
	PALETTE.neonSoft,
] as const
