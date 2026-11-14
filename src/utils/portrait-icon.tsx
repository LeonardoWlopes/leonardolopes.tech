import { ImageResponse } from 'next/og'
import { inkDataUrl, readPortraitSvg } from './brand-assets'

/** Shared by the favicon and the Apple touch icon: the hand-drawn portrait in white ink on midnight */
export async function renderPortraitIcon(side: number) {
	const portrait = await readPortraitSvg()
	const src = inkDataUrl(portrait, '#eef2ff')
	const width = Math.round(side * 0.78)

	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'radial-gradient(circle at 50% 70%, #1558c9, #030407 70%)',
			}}
		>
			{/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img */}
			<img src={src} width={width} height={Math.round(width * 1.164)} alt="" />
		</div>,
		{ width: side, height: side },
	)
}
