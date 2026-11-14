import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cacheLife } from 'next/cache'

/**
 * Brand files read by the generated images (icons, Open Graph). Every read is
 * cached so those routes prerender at build time: an uncached file read would
 * make them render on every request.
 */
export async function readPortraitSvg() {
	'use cache'
	cacheLife('max')

	return readFile(join(process.cwd(), 'public/brand/portrait.svg'), 'utf8')
}

/** A font from src/assets/fonts as base64, so the cached value stays serializable */
export async function readFontBase64(file: string) {
	'use cache'
	cacheLife('max')

	const font = await readFile(join(process.cwd(), 'src/assets/fonts', file))
	return font.toString('base64')
}

/** Geist weights for ImageResponse, which cannot use the site's next/font files */
export async function loadImageFonts() {
	const [medium, semibold, mono] = await Promise.all([
		readFontBase64('Geist-Medium.ttf'),
		readFontBase64('Geist-SemiBold.ttf'),
		readFontBase64('GeistMono-Regular.ttf'),
	])

	return [
		{ name: 'Geist', data: Buffer.from(medium, 'base64'), weight: 500 },
		{ name: 'Geist', data: Buffer.from(semibold, 'base64'), weight: 600 },
		{ name: 'Geist Mono', data: Buffer.from(mono, 'base64'), weight: 400 },
	] as const
}

/** SVG markup as a data URL, with currentColor painted in the given color */
export function inkDataUrl(svg: string, color: string) {
	return `data:image/svg+xml;base64,${Buffer.from(svg.replace('currentColor', color)).toString('base64')}`
}
