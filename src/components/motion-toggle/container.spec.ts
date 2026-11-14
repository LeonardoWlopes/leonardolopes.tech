import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useMotionToggleContainer } from './container'

describe('useMotionToggleContainer', () => {
	it('toggles the stored motion preference', () => {
		const { result } = renderHook(() => useMotionToggleContainer())
		expect(result.current.isPaused).toBe(false)

		act(() => result.current.handleToggle())
		expect(result.current.isPaused).toBe(true)

		act(() => result.current.handleToggle())
		expect(result.current.isPaused).toBe(false)
	})

	it('mirrors the preference on <html> for CSS animations', () => {
		const { result } = renderHook(() => useMotionToggleContainer())
		expect(document.documentElement.dataset.motion).toBeUndefined()

		act(() => result.current.handleToggle())
		expect(document.documentElement.dataset.motion).toBe('paused')

		act(() => result.current.handleToggle())
		expect(document.documentElement.dataset.motion).toBeUndefined()
	})
})
