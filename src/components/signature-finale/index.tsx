'use client'

import dynamic from 'next/dynamic'
import { cn } from '~/lib/utils'
import { LIGHT_GRADIENT, PALETTE } from '~/utils/palette'
import { useSignatureFinaleContainer } from './container'
import { SIGNATURE_PATHS, SIGNATURE_VIEWBOX } from './signature-paths'
import type { ISignatureFinaleProps } from './types'

// The three WebGL layers load only on capable desktops, while the scene is on screen
const GhostFibers = dynamic(
	() =>
		import('~/components/ui/ghost-fibers').then((module) => module.GhostFibers),
	{ ssr: false },
)
const LaserFlow = dynamic(
	() => import('~/components/ui/laser-flow').then((module) => module.LaserFlow),
	{ ssr: false },
)
const Lightfall = dynamic(
	() => import('~/components/ui/lightfall').then((module) => module.Lightfall),
	{ ssr: false },
)

/**
 * The page's closing scene, scrubbed by the scroll (parallax logic from the
 * blog): the beam that followed the page lands in a sea of light, and the
 * owner's signature is drawn stroke by stroke above it. `--p` (0 to 1) is
 * written by the container; every layer derives its own stage, and the
 * `--p: 1` default is the complete still scene.
 */
export function SignatureFinale({
	message,
	children,
	className,
	testId = 'signature-finale',
}: ISignatureFinaleProps) {
	const { attachScene, surfaceRef, showWebgl, isStill } =
		useSignatureFinaleContainer()

	return (
		<section
			ref={attachScene}
			aria-label="Signature"
			data-testid={testId}
			className={cn(
				'signature-finale relative h-[130vh] lg:h-[240vh] has-focus-visible:[--end:1] [--end:clamp(0,calc((var(--p,1)-0.42)/0.1),1)] [--p:1] [--sea:clamp(0,calc(var(--p,1)/0.22),1)] [--sig:clamp(0,calc((var(--p,1)-0.15)/0.25),1)] [--sky:clamp(0,calc(var(--p,1)/0.3),1)]',
				className,
			)}
		>
			<div className="sticky top-0 isolate h-svh min-h-140 overflow-hidden bg-background">
				<div
					aria-hidden
					className="finale-glow absolute inset-0 opacity-[calc(0.3+0.7*var(--sea))]"
				/>

				{showWebgl && (
					<>
						{/* Light raining through the scene, behind everything else */}
						<div
							aria-hidden
							className="absolute inset-0 opacity-[calc(0.25+0.5*var(--sky))] mask-[radial-gradient(75%_70%_at_50%_45%,#000_35%,transparent_85%)]"
						>
							<Lightfall
								colors={[...LIGHT_GRADIENT]}
								backgroundGlow={0}
								speed={isStill ? 0 : 0.25}
								density={0.3}
								streakWidth={0.6}
								glow={0.45}
								bloom={0}
								opacity={0.8}
								twinkle={0.25}
								mouseInteraction={false}
								holdToWarp={false}
								intro={false}
								paused={isStill}
								dpr={1.5}
							/>
						</div>

						{/* Fibers drifting across the middle of the scene */}
						<div
							aria-hidden
							className="absolute inset-x-0 top-[22%] h-[60%] translate-y-[calc((1-var(--sea))*20%)] opacity-(--sea) mask-[linear-gradient(to_bottom,transparent,#000_25%,#000_75%,transparent)]"
						>
							<GhostFibers
								glowColor={PALETTE.neon}
								lineColor={PALETTE.neonSoft}
								secondaryColor={PALETTE.cobalt}
								speed={isStill ? 0 : 0.4}
								vignette={0}
								grain={0}
								mouseInteraction={!isStill}
								pulseOnClick={false}
								intro={false}
								paused={isStill}
								dpr={1.5}
							/>
						</div>

						<div
							aria-hidden
							className="absolute inset-0 mix-blend-screen mask-[linear-gradient(to_bottom,#000_94%,transparent)]"
						>
							<LaserFlow
								className="absolute inset-0"
								surfaceRef={surfaceRef}
								color={PALETTE.neon}
								beamPosition={0.5}
								intensity={1.1}
								fog={0.5}
								spill={1.4}
								mouseInteraction={false}
								intro={false}
								paused={isStill}
								dpr={1.5}
							/>
						</div>
					</>
				)}

				{/* The sea's surface: the beam lands here and spreads along it */}
				<span
					ref={surfaceRef}
					aria-hidden
					className="absolute inset-x-0 bottom-[3%] h-px"
				/>

				{/* The beam runs the full scene and lands at its foot; the signature and actions sit in the middle */}
				<div className="absolute inset-x-0 top-[18%] flex h-[40%] items-end justify-center px-6">
					<svg
						role="img"
						aria-label="Leonardo Lopes, signature"
						viewBox={SIGNATURE_VIEWBOX}
						className="finale-ink max-h-full w-[min(88vw,56rem)] translate-y-[calc((1-var(--sig))*1.5rem)] fill-foreground opacity-(--sig)"
					>
						{SIGNATURE_PATHS.map((d) => (
							<path
								key={d.slice(0, 16)}
								d={d}
								shapeRendering="geometricPrecision"
							/>
						))}
					</svg>
				</div>

				<div className="absolute inset-x-0 top-[64%] flex flex-col items-center gap-6 px-6">
					<p className="translate-y-[calc((1-var(--end))*1.5rem)] font-medium text-[clamp(1.5rem,1.6vw+1rem,2.5rem)] text-foreground tracking-tight opacity-(--end) [text-shadow:0_0_1rem_color-mix(in_oklab,var(--color-midnight)_95%,transparent),0_0_2.5rem_color-mix(in_oklab,var(--color-midnight)_85%,transparent)]">
						{message}
					</p>

					{children && (
						<div className="pointer-events-auto flex translate-y-[calc((1-var(--end))*1.5rem)] flex-wrap justify-center gap-3 opacity-(--end)">
							{children}
						</div>
					)}
				</div>

				<div
					aria-hidden
					className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-background to-transparent"
				/>
			</div>
		</section>
	)
}
