import type { CSSProperties } from 'react'
import type { ITimelineSegment } from '~/interfaces/timeline'
import { cn } from '~/lib/utils'
import { formatMonthYear } from '~/utils/date'
import type { ICareerRulerProps } from './types'

function place({ offset, width }: Pick<ITimelineSegment, 'offset' | 'width'>) {
	return { '--x': `${offset}%`, '--w': `${width}%` } as CSSProperties
}

function period({ start, end }: ITimelineSegment) {
	return `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : 'Present'}`
}

export function CareerRuler({
	timeline,
	className,
	testId = 'career-ruler',
}: ICareerRulerProps) {
	return (
		<div
			data-testid={testId}
			className={cn('career-ruler flex flex-col', className)}
		>
			<div aria-hidden className="relative h-8 border-border border-b">
				{timeline.years.map(({ year, offset }, index) => (
					<span
						key={year}
						className={cn(
							// Too close to the axis start for a phone-width ruler
							index > 0 &&
								offset - timeline.years[index - 1].offset < 12 &&
								'max-sm:hidden',
							'-translate-x-1/2 absolute bottom-2 left-(--x) font-mono text-muted-foreground text-xs first:translate-x-0 last:-translate-x-full',
						)}
						style={{ '--x': `${offset}%` } as CSSProperties}
					>
						{year}
					</span>
				))}
				<span className="ruler-ticks absolute inset-x-0 bottom-0 h-1.5" />
			</div>

			<ol className="flex flex-col">
				{timeline.lanes.map((lane) => (
					<li
						key={lane.label}
						className="flex flex-col gap-3 border-border/60 border-b py-6"
					>
						<div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
							<span className="font-medium text-foreground text-lg">
								{lane.label}
							</span>

							<span className="font-mono text-muted-foreground text-xs">
								{period(lane)}
							</span>
						</div>

						<div aria-hidden className="relative h-2 rounded-full bg-white/5">
							<span
								className={cn(
									'ruler-span absolute inset-y-0 left-(--x) w-(--w) rounded-full',
									lane.end ? 'bg-foreground/45' : 'filament-glow',
								)}
								style={place(lane)}
							/>
						</div>

						{lane.engagements.length > 0 && (
							<ul className="relative hidden h-12 sm:block">
								{lane.engagements.map((engagement, index) => (
									<li
										key={engagement.label}
										className={cn(
											'absolute left-(--x) flex w-(--w) min-w-max flex-col gap-1 border-border border-l pl-2',
											index % 2 === 0 ? 'top-0' : 'top-6',
										)}
										style={place(engagement)}
									>
										<span className="text-muted-foreground text-xs">
											{engagement.label}

											<span className="sr-only">, {period(engagement)}</span>
										</span>
									</li>
								))}
							</ul>
						)}

						{lane.engagements.length > 0 && (
							<p className="text-muted-foreground text-sm sm:hidden">
								{lane.engagements.map(({ label }) => label).join(' · ')}
							</p>
						)}
					</li>
				))}
			</ol>
		</div>
	)
}
