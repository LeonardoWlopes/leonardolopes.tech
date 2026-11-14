'use client'

import dynamic from 'next/dynamic'
import type { IDefaultComponentProps } from '~/interfaces/component'
import { cn } from '~/lib/utils'
import { LIGHT_GRADIENT } from '~/utils/palette'
import { useSectionLinesContainer } from './container'

// WebGL code loads only when the lines mount (desktop, on screen)
const FloatingLines = dynamic(
	() =>
		import('~/components/ui/floating-lines').then(
			(module) => module.FloatingLines,
		),
	{ ssr: false },
)

/** Cobalt light lines drifting behind a section; still under reduced motion */
export function SectionLines({
	className,
	testId = 'section-lines',
}: IDefaultComponentProps) {
	const { attachRef, shouldRender, reducedMotion } = useSectionLinesContainer()

	return (
		<div
			ref={attachRef}
			aria-hidden
			data-testid={testId}
			className={cn('pointer-events-none absolute inset-0 -z-10', className)}
		>
			{shouldRender && (
				<FloatingLines
					linesGradient={[...LIGHT_GRADIENT]}
					animationSpeed={reducedMotion ? 0 : 0.6}
					interactive={!reducedMotion}
					parallax={!reducedMotion}
					opacity={0.9}
					edgeFade={0.4}
					intro={!reducedMotion}
					dpr={1.5}
				/>
			)}
		</div>
	)
}
