import Link from 'next/link'
import { cn } from '~/lib/utils'
import type { IOutcomeLedgerProps } from './types'

export function OutcomeLedger({
	outcomes,
	className,
	testId = 'outcome-ledger',
}: IOutcomeLedgerProps) {
	return (
		<ol
			data-testid={testId}
			className={cn('ledger border-border border-t', className)}
		>
			{outcomes.map((outcome) => (
				<li key={outcome.href} className="relative border-border border-b">
					<Link
						href={outcome.href}
						data-testid={`${testId}-row`}
						className="ledger-row grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-1 rounded-sm py-3 focus-visible:outline-offset-4 sm:grid-cols-[12rem_minmax(0,1fr)_13rem] sm:gap-x-10 sm:py-5"
					>
						<span className="flex flex-col gap-2">
							<span className="font-medium font-mono text-[clamp(2rem,2.4vw+1rem,3.75rem)] text-foreground leading-none tracking-tight">
								{outcome.metric}
							</span>

							<span className="text-muted-foreground text-sm">
								{outcome.unit}
							</span>

							<span className="font-mono text-muted-foreground text-xs">
								{outcome.period}
							</span>
						</span>

						<span className="order-last col-span-2 flex max-w-[52ch] flex-col gap-3 sm:order-0 sm:col-span-1">
							<span className="text-pretty text-foreground/85 text-sm leading-relaxed sm:text-base">
								{outcome.summary}
							</span>

							{outcome.stack && (
								<span className="text-neon-soft text-xs sm:text-sm">
									<span className="sr-only">Built with </span>
									{outcome.stack.join(' · ')}
								</span>
							)}
						</span>

						<span className="flex flex-col items-end gap-1 text-right text-muted-foreground text-sm sm:items-start sm:text-left">
							<span className="font-medium text-foreground">
								{outcome.client}
							</span>

							<span>
								{outcome.role} at {outcome.employer}
							</span>

							{outcome.isCurrent && (
								<span className="mt-1 flex items-center gap-2 font-medium text-neon-soft text-xs">
									<span
										aria-hidden
										className="size-1.5 rounded-full bg-neon-soft"
									/>
									Now · in production
								</span>
							)}
						</span>
					</Link>
				</li>
			))}
		</ol>
	)
}
