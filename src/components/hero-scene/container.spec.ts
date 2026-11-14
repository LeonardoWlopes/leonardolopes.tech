import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mockMatchMedia } from '~test/helpers'
import { EBadgeMode, LIGHT_INTRO_MS, useHeroSceneContainer } from './container'

const { canRender3dBadge } = vi.hoisted(() => ({ canRender3dBadge: vi.fn() }))
vi.mock('~/utils/device', () => ({ canRender3dBadge }))
vi.mock('~/components/ui/lanyard', () => ({ Lanyard: () => null }))

function mockMedia({ desktop = true, reduced = false } = {}) {
	mockMatchMedia((query) => (query.includes('min-width') ? desktop : reduced))
}

async function flush(ms = 0) {
	await act(async () => {
		await vi.advanceTimersByTimeAsync(ms)
	})
}

describe('useHeroSceneContainer', () => {
	beforeEach(() => {
		vi.useFakeTimers()
		document.body.innerHTML = '<div id="slab"></div>'
	})

	it('binds the beam to the surface element', () => {
		mockMedia()
		canRender3dBadge.mockReturnValue(false)
		const { result } = renderHook(() => useHeroSceneContainer('slab'))

		expect(result.current.surfaceRef.current?.id).toBe('slab')
	})

	it('shows the 3D badge only after the light intro', async () => {
		mockMedia()
		canRender3dBadge.mockReturnValue(true)
		const { result } = renderHook(() => useHeroSceneContainer('slab'))

		await flush(LIGHT_INTRO_MS - 100)
		expect(result.current.badgeMode).toBe(EBadgeMode.NONE)

		await flush(100)
		expect(result.current.badgeMode).toBe(EBadgeMode.THREE_D)

		expect(result.current.isBadgeReady).toBe(false)
		act(() => result.current.markBadgeReady())
		expect(result.current.isBadgeReady).toBe(true)
	})

	it('falls back to the static badge on weak devices', async () => {
		mockMedia()
		canRender3dBadge.mockReturnValue(false)
		const { result } = renderHook(() => useHeroSceneContainer('slab'))

		await flush(LIGHT_INTRO_MS)
		expect(result.current.badgeMode).toBe(EBadgeMode.STATIC)
	})

	it('uses the static badge right away under reduced motion', async () => {
		mockMedia({ reduced: true })
		const { result } = renderHook(() => useHeroSceneContainer('slab'))

		await flush()
		expect(result.current.badgeMode).toBe(EBadgeMode.STATIC)
		expect(canRender3dBadge).not.toHaveBeenCalled()
	})

	it('shows no badge on small screens and ignores late results', async () => {
		mockMedia({ desktop: false })
		const { result, unmount } = renderHook(() => useHeroSceneContainer('slab'))

		await flush(LIGHT_INTRO_MS)
		expect(result.current.badgeMode).toBe(EBadgeMode.NONE)
		unmount()
	})

	it('does not update after unmounting mid-intro', async () => {
		mockMedia()
		canRender3dBadge.mockReturnValue(false)
		const { result, unmount } = renderHook(() => useHeroSceneContainer('slab'))

		unmount()
		await flush(LIGHT_INTRO_MS)
		expect(result.current.badgeMode).toBe(EBadgeMode.NONE)
	})
})
