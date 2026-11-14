import type { CSSProperties } from 'react'
import { cn } from '~/lib/utils'
import type { ICostSlabProps } from './types'

export function CostSlab({
	outcome,
	caption,
	surfaceId,
	className,
	testId = 'cost-slab',
}: ICostSlabProps) {
	const kept = Math.round(outcome.ratio * 100)

	return (
		<figure
			data-testid={testId}
			className={cn(
				'cost-slab grid grid-cols-1 rounded-[2rem] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-x-10',
				className,
			)}
			id={surfaceId}
			style={
				{
					'--slab-ratio': `${kept}%`,
					'--slab-scale': 1 / outcome.ratio,
				} as CSSProperties
			}
		>
			<div className="flex flex-col gap-4">
				<p className="flex items-center gap-2 font-medium text-neon-soft text-sm">
					<span aria-hidden className="size-1.5 rounded-full bg-neon-soft" />
					Cloud bill · {outcome.client} · in production
				</p>

				<p className="font-medium font-mono text-[clamp(4rem,8vw,8.5rem)] text-foreground leading-[0.8] tracking-[-0.04em]">
					{outcome.metric}
				</p>
			</div>

			{/* One caption: beside the metric from sm up, under the bar on phones */}
			<figcaption className="order-last mt-4 max-w-[34ch] text-pretty text-muted-foreground text-sm leading-relaxed sm:order-0 sm:mt-0 sm:pb-1 sm:text-base">
				{caption}
			</figcaption>

			<div
				role="img"
				aria-label={`${outcome.client} cloud bill: 100% before the migration, ${kept}% now`}
				className="relative mt-6 h-11 sm:col-span-2 sm:mt-8 sm:h-14"
			>
				<span className="slab-cut absolute inset-y-0 right-(--slab-ratio) left-0 rounded-l-sm border border-white/25 border-dashed" />

				<span className="slab-emission absolute inset-y-0 right-0 w-(--slab-ratio)">
					<span className="slab-pool absolute inset-x-0 top-full h-48" />

					<span className="slab-lit absolute inset-0 origin-right rounded-r-sm" />
				</span>

				<span
					aria-hidden
					className="slab-label absolute inset-y-0 right-(--slab-ratio) left-0 flex items-center gap-2 px-3 text-muted-foreground text-sm sm:px-4 sm:text-base"
				>
					Before
					<span className="font-medium text-foreground">100%</span>
				</span>

				<span
					aria-hidden
					className="slab-label absolute inset-y-0 right-0 flex w-(--slab-ratio) items-center gap-2 px-3 font-medium text-background text-sm sm:px-4 sm:text-base"
				>
					Now
					<span className="font-semibold">{kept}%</span>
				</span>
			</div>
		</figure>
	)
}
