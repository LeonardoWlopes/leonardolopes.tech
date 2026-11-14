import { describe, expect, it, vi } from 'vitest'
import {
	MOTION_STORAGE_KEY,
	readMotionPaused,
	serverMotionPaused,
	subscribeMotionPaused,
	writeMotionPaused,
} from '../motion-preference'

vi.mock('../log', () => ({ devWarn: vi.fn() }))

describe('motion preference store', () => {
	it('reads and writes the paused flag', () => {
		expect(readMotionPaused()).toBe(false)
		writeMotionPaused(true)
		expect(window.localStorage.getItem(MOTION_STORAGE_KEY)).toBe('true')
		expect(readMotionPaused()).toBe(true)
		expect(serverMotionPaused()).toBe(false)
	})

	it('notifies subscribers and unsubscribes', () => {
		const onChange = vi.fn()
		const unsubscribe = subscribeMotionPaused(onChange)

		writeMotionPaused(false)
		window.dispatchEvent(new Event('storage'))
		expect(onChange).toHaveBeenCalledTimes(2)

		unsubscribe()
		writeMotionPaused(true)
		expect(onChange).toHaveBeenCalledTimes(2)
	})

	it('survives a storage that throws', () => {
		vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
			throw new Error('blocked')
		})
		vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
			throw new Error('blocked')
		})

		expect(readMotionPaused()).toBe(false)
		expect(() => writeMotionPaused(true)).not.toThrow()
	})
})
