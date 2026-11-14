import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ExperiencesTimeline } from '~/components/experiences-timeline'
import { SectionLines } from '~/components/section-lines'
import { buttonVariants } from '~/components/ui/button/styles'
import { cn } from '~/lib/utils'
import { getCachedNow } from '~/utils/clock'
import { CONSTANTS } from '~/utils/constants'
import { env } from '~/utils/env'
import { EXPERIENCES, OUTCOMES } from '~/utils/mock'

const GUTTER = 'px-[clamp(1.25rem,5vw,6rem)]'

const CTA =
	'px-4 text-sm transition-transform active:scale-[0.97] sm:px-7 sm:text-base'

const TEXT_LINK =
	'group inline-flex w-fit items-center gap-2 text-neon-soft underline-offset-4 hover:underline'

export async function ExperiencesScreen() {
	const now = new Date(await getCachedNow())

	return (
		<div className="bleed flex w-full flex-col">
			<section
				aria-labelledby="experiences-title"
				className={`relative isolate flex flex-col gap-6 overflow-hidden pt-[clamp(2rem,5vw,4rem)] pb-[clamp(3rem,7vw,5rem)] ${GUTTER}`}
			>
				<SectionLines className="mask-[linear-gradient(to_right,transparent_40%,#000_70%)]" />

				<h1
					id="experiences-title"
					className="max-w-[20ch] text-balance font-semibold text-[clamp(2.5rem,4.6vw+0.5rem,6rem)] text-foreground leading-[0.98] tracking-[-0.04em]"
				>
					From freelance mobile apps to{' '}
					<span className="text-neon-soft">tech lead</span>.
				</h1>

				<p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
					Roles so far, most recent first. Since June 2020 I have worked as a
					freelance mobile engineer, at Nkey for Poliedro, and at Buildbox for
					MSD, Grupo Petrópolis, Lactalis Group and now Linda Lifetech.
				</p>

				<p className="font-mono text-foreground text-sm">
					In production since <span className="text-neon-soft">June 2020</span>
				</p>

				<div className="flex flex-wrap items-center gap-x-6 gap-y-4">
					<a
						href={env.CV_URL}
						target="_blank"
						rel="noreferrer"
						data-testid="experiences-resume-button"
						className={cn(
							buttonVariants({ variant: 'light', size: 'xl' }),
							CTA,
						)}
					>
						Download resume
						<span className="sr-only"> (PDF, opens in a new tab)</span>
					</a>

					<a
						href={CONSTANTS.LINKEDIN_EXPERIENCE_URL}
						target="_blank"
						rel="noreferrer"
						data-testid="experiences-linkedin-button"
						className={cn(
							buttonVariants({ variant: 'line', size: 'xl' }),
							'glass-control',
							CTA,
						)}
					>
						Experience on LinkedIn
						<ArrowUpRight className="size-4" aria-hidden />
						<span className="sr-only"> (opens in a new tab)</span>
					</a>

					<Link href="/technologies" className={TEXT_LINK}>
						Technologies I use
						<ArrowRight
							className="size-4 transition-transform group-hover:translate-x-0.5"
							aria-hidden
						/>
					</Link>
				</div>
			</section>

			<div className={`blueprint relative isolate ${GUTTER}`}>
				<ExperiencesTimeline
					experiences={EXPERIENCES}
					outcomes={OUTCOMES}
					now={now}
					testId="experiences-timeline"
				/>
			</div>

			<section
				aria-labelledby="experiences-next-title"
				className={`flex flex-col gap-6 border-border/60 border-t pt-[clamp(3rem,7vw,5rem)] ${GUTTER}`}
			>
				<h2
					id="experiences-next-title"
					className="max-w-[24ch] text-balance font-medium text-[clamp(2rem,2.4vw+1rem,3.5rem)] text-foreground leading-[1.05] tracking-[-0.03em]"
				>
					Hiring, or have a product to build?
				</h2>

				<div className="flex flex-wrap items-center gap-x-6 gap-y-4">
					<Link
						href="/contact"
						className={cn(
							buttonVariants({ variant: 'light', size: 'xl' }),
							CTA,
						)}
					>
						Start a project
					</Link>

					<Link href="/about" className={TEXT_LINK}>
						More about me
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
