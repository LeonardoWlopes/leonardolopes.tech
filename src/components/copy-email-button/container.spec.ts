import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { COPY_FEEDBACK_MS, useCopyEmailButtonContainer } from './container'

const { devError } = vi.hoisted(() => ({ devError: vi.fn() }))

vi.mock('~/utils/log', () => ({ devError }))

describe('useCopyEmailButtonContainer', () => {
	const writeText = vi.fn()

	beforeEach(() => {
		vi.useFakeTimers()
		Object.defineProperty(navigator, 'clipboard', {
			value: { writeText },
			configurable: true,
		})
	})

	it('copies the email and resets the feedback after a while', async () => {
		writeText.mockResolvedValue(undefined)
		const { result } = renderHook(() =>
			useCopyEmailButtonContainer('me@example.com'),
		)

		await act(() => result.current.handleCopy())

		expect(writeText).toHaveBeenCalledWith('me@example.com')
		expect(result.current.isCopied).toBe(true)
		expect(result.current.announcement).toBe('Email copied')

		act(() => vi.advanceTimersByTime(COPY_FEEDBACK_MS))

		expect(result.current.isCopied).toBe(false)
	})

	it('keeps the idle state when the clipboard rejects', async () => {
		writeText.mockRejectedValue(new Error('denied'))
		const { result } = renderHook(() =>
			useCopyEmailButtonContainer('me@example.com'),
		)

		await act(() => result.current.handleCopy())

		expect(result.current.isCopied).toBe(false)
		expect(result.current.announcement).toMatch(/Could not copy/)
		expect(devError).toHaveBeenCalled()

		act(() => vi.advanceTimersByTime(COPY_FEEDBACK_MS))
		expect(result.current.announcement).toBe('')
	})
})
