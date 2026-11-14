import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mockMatchMedia } from '~test/helpers'
import { useSignatureFinaleContainer } from './container'

const { canRenderHeavyWebgl } = vi.hoisted(() => ({
	canRenderHeavyWebgl: vi.fn(() => true),
}))
vi.mock('~/utils/device', () => ({ canRenderHeavyWebgl }))

function buildScene(top: number) {
	const scene = document.createElement('section')
	vi.spyOn(scene, 'getBoundingClientRect').mockReturnValue({
		top,
		height: 3000,
	} as DOMRect)
	return scene
}

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

describe('useSignatureFinaleContainer', () => {
	beforeEach(() => {
		vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
		vi.stubGlobal('innerHeight', 1000)
		vi.stubGlobal('requestAnimationFrame', (callback: () => void) => {
			callback()
			return 1
		})
		vi.stubGlobal('cancelAnimationFrame', vi.fn())
	})

	it('writes the scroll progress and follows scrolling', () => {
		mockMatchMedia(false)
		const scene = buildScene(-1000)
		const { result, unmount } = renderHook(() => useSignatureFinaleContainer())

		act(() => result.current.attachScene(scene))
		expect(scene.style.getPropertyValue('--p')).toBe('0.5')

		vi.spyOn(scene, 'getBoundingClientRect').mockReturnValue({
			top: -2000,
			height: 3000,
		} as DOMRect)
		act(() => {
			window.dispatchEvent(new Event('scroll'))
		})
		expect(scene.style.getPropertyValue('--p')).toBe('1')

		expect(result.current.isVisible).toBe(false)
		act(() => observer.callback?.([{ isIntersecting: true }]))
		expect(result.current.isVisible).toBe(true)

		unmount()
		expect(observer.disconnect).toHaveBeenCalled()
	})

	it('pins the final state under reduced motion', () => {
		mockMatchMedia(true)
		const scene = buildScene(200)
		const { result } = renderHook(() => useSignatureFinaleContainer())

		act(() => result.current.attachScene(scene))

		expect(scene.style.getPropertyValue('--p')).toBe('1')
	})
	it('mounts the WebGL layers only on capable desktops while visible', () => {
		mockMatchMedia((query) => query.includes('min-width'))
		const { result } = renderHook(() => useSignatureFinaleContainer())
		act(() => result.current.attachScene(buildScene(0)))
		act(() => observer.callback?.([{ isIntersecting: true }]))

		expect(result.current.showWebgl).toBe(true)
	})

	it('keeps phones on the CSS scene', () => {
		mockMatchMedia(false)
		const { result } = renderHook(() => useSignatureFinaleContainer())
		act(() => result.current.attachScene(buildScene(0)))
		act(() => observer.callback?.([{ isIntersecting: true }]))

		expect(result.current.showWebgl).toBe(false)
	})
})
