import { describe, expect, it } from 'vitest'
import { isActiveRoute } from '../navigation'

describe('isActiveRoute', () => {
	it('matches home only on the root path', () => {
		expect(isActiveRoute('/', '/')).toBe(true)
		expect(isActiveRoute('/about', '/')).toBe(false)
	})

	it('matches the route and its children', () => {
		expect(isActiveRoute('/experiences', '/experiences')).toBe(true)
		expect(isActiveRoute('/experiences/buildbox', '/experiences')).toBe(true)
	})

	it('does not match routes that only share a prefix', () => {
		expect(isActiveRoute('/contacts', '/contact')).toBe(false)
	})
})
