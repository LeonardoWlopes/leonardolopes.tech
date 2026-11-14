import { ImageResponse } from 'next/og'
import {
	gridDataUrl,
	inkDataUrl,
	loadImageFonts,
	readPortraitSvg,
} from '~/utils/brand-assets'
import { HOME_HERO } from '~/utils/mock'

export const alt =
	'Leonardo Lopes, tech lead, software engineer and architect: web, backend, mobile and cloud systems in production'

export const size = { width: 1200, height: 630 }

export const contentType = 'image/png'

/** Where the beam runs and where it lands, shared by every light layer */
const BEAM_X = 880
const SURFACE_Y = 486

const MIDNIGHT = '#030407'
const FOREGROUND = '#eef2ff'
const MUTED = '#a9b4d6'
const NEON = '#2f6bff'
const NEON_SOFT = '#7aa6ff'

const GRID = gridDataUrl(1200, 630)

/*
 * The home hero as a still: a cobalt grid, the beam falling behind the badge
 * and spreading on a lit surface, the headline in Geist. Built from local
 * assets only, so the build never fetches the live domain.
 */
export default async function OpenGraphImage() {
	const [portrait, fonts] = await Promise.all([
		readPortraitSvg(),
		loadImageFonts(),
	])

	return new ImageResponse(
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				display: 'flex',
				background: MIDNIGHT,
				color: FOREGROUND,
				fontFamily: 'Geist',
				overflow: 'hidden',
			}}
		>
			{/* Blueprint grid (an SVG pattern: Satori ignores backgroundSize) */}
			{/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img */}
			<img
				src={GRID}
				width={size.width}
				height={size.height}
				alt=""
				style={{ position: 'absolute', inset: 0 }}
			/>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage: `radial-gradient(circle at 12% 8%, rgba(21,88,201,0.45), transparent 42%), radial-gradient(ellipse 46% 60% at ${BEAM_X}px ${SURFACE_Y}px, rgba(47,107,255,0.42), transparent 70%)`,
				}}
			/>

			{/* The beam: a wide halo and a bright core */}
			<div
				style={{
					position: 'absolute',
					left: BEAM_X - 150,
					top: 0,
					width: 300,
					height: SURFACE_Y,
					backgroundImage:
						'linear-gradient(90deg, transparent, rgba(21,88,201,0.25) 30%, rgba(47,107,255,0.55) 45%, rgba(122,166,255,0.85) 50%, rgba(47,107,255,0.55) 55%, rgba(21,88,201,0.25) 70%, transparent)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: BEAM_X - 5,
					top: 0,
					width: 10,
					height: SURFACE_Y,
					backgroundImage: `linear-gradient(to bottom, ${NEON_SOFT}, #dfe8ff 50%, #ffffff)`,
					boxShadow: `0 0 24px ${NEON}, 0 0 60px rgba(47,107,255,0.6)`,
				}}
			/>

			{/* Where the beam lands: a light pool on a lit surface */}
			<div
				style={{
					position: 'absolute',
					left: BEAM_X - 420,
					top: SURFACE_Y - 110,
					width: 840,
					height: 220,
					backgroundImage:
						'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.95), rgba(122,166,255,0.6) 18%, rgba(47,107,255,0.22) 45%, transparent 72%)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: SURFACE_Y - 1,
					width: '100%',
					height: 2,
					backgroundImage: `linear-gradient(90deg, transparent, rgba(47,107,255,0.45) 25%, ${NEON_SOFT} 55%, #ffffff 73%, ${NEON_SOFT} 88%, transparent)`,
					boxShadow: `0 0 18px ${NEON}`,
				}}
			/>

			{/* The badge hanging in the beam */}
			<div
				style={{
					position: 'absolute',
					left: BEAM_X - 20,
					top: 0,
					width: 40,
					height: 96,
					background: '#0b1a3a',
					borderLeft: '1px solid rgba(122,166,255,0.25)',
					borderRight: '1px solid rgba(122,166,255,0.25)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: BEAM_X - 130,
					top: 92,
					width: 260,
					height: 336,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: '18px 22px 24px',
					borderRadius: 24,
					border: '1px solid rgba(122,166,255,0.3)',
					backgroundImage:
						'linear-gradient(to bottom, #111827, #0a0e1a 55%, #0b1530)',
					boxShadow: '0 0 60px rgba(47,107,255,0.4)',
				}}
			>
				<div
					style={{
						width: 62,
						height: 10,
						borderRadius: 999,
						background: NEON,
						boxShadow: `0 0 12px ${NEON}`,
					}}
				/>
				{/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img */}
				<img
					src={inkDataUrl(portrait, FOREGROUND)}
					width={168}
					height={196}
					alt=""
					style={{ marginTop: 18 }}
				/>
				<div
					style={{
						marginTop: 'auto',
						display: 'flex',
						flexDirection: 'column',
						alignSelf: 'stretch',
						gap: 4,
					}}
				>
					<div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5 }}>
						Leonardo Lopes
					</div>
					<div
						style={{
							fontFamily: 'Geist Mono',
							fontSize: 11,
							color: NEON_SOFT,
							letterSpacing: 1.5,
						}}
					>
						IN PRODUCTION SINCE 2020
					</div>
				</div>
			</div>

			{/* Copy */}
			<div
				style={{
					position: 'absolute',
					left: 72,
					top: 72,
					width: 600,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<div style={{ fontSize: 26, fontWeight: 500, color: NEON_SOFT }}>
					Leonardo Lopes
				</div>
				<div
					style={{
						marginTop: 22,
						display: 'flex',
						flexDirection: 'column',
						fontSize: 72,
						fontWeight: 600,
						lineHeight: 1,
						letterSpacing: -2.8,
					}}
				>
					<div>Software running</div>
					<div style={{ display: 'flex' }}>
						<span>in&nbsp;</span>
						<span style={{ color: NEON_SOFT }}>production</span>
						<span style={{ marginLeft: -2 }}>.</span>
					</div>
				</div>
				<div
					style={{ marginTop: 26, fontSize: 26, fontWeight: 500, color: MUTED }}
				>
					{HOME_HERO.role}
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					left: 72,
					right: 72,
					bottom: 52,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
				}}
			>
				<div style={{ fontSize: 24, fontWeight: 500, color: FOREGROUND }}>
					Web · Backend · Mobile · Cloud
				</div>
				<div
					style={{ fontFamily: 'Geist Mono', fontSize: 22, color: NEON_SOFT }}
				>
					leonardolopes.tech
				</div>
			</div>
		</div>,
		{ ...size, fonts: [...fonts] },
	)
}
