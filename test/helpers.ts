import { vi } from 'vitest'

/**
 * Replaces window.matchMedia. Pass a boolean for every query, or a function
 * to answer per query (e.g. desktop vs reduced motion).
 */
export function mockMatchMedia(
	matches: boolean | ((query: string) => boolean),
) {
	const resolve = typeof matches === 'function' ? matches : () => matches
	const matchMedia = vi.fn((query: string) => ({
		matches: resolve(query),
		media: query,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
	}))

	vi.stubGlobal('matchMedia', matchMedia)
	return matchMedia
}
