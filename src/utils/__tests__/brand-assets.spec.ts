import { describe, expect, it, vi } from 'vitest'
import {
	inkDataUrl,
	loadImageFonts,
	readFontBase64,
	readPortraitSvg,
} from '../brand-assets'

vi.mock('node:fs/promises', () => {
	const readFile = vi.fn(async (path: string, encoding?: string) =>
		encoding ? `<svg>${path}</svg>` : Buffer.from(`font:${path}`),
	)
	return { readFile, default: { readFile } }
})

function decode(dataUrl: string) {
	return Buffer.from(
		dataUrl.replace('data:image/svg+xml;base64,', ''),
		'base64',
	).toString()
}

describe('readPortraitSvg', () => {
	it('reads the portrait from public/brand', async () => {
		expect(await readPortraitSvg()).toContain('public/brand/portrait.svg')
	})
})

describe('readFontBase64', () => {
	it('returns the font file as base64', async () => {
		const font = await readFontBase64('Geist-Medium.ttf')

		expect(Buffer.from(font, 'base64').toString()).toContain(
			'src/assets/fonts/Geist-Medium.ttf',
		)
	})
})

describe('loadImageFonts', () => {
	it('loads Geist 500 and 600 and Geist Mono as buffers', async () => {
		const fonts = await loadImageFonts()

		expect(fonts.map(({ name, weight }) => `${name} ${weight}`)).toEqual([
			'Geist 500',
			'Geist 600',
			'Geist Mono 400',
		])
		expect(fonts[1].data.toString()).toContain('Geist-SemiBold.ttf')
	})
})

describe('inkDataUrl', () => {
	it('paints currentColor and encodes the SVG as a data URL', () => {
		const url = inkDataUrl('<path fill="currentColor"/>', '#eef2ff')

		expect(url.startsWith('data:image/svg+xml;base64,')).toBe(true)
		expect(decode(url)).toBe('<path fill="#eef2ff"/>')
	})
})
