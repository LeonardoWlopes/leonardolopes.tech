/** biome-ignore-all lint/performance/noImgElement: This is a valid use case for img element */

import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'
import { env } from '@/utils/env'

export const runtime = 'edge'

export const alt = ''

export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

export default function () {
	const productImageURL = new URL('memoji.png', env.APP_URL).toString()
	const gradientImageURL = new URL('gradient.svg', env.APP_URL).toString()

	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: colors.stone[950],
			}}
		>
			<img
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
				}}
				src={gradientImageURL}
				alt="gradient"
			/>

			<img
				style={{
					height: '100%',
					margin: 'auto',
				}}
				src={productImageURL}
				alt="memoji"
			/>
		</div>,
		{
			...size,
		},
	)
}
