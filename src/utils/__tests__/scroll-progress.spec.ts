import { describe, expect, it } from 'vitest'
import { getScrollProgress } from '../scroll-progress'

describe('getScrollProgress', () => {
	it('is 0 before the element reaches the top', () => {
		expect(getScrollProgress(200, 3000, 1000)).toBe(0)
	})

	it('grows while the element is pinned', () => {
		expect(getScrollProgress(-1000, 3000, 1000)).toBe(0.5)
	})

	it('is 1 at the end and for elements no taller than the viewport', () => {
		expect(getScrollProgress(-5000, 3000, 1000)).toBe(1)
		expect(getScrollProgress(0, 800, 1000)).toBe(1)
	})
})
