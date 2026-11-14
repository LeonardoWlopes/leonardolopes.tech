import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { measurePill, useNavLinksContainer } from './container'

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }))
vi.mock('next/navigation', () => ({ usePathname }))

const observer = vi.hoisted(() => ({
	callback: null as (() => void) | null,
	observe: vi.fn(),
	disconnect: vi.fn(),
}))

class ResizeObserverMock {
	constructor(callback: () => void) {
		observer.callback = callback
	}
	observe = observer.observe
	disconnect = observer.disconnect
}

function buildList(withActive = true) {
	const list = document.createElement('ul')
	const link = document.createElement('a')

	if (withActive) link.setAttribute('aria-current', 'page')
	Object.defineProperty(link, 'offsetLeft', { value: 80 })
	Object.defineProperty(link, 'offsetWidth', { value: 64 })
	list.appendChild(link)

	return list
}

describe('measurePill', () => {
	it('reads the active link box', () => {
		expect(measurePill(buildList())).toEqual({ x: 80, width: 64 })
	})

	it('returns null when no link is active', () => {
		expect(measurePill(buildList(false))).toBeNull()
	})
})

describe('useNavLinksContainer', () => {
	beforeEach(() => {
		vi.stubGlobal('ResizeObserver', ResizeObserverMock)
	})

	it('marks only the current route as active', () => {
		usePathname.mockReturnValue('/experiences')

		const { result } = renderHook(() => useNavLinksContainer())
		const active = result.current.links.filter((link) => link.active)

		expect(active.map((link) => link.href)).toEqual(['/experiences'])
		expect(result.current.pill).toBeNull()
	})

	it('follows the active link once the list is mounted', () => {
		usePathname.mockReturnValue('/')
		const list = buildList()

		const { result, rerender, unmount } = renderHook(() => {
			const container = useNavLinksContainer()
			container.listRef.current = list
			return container
		})

		usePathname.mockReturnValue('/about')
		rerender()

		expect(result.current.pill).toEqual({ x: 80, width: 64 })
		expect(observer.observe).toHaveBeenCalledWith(list)

		act(() => observer.callback?.())
		unmount()

		expect(observer.disconnect).toHaveBeenCalled()
	})
})
