import { ImageResponse } from 'next/og'
import {
	glowInkDataUrl,
	gridDataUrl,
	inkDataUrl,
	loadImageFonts,
	readPortraitSvg,
	readSignatureSvg,
} from './brand-assets'
import { HOME_HERO } from './mock'
import { PALETTE } from './palette'
import { getFirstRole } from './role'

/** Texture size of the 3D badge faces (the card's aspect ratio) */
export const BADGE_SIZE = { width: 800, height: 1125 }

const FOREGROUND = '#eef2ff'
const MUTED = '#a7b7d6'

const GRID = gridDataUrl(BADGE_SIZE.width, BADGE_SIZE.height, 40)

const CARD = {
	position: 'relative',
	width: '100%',
	height: '100%',
	display: 'flex',
	color: FOREGROUND,
	fontFamily: 'Geist',
	overflow: 'hidden',
} as const

function Grid() {
	return (
		// biome-ignore lint/performance/noImgElement: ImageResponse renders plain img
		<img
			src={GRID}
			width={BADGE_SIZE.width}
			height={BADGE_SIZE.height}
			alt=""
			style={{ position: 'absolute', inset: 0 }}
		/>
	)
}

/** Front: the hand-drawn portrait lit from below, name, role and start year */
export async function renderBadgeFront() {
	const [portrait, fonts] = await Promise.all([
		readPortraitSvg(),
		loadImageFonts(),
	])
	const since = getFirstRole().startDate.getFullYear()

	return new ImageResponse(
		<div
			style={{
				...CARD,
				backgroundColor: PALETTE.badgeCard,
				backgroundImage:
					'radial-gradient(ellipse 70% 45% at 50% 62%, rgba(21,88,201,0.55), transparent 70%), radial-gradient(ellipse 120% 60% at 50% 120%, rgba(47,107,255,0.45), transparent 60%)',
			}}
		>
			<Grid />

			{/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img */}
			<img
				src={glowInkDataUrl(portrait, FOREGROUND, PALETTE.neonSoft)}
				width={560}
				height={651}
				alt=""
				style={{ position: 'absolute', left: 120, top: 150 }}
			/>

			<div
				style={{
					position: 'absolute',
					left: 64,
					right: 64,
					bottom: 150,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<div
					style={{
						fontSize: 64,
						fontWeight: 600,
						letterSpacing: -1.9,
						lineHeight: 1,
					}}
				>
					Leonardo Lopes
				</div>
				<div
					style={{ marginTop: 18, fontSize: 28, fontWeight: 500, color: MUTED }}
				>
					{HOME_HERO.role}
				</div>
				<div
					style={{
						marginTop: 30,
						fontFamily: 'Geist Mono',
						fontSize: 18,
						letterSpacing: 2.4,
						color: PALETTE.neonSoft,
					}}
				>
					{`IN PRODUCTION SINCE ${since}`}
				</div>
			</div>
		</div>,
		{ ...BADGE_SIZE, fonts: [...fonts] },
	)
}

/** Back: the signature in white ink, the closing line and the domain */
export async function renderBadgeBack() {
	const [signature, fonts] = await Promise.all([
		readSignatureSvg(),
		loadImageFonts(),
	])

	return new ImageResponse(
		<div
			style={{
				...CARD,
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: PALETTE.badgeCard,
				backgroundImage:
					'radial-gradient(ellipse 65% 40% at 50% 46%, rgba(21,88,201,0.5), transparent 72%)',
			}}
		>
			<Grid />

			{/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img */}
			<img
				src={inkDataUrl(signature, '#ffffff')}
				width={600}
				height={218}
				alt=""
				style={{ position: 'absolute', left: 100, top: 400 }}
			/>

			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 140,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 26,
				}}
			>
				<div style={{ fontSize: 24, fontWeight: 500 }}>
					{HOME_HERO.closingLine}
				</div>

				<div
					style={{
						fontFamily: 'Geist Mono',
						fontSize: 22,
						color: MUTED,
					}}
				>
					leonardolopes.tech
				</div>
			</div>
		</div>,
		{ ...BADGE_SIZE, fonts: [...fonts] },
	)
}
