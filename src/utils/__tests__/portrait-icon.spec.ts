import { describe, expect, it, vi } from 'vitest'
import { renderPortraitIcon } from '../portrait-icon'

const { ImageResponse } = vi.hoisted(() => ({
	ImageResponse: vi.fn(function ImageResponse(
		this: { element: unknown; options: unknown },
		element: unknown,
		options: unknown,
	) {
		this.element = element
		this.options = options
	}),
}))

vi.mock('next/og', () => ({ ImageResponse }))
vi.mock('node:fs/promises', () => {
	const readFile = vi.fn(async () => '<svg fill="currentColor"></svg>')
	return { readFile, default: { readFile } }
})

describe('renderPortraitIcon', () => {
	it('renders a square image at the requested side', async () => {
		await renderPortraitIcon(64)

		expect(ImageResponse).toHaveBeenLastCalledWith(expect.anything(), {
			width: 64,
			height: 64,
		})
	})

	it('inks the portrait in white and scales it to the icon', async () => {
		await renderPortraitIcon(180)

		const [element] = ImageResponse.mock.lastCall as unknown as [
			{ props: { children: { props: Record<string, string | number> } } },
		]
		const img = element.props.children.props
		const svg = Buffer.from(
			String(img.src).replace('data:image/svg+xml;base64,', ''),
			'base64',
		).toString()

		expect(svg).toContain('#eef2ff')
		expect(svg).not.toContain('currentColor')
		expect(img.width).toBe(140)
	})
})
