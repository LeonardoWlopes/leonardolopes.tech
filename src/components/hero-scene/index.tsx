'use client'

import dynamic from 'next/dynamic'
import { LaserFlow } from '~/components/ui/laser-flow'
import { cn } from '~/lib/utils'
import { EBadgeMode, useHeroSceneContainer } from './container'
import type { IHeroSceneProps } from './types'

const BADGE_FRONT = '/brand/badge-front.webp'
const BADGE_BACK = '/brand/badge-back.webp'

const Lanyard = dynamic(
	() =>
		import('./container')
			.then(({ loadLanyard }) => loadLanyard())
			.then((module) => module.Lanyard),
	// The badge only mounts once its module is loaded, so nothing shows meanwhile
	{ ssr: false, loading: () => null },
)

/**
 * The hero's light: a laser beam that pours onto the cost slab, and the
 * owner's 3D badge hanging in it. Desktop only for the badge physics.
 */
export function HeroScene({
	surfaceId,
	className,
	testId = 'hero-scene',
}: IHeroSceneProps) {
	const {
		surfaceRef,
		reducedMotion,
		isStill,
		isDesktop,
		badgeMode,
		isBadgeReady,
		markBadgeReady,
	} = useHeroSceneContainer(surfaceId)

	return (
		<div
			aria-hidden
			data-testid={testId}
			className={cn('pointer-events-none absolute inset-0', className)}
		>
			{isDesktop ? (
				<LaserFlow
					className="absolute inset-0 mask-[linear-gradient(to_bottom,#000_calc(100%-9rem),transparent_100%)]"
					surfaceRef={surfaceRef}
					color="#2f6bff"
					beamPosition={isDesktop ? 0.75 : 0.93}
					intensity={1.1}
					fog={0.6}
					spill={0.35}
					mouseInteraction={false}
					intro={!reducedMotion}
					paused={isStill}
					dpr={1.5}
				/>
			) : (
				// Phones get a CSS beam: no WebGL on the critical path
				<span className="css-beam absolute inset-y-0 -right-5 w-12" />
			)}

			{isDesktop && badgeMode !== EBadgeMode.NONE && (
				<div
					className={cn(
						// Starts above the viewport so the strap never shows its end, even mid-bounce
						'pointer-events-auto absolute top-[-12svh] right-0 h-[112svh] w-[min(50vw,52rem)]',
						badgeMode === EBadgeMode.THREE_D &&
							(isBadgeReady ? 'badge-stage' : 'opacity-0'),
					)}
				>
					{badgeMode === EBadgeMode.THREE_D ? (
						<Lanyard
							frontImage={BADGE_FRONT}
							backImage={BADGE_BACK}
							cardColor="#04060c"
							strapColor="#0b1a3a"
							metal="graphite"
							finish="glossy"
							size={0.375}
							strapLength={0.9}
							damping={0.85}
							elasticity={0.3}
							breeze={isStill ? 0 : 0.7}
							// The stage drops in instead of the wide sideways swing
							intro={false}
							interactive={!reducedMotion}
							// Click flips the card; no dragging, only the breeze sways it
							draggable={false}
							onReady={markBadgeReady}
						/>
					) : (
						// biome-ignore lint/performance/noImgElement: static badge for devices without the 3D one
						<img
							src={BADGE_FRONT}
							alt=""
							width={800}
							height={1125}
							className="badge-drop absolute top-[35%] left-1/2 w-[min(19rem,55%)] -translate-x-1/2 rotate-3 rounded-2xl shadow-neon"
						/>
					)}
				</div>
			)}
		</div>
	)
}
