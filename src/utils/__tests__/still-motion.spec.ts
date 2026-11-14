import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { mockMatchMedia } from '~test/helpers'
import { writeMotionPaused } from '../motion-preference'
import { useStillMotion } from '../still-motion'

describe('useStillMotion', () => {
	it('holds still under reduced motion', () => {
		mockMatchMedia(true)
		const { result } = renderHook(() => useStillMotion())
		expect(result.current).toBe(true)
	})

	it('follows the page pause control', () => {
		mockMatchMedia(false)
		const { result } = renderHook(() => useStillMotion())
		expect(result.current).toBe(false)

		act(() => writeMotionPaused(true))
		expect(result.current).toBe(true)
	})
})
