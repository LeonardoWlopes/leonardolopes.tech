import { describe, expect, it, vi } from 'vitest'
import { readMedia, subscribeToMedia } from '../media'

function mockMatchMedia(matches: boolean) {
	const media = {
		matches,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
	}
	vi.stubGlobal(
		'matchMedia',
		vi.fn(() => media),
	)
	return media
}

describe('media helpers', () => {
	it('reads the current match', () => {
		mockMatchMedia(true)
		expect(readMedia('(x)')()).toBe(true)
	})

	it('subscribes and unsubscribes to changes', () => {
		const media = mockMatchMedia(false)
		const onChange = vi.fn()
		const unsubscribe = subscribeToMedia('(x)')(onChange)

		expect(media.addEventListener).toHaveBeenCalledWith('change', onChange)
		unsubscribe()
		expect(media.removeEventListener).toHaveBeenCalledWith('change', onChange)
	})
})
