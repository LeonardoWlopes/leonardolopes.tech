import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SectionLines } from '~/components/section-lines'
import { TechCard } from '~/components/tech-card'
import { buttonVariants } from '~/components/ui/button/styles'
import { cn } from '~/lib/utils'
import { toSlug } from '~/utils/slug'
import { groupTechsByCategory } from '~/utils/tech'

const GUTTER = 'px-[clamp(1.25rem,5vw,6rem)]'

const GROUPS = groupTechsByCategory()
	.filter(({ items }) => items.length > 0)
	.map((group) => ({ ...group, id: toSlug(group.name) }))

function pad(value: number) {
	return String(value).padStart(2, '0')
}

export function TechnologiesScreen() {
	return (
		<div className="bleed flex w-full flex-col">
			<section
				aria-labelledby="technologies-title"
				className={`blueprint relative isolate -mt-20 flex flex-col gap-10 overflow-hidden pt-32 pb-[clamp(3rem,7vw,5rem)] sm:-mt-32 sm:pt-48 ${GUTTER}`}
			>
				<SectionLines className="opacity-60 mask-[linear-gradient(to_right,transparent_40%,#000_70%)]" />

				<div className="flex max-w-[min(100%,52rem)] flex-col gap-6">
					<h1
						id="technologies-title"
						className="text-balance font-semibold text-[clamp(2.5rem,4.6vw+0.5rem,6rem)] text-foreground leading-[0.98] tracking-[-0.04em]"
					>
						Technologies I use, from the{' '}
						<span className="text-neon-soft">language</span> to the{' '}
						<span className="text-neon-soft">cloud</span>.
					</h1>

					<p className="max-w-[52ch] text-pretty text-lg text-muted-foreground">
						What I reach for, layer by layer, from the interface to the cloud it
						runs on, each linked to its official site. Each system gets the
						tools it needs, and{' '}
						<span className="text-foreground">
							the list keeps growing as I learn
						</span>
						.
					</p>
				</div>

				<dl
					aria-label="Legend"
					className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8"
				>
					<div className="flex items-center gap-3">
						<dt className="flex items-center">
							<span
								aria-hidden
								className="size-2 rounded-full bg-neon-soft shadow-neon-dot"
							/>
							<span className="sr-only">Tiles without a label</span>
						</dt>
						<dd className="text-foreground">Professional experience</dd>
					</div>

					<div className="flex items-center gap-3">
						<dt className="flex items-center">
							<span
								aria-hidden
								className="size-2 rounded-full ring-1 ring-muted-foreground"
							/>
							<span className="sr-only">
								Tiles labeled “Personal / academic”
							</span>
						</dt>
						<dd className="text-muted-foreground">
							Personal projects and academic studies, not professional
							experience
						</dd>
					</div>
				</dl>

				<nav aria-label="Technology categories">
					<ul className="-mx-[clamp(1.25rem,5vw,6rem)] flex gap-2 overflow-x-auto px-[clamp(1.25rem,5vw,6rem)] pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
						{GROUPS.map(({ id, name, items }) => (
							<li key={id}>
								<a
									href={`#${id}`}
									className="inline-flex min-h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/60 px-3.5 text-foreground text-sm transition-colors hover:border-neon-soft/50 hover:text-neon-soft"
								>
									{name}
									<span className="font-mono text-muted-foreground text-xs tabular-nums">
										{pad(items.length)}
										<span className="sr-only"> technologies</span>
									</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</section>

			<div className={`flex flex-col ${GUTTER}`}>
				{GROUPS.map(({ id, name, items }) => (
					<section
						key={id}
						id={id}
						className="grid scroll-mt-28 gap-5 border-border/60 border-t py-[clamp(2rem,3.5vw,3rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-10"
					>
						<div className="flex items-baseline justify-between gap-6 lg:sticky lg:top-28 lg:flex-col lg:justify-start lg:gap-2 lg:self-start">
							<h2
								id={`${id}-title`}
								className="text-balance font-medium text-[clamp(1.5rem,1.2vw+1rem,2.25rem)] text-foreground leading-[1.1] tracking-[-0.02em]"
							>
								{name}
							</h2>

							<p className="shrink-0 font-mono text-neon-soft text-sm tabular-nums">
								{pad(items.length)}
								<span className="sr-only"> technologies</span>
							</p>
						</div>

						<ul className="grid grid-cols-1 gap-2 min-[22rem]:grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] sm:gap-3">
							{items.map((tech) => (
								<li key={tech.name}>
									<TechCard
										tech={tech}
										testId={`tech-card-${toSlug(tech.name)}`}
									/>
								</li>
							))}
						</ul>
					</section>
				))}
			</div>

			<section
				aria-labelledby="technologies-next-title"
				className={`flex flex-col gap-6 border-border/60 border-t pt-[clamp(3rem,7vw,5rem)] ${GUTTER}`}
			>
				<h2
					id="technologies-next-title"
					className="max-w-[24ch] text-balance font-medium text-[clamp(2rem,2.4vw+1rem,3.5rem)] text-foreground leading-[1.05] tracking-[-0.03em]"
				>
					Need these tools on your project?
				</h2>

				<div className="flex flex-wrap items-center gap-x-8 gap-y-4">
					<Link
						href="/contact"
						className={cn(
							buttonVariants({ variant: 'light', size: 'xl' }),
							'px-4 text-sm transition-transform active:scale-[0.97] sm:px-7 sm:text-base',
						)}
					>
						Start a project
					</Link>
					<Link
						href="/experiences"
						className="group inline-flex w-fit items-center gap-2 text-neon-soft underline-offset-4 hover:underline"
					>
						Full experience history
						<ArrowRight
							className="size-4 transition-transform group-hover:translate-x-0.5"
							aria-hidden
						/>
					</Link>
				</div>
			</section>
		</div>
	)
}
