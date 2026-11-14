import { describe, expect, it } from 'vitest'
import { canRender3dBadge } from '../device'

function canvasWith(context: unknown) {
	return () => ({ getContext: () => context }) as unknown as HTMLCanvasElement
}

const strong = { hardwareConcurrency: 8, deviceMemory: 8 }

describe('canRender3dBadge', () => {
	it('accepts a capable device with WebGL2', () => {
		expect(canRender3dBadge(strong, canvasWith({}))).toBe(true)
	})

	it('accepts browsers that do not report memory', () => {
		expect(canRender3dBadge({ hardwareConcurrency: 4 }, canvasWith({}))).toBe(
			true,
		)
	})

	it('rejects data saver, few cores, low memory or no WebGL2', () => {
		expect(
			canRender3dBadge(
				{ ...strong, connection: { saveData: true } },
				canvasWith({}),
			),
		).toBe(false)
		expect(canRender3dBadge({ hardwareConcurrency: 2 }, canvasWith({}))).toBe(
			false,
		)
		expect(
			canRender3dBadge({ ...strong, deviceMemory: 2 }, canvasWith({})),
		).toBe(false)
		expect(canRender3dBadge(strong, canvasWith(null))).toBe(false)
	})

	it('rejects when creating the context throws', () => {
		const broken = () => {
			throw new Error('no canvas')
		}
		expect(canRender3dBadge(strong, broken)).toBe(false)
	})
})
