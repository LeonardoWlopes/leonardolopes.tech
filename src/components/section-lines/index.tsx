'use client'

import { FloatingLines } from '~/components/ui/floating-lines'
import type { IDefaultComponentProps } from '~/interfaces/component'
import { cn } from '~/lib/utils'
import { useSectionLinesContainer } from './container'

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
					linesGradient={['#1558c9', '#2f6bff', '#7aa6ff']}
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
