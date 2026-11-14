import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mockMatchMedia } from '~test/helpers'
import { useSectionLinesContainer } from './container'

const observer = vi.hoisted(() => ({
	callback: null as ((entries: { isIntersecting: boolean }[]) => void) | null,
	observe: vi.fn(),
	disconnect: vi.fn(),
}))

class IntersectionObserverMock {
	constructor(callback: (entries: { isIntersecting: boolean }[]) => void) {
		observer.callback = callback
	}
	observe = observer.observe
	disconnect = observer.disconnect
}

describe('useSectionLinesContainer', () => {
	beforeEach(() => {
		vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
		mockMatchMedia((query) => query.includes('min-width'))
	})

	it('renders the lines only on desktop while visible', () => {
		const { result, unmount } = renderHook(() => useSectionLinesContainer())
		expect(result.current.shouldRender).toBe(false)
		expect(result.current.reducedMotion).toBe(false)

		act(() => result.current.attachRef(document.createElement('div')))
		act(() => observer.callback?.([{ isIntersecting: true }]))
		expect(result.current.shouldRender).toBe(true)

		unmount()
		expect(observer.disconnect).toHaveBeenCalled()
	})
})
