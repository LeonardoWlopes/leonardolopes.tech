import { cacheLife } from 'next/cache'

/**
 * Current time for server components. With Cache Components, reading the
 * clock during prerender breaks the static shell, so it lives in a cached
 * scope refreshed every hour (replaces the old `revalidate = 43200`).
 */
export async function getCachedNow() {
	'use cache'
	cacheLife('hours')
	return Date.now()
}
