import { describe, expect, it, vi } from 'vitest'
import { getCachedNow } from '../clock'

const { cacheLife } = vi.hoisted(() => ({ cacheLife: vi.fn() }))
vi.mock('next/cache', () => ({ cacheLife }))

describe('getCachedNow', () => {
	it('returns the current timestamp with an hourly cache life', async () => {
		vi.useFakeTimers()
		vi.setSystemTime(new Date(2026, 0, 1))

		await expect(getCachedNow()).resolves.toBe(new Date(2026, 0, 1).getTime())
		expect(cacheLife).toHaveBeenCalledWith('hours')

		vi.useRealTimers()
	})
})
