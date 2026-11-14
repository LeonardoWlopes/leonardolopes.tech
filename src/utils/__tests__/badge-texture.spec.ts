import { describe, expect, it, vi } from 'vitest'
import { BADGE_SIZE, renderBadgeBack, renderBadgeFront } from '../badge-texture'
import { HOME_HERO } from '../mock'

const { ImageResponse } = vi.hoisted(() => ({
	ImageResponse: vi.fn(function ImageResponse() {}),
}))

vi.mock('next/og', () => ({ ImageResponse }))
vi.mock('node:fs/promises', () => {
	const readFile = vi.fn(async (_path: string, encoding?: string) =>
		encoding ? '<svg><path fill="currentColor"/></svg>' : Buffer.from('font'),
	)
	return { readFile, default: { readFile } }
})

/** Every string rendered in a JSX tree, depth first */
function textOf(node: unknown): string {
	if (typeof node === 'string' || typeof node === 'number') return String(node)
	if (Array.isArray(node)) return node.map(textOf).join(' ')
	if (node && typeof node === 'object' && 'props' in node) {
		return textOf((node as { props: { children?: unknown } }).props.children)
	}
	return ''
}

describe('badge textures', () => {
	it('renders the front with the name, role and start year', async () => {
		await renderBadgeFront()
		const [tree, options] = ImageResponse.mock.lastCall as unknown as [
			unknown,
			{ width: number; height: number; fonts: unknown[] },
		]

		expect(options).toMatchObject(BADGE_SIZE)
		expect(options.fonts).toHaveLength(3)
		expect(textOf(tree)).toContain('Leonardo Lopes')
		expect(textOf(tree)).toContain(HOME_HERO.role)
		expect(textOf(tree)).toContain('IN PRODUCTION SINCE 2020')
	})

	it('renders the back with the closing line and the domain', async () => {
		await renderBadgeBack()
		const [tree] = ImageResponse.mock.lastCall as unknown as [unknown]

		expect(textOf(tree)).toContain(HOME_HERO.closingLine)
		expect(textOf(tree)).toContain('leonardolopes.tech')
	})
})
