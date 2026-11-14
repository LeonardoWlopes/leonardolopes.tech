import { describe, expect, it } from 'vitest'
import { canRenderHeavyWebgl } from '../device'

function canvasWith(context: unknown) {
	return () => ({ getContext: () => context }) as unknown as HTMLCanvasElement
}

const strong = { hardwareConcurrency: 8, deviceMemory: 8 }

describe('canRenderHeavyWebgl', () => {
	it('accepts a capable device with WebGL2', () => {
		expect(canRenderHeavyWebgl(strong, canvasWith({}))).toBe(true)
	})

	it('accepts browsers that do not report memory', () => {
		expect(
			canRenderHeavyWebgl({ hardwareConcurrency: 4 }, canvasWith({})),
		).toBe(true)
	})

	it('rejects data saver, few cores, low memory or no WebGL2', () => {
		expect(
			canRenderHeavyWebgl(
				{ ...strong, connection: { saveData: true } },
				canvasWith({}),
			),
		).toBe(false)
		expect(
			canRenderHeavyWebgl({ hardwareConcurrency: 2 }, canvasWith({})),
		).toBe(false)
		expect(
			canRenderHeavyWebgl({ ...strong, deviceMemory: 2 }, canvasWith({})),
		).toBe(false)
		expect(canRenderHeavyWebgl(strong, canvasWith(null))).toBe(false)
	})

	it('rejects when creating the context throws', () => {
		const broken = () => {
			throw new Error('no canvas')
		}
		expect(canRenderHeavyWebgl(strong, broken)).toBe(false)
	})
})
