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

export async function readSignatureSvg() {
	'use cache'
	cacheLife('max')

	return readFile(join(process.cwd(), 'public/brand/signature.svg'), 'utf8')
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

/**
 * SVG markup with currentColor replaced by a vertical gradient and a soft
 * glow, as a data URL. Satori has no CSS filters, so the glow lives in the SVG.
 */
export function glowInkDataUrl(svg: string, top: string, bottom: string) {
	const defs = `<defs><linearGradient id="ink" x1="0" y1="0" x2="0" y2="1"><stop offset="0.35" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient><filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`
	const painted = svg
		.replace(/(<svg[^>]*>)/, `$1${defs}<g filter="url(#glow)">`)
		.replace('</svg>', '</g></svg>')
		.replace('currentColor', 'url(#ink)')

	return `data:image/svg+xml;base64,${Buffer.from(painted).toString('base64')}`
}

/** The blueprint grid as an SVG data URL (Satori ignores backgroundSize), faded at the edges */
export function gridDataUrl(width: number, height: number, cell = 48) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><defs><pattern id="g" width="${cell}" height="${cell}" patternUnits="userSpaceOnUse"><path d="M${cell} 0H0V${cell}" fill="none" stroke="rgba(122,166,255,0.1)" stroke-width="1"/></pattern><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0.2"/><stop offset="0.5" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0.35"/></linearGradient><mask id="m"><rect width="${width}" height="${height}" fill="url(#f)"/></mask></defs><rect width="${width}" height="${height}" fill="url(#g)" mask="url(#m)"/></svg>`

	return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}
