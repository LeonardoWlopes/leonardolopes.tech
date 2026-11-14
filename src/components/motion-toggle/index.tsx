'use client'

import { Pause, Play } from 'lucide-react'
import type { IDefaultComponentProps } from '~/interfaces/component'
import { cn } from '~/lib/utils'
import { useMotionToggleContainer } from './container'

/** Pauses the page's ambient animations: light beams, line waves, badge sway */
export function MotionToggle({
	className,
	testId = 'motion-toggle',
}: IDefaultComponentProps) {
	const { isPaused, handleToggle } = useMotionToggleContainer()

	return (
		<button
			type="button"
			data-testid={testId}
			aria-pressed={isPaused}
			aria-label="Pause animations"
			title="Pause animations"
			onClick={handleToggle}
			className={cn(
				'inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground',
				className,
			)}
		>
			{isPaused ? (
				<Play className="size-4" aria-hidden />
			) : (
				<Pause className="size-4" aria-hidden />
			)}
		</button>
	)
}
