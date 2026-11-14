import Image from 'next/image'
import type { IExperienceRoleEntry } from '~/interfaces/experience'
import { cn } from '~/lib/utils'
import { buildExperienceGroups } from '~/utils/experience'
import type { IExperiencesTimelineProps } from './types'

function RoleResult({ role }: { role: IExperienceRoleEntry }) {
	if (!role.outcome) return null

	const { metric, unit, isScope } = role.outcome

	return (
		<div className="flex flex-col gap-2 border-border/60 border-t pt-5 xl:border-t-0 xl:border-l xl:pt-1 xl:pl-8">
			<p className="flex flex-col gap-1">
				<span className="sr-only">
					{isScope ? 'Scope: ' : 'Measured result: '}
				</span>

				<span
					className={cn(
						'font-medium font-mono text-[clamp(2rem,1.6vw+1.25rem,3rem)] leading-none tracking-tight',
						role.isCurrent ? 'text-neon-soft' : 'text-foreground',
					)}
				>
					{metric}
				</span>

				<span className="text-muted-foreground text-sm">{unit}</span>
			</p>
		</div>
	)
}

export function ExperiencesTimeline({
	experiences,
	outcomes,
	now,
	className,
	testId = 'experiences-timeline',
}: IExperiencesTimelineProps) {
	const groups = buildExperienceGroups(experiences, outcomes, now)

	return (
		<div data-testid={testId} className={cn('flex flex-col', className)}>
			{groups.map((group) => (
				<section
					key={group.id}
					aria-labelledby={group.id}
					data-testid={`${testId}-employer`}
					className="grid gap-10 border-border/60 border-t py-[clamp(3rem,7vw,5.5rem)] lg:grid-cols-[minmax(0,4fr)_minmax(0,10fr)] lg:gap-16"
				>
					<header className="flex flex-col gap-4 lg:self-start lg:[@media(min-height:44rem)]:sticky lg:[@media(min-height:44rem)]:top-32">
						<div className="flex items-center gap-4">
							<Image
								src={group.icon}
								alt=""
								width={56}
								height={56}
								className={cn(
									'size-12 rounded-xl object-cover ring-1 ring-neon-soft/30',
									group.company === 'Freelance' && 'bg-foreground p-1.5',
								)}
							/>

							<h2
								id={group.id}
								className="font-medium text-[clamp(1.75rem,1.6vw+1rem,2.75rem)] text-foreground leading-none tracking-[-0.03em]"
							>
								{group.company}
							</h2>
						</div>

						<p className="font-medium text-neon-soft text-sm">
							{group.relation}
						</p>

						<p className="font-mono text-muted-foreground text-xs">
							{group.period} · {group.duration}
						</p>

						{group.clients.length > 1 && (
							<ul aria-label="Clients" className="flex flex-wrap gap-2">
								{group.clients.map((client) => (
									<li
										key={client}
										className="rounded-full border border-neon-soft/20 bg-background/60 px-3 py-1 text-foreground/85 text-xs"
									>
										{client}
									</li>
								))}
							</ul>
						)}

						{group.summary && (
							<p className="max-w-[44ch] text-pretty text-foreground/85 text-sm leading-relaxed">
								{group.summary}
							</p>
						)}
					</header>

					<ol className="flex flex-col">
						{group.roles.map((role) => (
							<li
								key={role.slug}
								id={role.slug}
								data-testid={`${testId}-role`}
								className="relative scroll-mt-28 pb-14 pl-8 last:pb-0 sm:pl-12"
							>
								<span
									aria-hidden
									className="absolute inset-y-0 left-0 w-px bg-neon-soft/20"
								/>

								<span
									aria-hidden
									className="timeline-fill -translate-x-1/2 absolute inset-y-0 left-0 w-0.5"
								/>

								{role.isCurrent && (
									<span
										aria-hidden
										className="neon-rule -translate-x-1/2 absolute inset-y-0 left-0 w-0.5"
									/>
								)}

								<span
									aria-hidden
									className={cn(
										'-translate-x-1/2 absolute top-2 left-0 size-3 rounded-full border-2',
										role.isCurrent
											? 'border-neon-soft bg-neon shadow-neon-dot'
											: 'timeline-dot border-neon-soft/50 bg-background',
									)}
								/>

								<div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_15rem] xl:gap-10">
									<div className="flex flex-col gap-3">
										{role.isCurrent && (
											<p className="flex items-center gap-2 font-medium text-neon-soft text-xs">
												<span
													aria-hidden
													className="size-1.5 rounded-full bg-neon-soft"
												/>
												Now · in production
											</p>
										)}

										<h3 className="text-balance font-medium text-[clamp(1.375rem,0.8vw+1.1rem,1.875rem)] text-foreground leading-tight tracking-[-0.02em]">
											{role.position}

											{role.client && (
												<>
													<span className="text-muted-foreground"> for </span>
													<span className="text-neon-soft">{role.client}</span>
												</>
											)}
										</h3>

										<p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-muted-foreground text-xs">
											<span>
												{group.isFreelance
													? 'Freelance'
													: `${group.company} client`}
											</span>

											<span aria-hidden>·</span>
											<span>{role.period}</span>
											<span aria-hidden>·</span>
											<span>{role.duration}</span>
										</p>

										<p className="mt-1 max-w-[68ch] text-pretty text-foreground/85 leading-relaxed">
											{role.description}
										</p>
									</div>

									<RoleResult role={role} />
								</div>
							</li>
						))}
					</ol>
				</section>
			))}
		</div>
	)
}
