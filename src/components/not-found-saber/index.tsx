import type { CSSProperties } from 'react'
import { ESaberSide } from '~/enums/saber'
import type { IDefaultComponentProps } from '~/interfaces/component'
import { cn } from '~/lib/utils'

/** Direction each clash spark flies, as a CSS translate */
const SPARKS = [
	['-3.5rem', '-2.5rem'],
	['3rem', '-3rem'],
	['-2.5rem', '2rem'],
	['3.5rem', '1.5rem'],
	['0.5rem', '-4rem'],
	['-0.5rem', '3.5rem'],
]

function Saber({ side }: { side: ESaberSide }) {
	return (
		<div className={`saber saber-${side}`}>
			<div className="saber-glow absolute inset-x-0 top-0 bottom-22 origin-bottom">
				<span className="saber-halo absolute inset-0 rounded-full" />
				<span className="saber-blade absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 rounded-full" />
			</div>

			<span className="saber-emitter absolute bottom-19 left-1/2 h-3 w-5 -translate-x-1/2 rounded-t-sm" />
			<span className="saber-hilt absolute bottom-2 left-1/2 h-19 w-4 -translate-x-1/2" />
			<span className="saber-emitter absolute bottom-0 left-1/2 h-2 w-4.5 -translate-x-1/2 rounded-b-sm" />
		</div>
	)
}

/**
 * A nod to "not the droids you are looking for": two energy blades, blue and
 * red, crossed in a duel. They ignite one after the other, hum, and clash
 * every few seconds with a flare and sparks at the crossing. All CSS
 * (`.saber*` in globals.css); reduced motion or the header's pause control
 * (`html[data-motion="paused"]`) leaves them lit, crossed and still.
 */
export function NotFoundSaber({
	className,
	testId = 'not-found-saber',
}: IDefaultComponentProps) {
	return (
		<div
			aria-hidden
			data-testid={testId}
			className={cn(
				'saber-duel pointer-events-none h-136 w-88 max-sm:relative max-sm:mx-auto max-sm:mt-4 max-sm:[zoom:0.48] sm:absolute sm:top-[45%] sm:-translate-y-1/2',
				className,
			)}
		>
			<Saber side={ESaberSide.BLUE} />
			<Saber side={ESaberSide.RED} />

			<span className="saber-flare absolute top-78 left-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full" />
			{SPARKS.map(([x, y]) => (
				<span
					key={`${x}${y}`}
					className="saber-spark absolute top-78 left-1/2 size-1 rounded-full"
					style={{ '--spark-x': x, '--spark-y': y } as CSSProperties}
				/>
			))}
		</div>
	)
}
