import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CareerRuler } from '~/components/career-ruler'
import { CopyEmailButton } from '~/components/copy-email-button'
import { CostSlab } from '~/components/cost-slab'
import { HeroScene } from '~/components/hero-scene'
import { OutcomeLedger } from '~/components/outcome-ledger'
import { SectionLines } from '~/components/section-lines'
import { SignatureFinale } from '~/components/signature-finale'
import { buttonVariants } from '~/components/ui/button/styles'
import { cn } from '~/lib/utils'
import { getCachedNow } from '~/utils/clock'
import { CONSTANTS } from '~/utils/constants'
import { formatYearsInWords } from '~/utils/date'
import { env } from '~/utils/env'
import {
	CONTACT_LINKS,
	EXPERIENCES,
	HOME_HERO,
	OUTCOMES,
	STACK_GROUPS,
} from '~/utils/mock'
import { getFirstRole } from '~/utils/role'
import { pickTechsByName } from '~/utils/tech'
import { buildCareerTimeline } from '~/utils/timeline'

const CONTACT_ROWS = CONTACT_LINKS.filter(
	({ label }) => label !== 'Instagram' && label !== 'Email',
)

const CURRENT = OUTCOMES.find(
	(outcome): outcome is (typeof OUTCOMES)[number] & { ratio: number } =>
		Boolean(outcome.isCurrent && outcome.ratio),
)

const PAST_OUTCOMES = OUTCOMES.filter(({ isCurrent }) => !isCurrent)

const SLAB_ID = 'current-cost-slab'

const CTA =
	'px-4 text-sm transition-transform active:scale-[0.97] sm:px-7 sm:text-base'

const GUTTER = 'px-[clamp(1.25rem,5vw,6rem)]'

const SECTION_TITLE =
	'max-w-[24ch] text-balance font-medium text-[clamp(2rem,2.4vw+1rem,3.5rem)] text-foreground leading-[1.05] tracking-[-0.03em]'

export async function HomeScreen() {
	const now = await getCachedNow()
	const timeline = buildCareerTimeline(EXPERIENCES, now)
	const careerYears = formatYearsInWords(
		getFirstRole().startDate,
		new Date(now),
	)

	return (
		<div className="bleed flex w-full flex-col">
			<section
				aria-labelledby="home-title"
				className={`relative isolate -mt-20 flex flex-col overflow-hidden pb-[clamp(5rem,14svh,10rem)] sm:-mt-32 ${GUTTER}`}
			>
				<HeroScene surfaceId={SLAB_ID} className="-z-10" />

				{/* The first screen ends where the beam lands: only the lit edge of the slab shows below the fold */}
				<div className="pointer-events-none flex min-h-[calc(100svh-3rem)] flex-col justify-end pt-28 pb-[clamp(3rem,8svh,5rem)] sm:pt-36">
					<div className="pointer-events-auto flex max-w-[min(100%,46rem)] flex-col gap-6 lg:max-w-[58%]">
						<div className="flex items-center gap-4">
							<Image
								src={CONSTANTS.AVATAR_URL}
								alt=""
								width={56}
								height={56}
								preload
								className="size-12 rounded-full bg-card object-cover ring-1 ring-neon-soft/40"
							/>

							<p className="flex flex-col">
								<span className="font-medium text-foreground text-lg">
									Leonardo Lopes
								</span>
								<span className="text-neon-soft text-sm">{HOME_HERO.role}</span>
							</p>
						</div>

						<h1
							id="home-title"
							className="text-balance font-semibold text-[clamp(2.5rem,4.6vw+0.5rem,6rem)] text-foreground leading-[0.98] tracking-[-0.04em]"
						>
							{careerYears} years of software running in{' '}
							<span className="text-neon-soft">production</span>. Now I lead the
							team that ships it.
						</h1>

						<p className="flex flex-wrap gap-x-5 gap-y-1 text-muted-foreground text-sm sm:text-base">
							<span className="text-foreground">{HOME_HERO.current}</span>
							<span>{HOME_HERO.availability}</span>
						</p>

						<div className="grid grid-cols-2 gap-3 sm:flex">
							<a
								href={env.CV_URL}
								target="_blank"
								rel="noreferrer"
								data-testid="home-resume-button"
								className={cn(
									buttonVariants({ variant: 'light', size: 'xl' }),
									CTA,
								)}
							>
								Download resume
								<span className="sr-only"> (PDF, opens in a new tab)</span>
							</a>

							<Link
								href="/contact"
								data-testid="home-project-button"
								className={cn(
									buttonVariants({ variant: 'line', size: 'xl' }),
									'glass-control',
									CTA,
								)}
							>
								Start a project
							</Link>
						</div>
					</div>
				</div>

				{CURRENT && (
					<CostSlab
						outcome={CURRENT}
						surfaceId={SLAB_ID}
						caption={HOME_HERO.slabCaption}
						testId="home-cost-slab"
						// The lit box only exists where the WebGL beam draws it (64rem+)
						className="pt-12 lg:px-[clamp(1.25rem,3vw,3rem)] lg:pt-[clamp(3rem,4vw,4rem)] lg:pb-[clamp(1.5rem,3vw,3rem)]"
					/>
				)}
			</section>

			<section
				aria-labelledby="ledger-title"
				className={`blueprint relative isolate grid gap-12 py-[clamp(4rem,9vw,7rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,9fr)] lg:gap-16 ${GUTTER}`}
			>
				<div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
					<h2 id="ledger-title" className={SECTION_TITLE}>
						Earlier results, one client at a time.
					</h2>
					<p className="max-w-[44ch] text-pretty text-muted-foreground">
						Numbers from systems I helped ship before Linda Lifetech. Full role
						descriptions are in the experience history.
					</p>
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

				<div className="flex flex-col gap-5">
					<OutcomeLedger outcomes={PAST_OUTCOMES} testId="home-ledger" />
					<p className="text-muted-foreground text-sm">
						Before that: React Native apps for freelance clients, from 2020.
					</p>
				</div>
			</section>

			<section
				aria-labelledby="career-title"
				className={`relative isolate flex flex-col gap-12 overflow-hidden border-border/60 border-y py-[clamp(4rem,9vw,7rem)] ${GUTTER}`}
			>
				<SectionLines />

				<h2 id="career-title" className={SECTION_TITLE}>
					Continuous production work since June 2020.
				</h2>

				<CareerRuler
					timeline={timeline}
					testId="home-career-ruler"
					className="rounded-3xl border border-neon-soft/15 bg-background/55 p-[clamp(1.25rem,3vw,2.5rem)] backdrop-blur-md"
				/>
			</section>

			<section
				aria-labelledby="stack-title"
				className={`blueprint relative isolate flex flex-col gap-12 py-[clamp(4rem,9vw,7rem)] ${GUTTER}`}
			>
				<div className="flex flex-col gap-4">
					<h2 id="stack-title" className={SECTION_TITLE}>
						Built across the whole system.
					</h2>
					<p className="max-w-[52ch] text-pretty text-muted-foreground">
						Interfaces, services, data and the cloud they run on. These are the
						tools in production right now; each system gets the ones it needs.
					</p>
				</div>

				<div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4">
					{STACK_GROUPS.map(({ title, techs }) => (
						<div key={title} className="flex flex-col">
							<h3 className="border-neon/60 border-b pb-3 font-medium text-neon-soft text-sm">
								{title}
							</h3>

							<ul className="flex flex-col">
								{pickTechsByName(techs).map(({ name }) => (
									<li
										key={name}
										className="border-border/50 border-b py-4 text-foreground text-lg"
									>
										{name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<Link
					href="/technologies"
					className="group inline-flex w-fit items-center gap-2 text-neon-soft underline-offset-4 hover:underline"
				>
					The full catalog, personal projects included
					<ArrowRight
						className="size-4 transition-transform group-hover:translate-x-0.5"
						aria-hidden
					/>
				</Link>
			</section>

			<section
				aria-labelledby="contact-title"
				className={`grid gap-12 py-[clamp(4rem,9vw,7rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,9fr)] lg:gap-16 ${GUTTER}`}
			>
				<div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
					<h2 id="contact-title" className={SECTION_TITLE}>
						Hiring, or have a product to build?
					</h2>
					<p className="max-w-[44ch] text-pretty text-muted-foreground">
						Leonardo Lopes is a tech lead, software engineer and architect
						working remotely from Brazil (UTC−3). Send the role or the project
						and what you need from it.
					</p>
				</div>

				<div className="flex flex-col">
					<ul className="border-border border-t">
						<li className="flex flex-wrap items-center justify-between gap-4 border-border border-b py-5">
							<a
								href={`mailto:${CONSTANTS.CONTACT_EMAIL}`}
								className="group flex min-w-0 items-center gap-4"
							>
								<Mail className="size-5 shrink-0 text-neon-soft" aria-hidden />
								<span className="flex min-w-0 flex-col gap-1">
									<span className="font-medium text-foreground text-xl sm:text-2xl">
										Email
									</span>
									<span className="truncate text-muted-foreground text-sm group-hover:text-foreground">
										{CONSTANTS.CONTACT_EMAIL}
									</span>
								</span>
							</a>

							<CopyEmailButton email={CONSTANTS.CONTACT_EMAIL} />
						</li>

						{CONTACT_ROWS.map(({ href, label, Icon }) => (
							<li key={label} className="border-border border-b">
								<a
									href={href}
									target="_blank"
									rel="noreferrer"
									className="group flex items-center justify-between gap-4 py-5"
								>
									<span className="flex items-center gap-4 font-medium text-foreground text-xl sm:text-2xl">
										<Icon className="size-5 text-neon-soft" aria-hidden />
										{label}
										<span className="sr-only"> (opens in a new tab)</span>
									</span>
									<ArrowUpRight
										className="group-hover:-translate-y-0.5 size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-neon-soft"
										aria-hidden
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>

			<SignatureFinale message="Let's build what's next.">
				<Link
					href="/contact"
					className={cn(buttonVariants({ variant: 'light', size: 'xl' }), CTA)}
				>
					Start a project
				</Link>
				<a
					href={`mailto:${CONSTANTS.CONTACT_EMAIL}`}
					className={cn(
						buttonVariants({ variant: 'line', size: 'xl' }),
						'glass-control',
						CTA,
					)}
				>
					Email me
				</a>
			</SignatureFinale>
		</div>
	)
}
