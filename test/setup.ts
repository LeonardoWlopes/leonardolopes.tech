import { afterEach, vi } from 'vitest'

/*
 * Loaded before every spec (vitest.config.mts → setupFiles). Mock resets and
 * global unstubbing come from the config flags; this file holds the module
 * mocks every spec would otherwise repeat. A spec can still override any of
 * them with its own vi.mock.
 */

// The validated env reads server variables, which jsdom (a "client") refuses
vi.mock('~/utils/env', () => ({
	env: {
		CV_URL: 'https://example.com/cv.pdf',
		APP_URL: 'https://leonardolopes.tech',
		GOOGLE_ANALYTICS_ID: 'G-TEST',
		SCHEDULE_LINK: 'https://example.com/schedule',
		NEXT_PUBLIC_CONTACT_NUMBER: '5500000000000',
	},
}))

// 'use cache' is a no-op outside Next; cacheLife only needs to exist
vi.mock('next/cache', () => ({ cacheLife: vi.fn(), cacheTag: vi.fn() }))

afterEach(() => {
	vi.useRealTimers()
	window.localStorage.clear()
	document.body.innerHTML = ''
})
