import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import signature from '~/assets/icons/signature.svg'
import me from '~/assets/images/me.jpg'
import { SectionLines } from '~/components/section-lines'
import { buttonVariants } from '~/components/ui/button/styles'
import { cn } from '~/lib/utils'
import { getCachedNow } from '~/utils/clock'
import { CONSTANTS } from '~/utils/constants'
import { formatElapsed, getAge } from '~/utils/date'
import { env } from '~/utils/env'
import { getFirstRole } from '~/utils/role'
import { buildProfilePageJsonLd, serializeJsonLd } from '~/utils/seo'

const GUTTER = 'px-[clamp(1.25rem,5vw,6rem)]'

const SECTION =
	'grid gap-8 py-[clamp(4rem,9vw,7rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,9fr)] lg:gap-16'

const SECTION_TITLE =
	'max-w-[24ch] text-balance font-medium text-[clamp(2rem,2.4vw+1rem,3.5rem)] text-foreground leading-[1.05] tracking-[-0.03em]'

const PROSE =
	'flex max-w-[62ch] flex-col gap-6 text-pretty text-lg text-muted-foreground leading-relaxed sm:text-xl'

const CTA =
	'px-4 text-sm transition-transform active:scale-[0.97] sm:px-7 sm:text-base'

const TEXT_LINK =
	'group inline-flex w-fit items-center gap-2 text-neon-soft underline-offset-4 hover:underline'

/** Named in the "What I do" copy below; shown again as a scannable row */
const CORE_STACK = [
	'Go',
	'Node.js',
	'TypeScript',
	'React',
	'React Native',
	'AWS',
	'CI/CD',
]

export async function AboutScreen() {
	const now = new Date(await getCachedNow())
	const age = getAge(CONSTANTS.BIRTHDAY, now)
	const careerTime = formatElapsed(getFirstRole().startDate, now)

	return (
		<div className="bleed flex w-full flex-col">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: escaped JSON-LD per the Next.js guide
				dangerouslySetInnerHTML={{
					__html: serializeJsonLd(
						buildProfilePageJsonLd(env.APP_URL, '/about'),
					),
				}}
			/>

			<section
				aria-labelledby="about-title"
				className={`grid items-center gap-14 overflow-x-clip pt-[clamp(2rem,6vw,5rem)] pb-[clamp(3rem,8vw,6rem)] lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:content-center lg:gap-16 ${GUTTER}`}
			>
				<div className="flex flex-col gap-7">
					<h1
						id="about-title"
						className="max-w-[16ch] text-balance font-semibold text-[clamp(2.5rem,4.6vw+0.5rem,6rem)] text-foreground leading-[0.98] tracking-[-0.04em]"
					>
						A little about{' '}
						<span className="text-neon-soft">Leonardo Lopes</span>.
					</h1>

					<p
						data-testid="about-summary"
						className="max-w-[56ch] text-pretty text-foreground/90 text-lg leading-relaxed sm:text-xl"
					>
						Leonardo Lopes is a tech lead at Buildbox, a software engineer and
						architect who builds web, backend and mobile systems. He has been
						shipping software professionally since June 2020 and works remotely
						from Brazil (UTC−3).
					</p>

					<div className="grid grid-cols-2 gap-3 sm:flex">
						<Link
							href="/experiences"
							data-testid="about-experiences-button"
							className={cn(
								buttonVariants({ variant: 'light', size: 'xl' }),
								CTA,
							)}
						>
							See my experience
						</Link>

						<Link
							href="/contact"
							data-testid="about-contact-button"
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

				<figure className="relative isolate mx-auto w-full max-w-[min(100%,26rem)] lg:mr-0">
					<div
						aria-hidden
						className="inset-x-[-20%] bottom-[-18%] -z-10 absolute h-3/4 bg-radial-[ellipse_at_50%_100%] from-neon/55 via-cobalt/20 to-transparent to-70% blur-2xl"
					/>

					<div className="relative overflow-hidden rounded-[2rem] border border-neon-soft/20">
						<Image
							src={me}
							alt="Portrait of Leonardo Lopes"
							sizes="(min-width: 1024px) 26rem, 90vw"
							preload
							placeholder="blur"
							className="aspect-4/5 w-full object-cover object-top contrast-110 saturate-[0.85]"
						/>

						<div
							aria-hidden
							className="absolute inset-0 bg-linear-to-t from-neon/70 via-cobalt/25 via-45% to-transparent mix-blend-screen"
						/>

						<div
							aria-hidden
							className="absolute inset-0 bg-linear-to-b from-background/75 via-background/10 via-50% to-transparent"
						/>
					</div>

					<div
						aria-hidden
						className="filament-glow -bottom-px absolute inset-x-[12%] h-0.5 rounded-full"
					/>
				</figure>
			</section>

			<section aria-labelledby="who-title" className={`${SECTION} ${GUTTER}`}>
				<div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
					<h2 id="who-title" className={SECTION_TITLE}>
						Who I am
					</h2>
				</div>

				<div className={PROSE}>
					<p>
						Hey! I'm Leo, a software engineer who builds web, backend and mobile
						systems. I'm{' '}
						<span className="text-foreground">{age} years old</span>, with{' '}
						<span className="text-neon-soft">{careerTime}</span> of professional
						experience.
					</p>

					<p>
						I lead teams through changes to live systems, like moving a
						healthtech platform from a monolith to microservices and from AWS to
						GCP with zero downtime.
					</p>
				</div>
			</section>

			<section
				aria-labelledby="what-title"
				className={`relative isolate overflow-hidden border-border/60 border-y ${SECTION} ${GUTTER}`}
			>
				<SectionLines
					testId="about-section-lines"
					className="mask-[linear-gradient(to_right,#000_20%,transparent_42%)]"
				/>

				<div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
					<h2 id="what-title" className={SECTION_TITLE}>
						What I do
					</h2>
				</div>

				<div className="flex flex-col gap-10">
					<ul
						aria-label="Recent stack"
						className="flex flex-wrap gap-x-8 gap-y-3 border-neon/60 border-b pb-6"
					>
						{CORE_STACK.map((name) => (
							<li key={name} className="font-medium text-foreground text-lg">
								{name}
							</li>
						))}
					</ul>

					<div className={PROSE}>
						<p>
							I design and build systems end to end: architecture, technical
							governance, cloud infrastructure (AWS) and CI/CD pipelines. Most
							of my recent work runs on Go, Node.js and TypeScript on the
							backend, with React and React Native on the client.
						</p>

						<p>
							I lead teams, set technical standards and mentor the engineers I
							work with. I like the mission-critical systems best, where
							performance and reliability decide whether the business runs.
						</p>

						<p className="text-foreground">
							I'm the kind of professional you look for when your app or
							infrastructure isn't delivering the value it should, or when your
							tech team needs clear standards, processes and direction that
							actually make a difference.
						</p>
					</div>

					<Link href="/experiences" className={TEXT_LINK}>
						Roles and results in the experience history
						<ArrowRight
							className="size-4 transition-transform group-hover:translate-x-0.5"
							aria-hidden
						/>
					</Link>
				</div>
			</section>

			<section
				aria-labelledby="outside-title"
				className={`${SECTION} ${GUTTER}`}
			>
				<div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
					<h2 id="outside-title" className={SECTION_TITLE}>
						And outside of code?
					</h2>
				</div>

				<div className={PROSE}>
					<p>
						I believe that a strong body creates a healthy mind, which is why
						I'm a dedicated capoeirista and keep a regular exercise routine.
						When I'm not coding, you'll find me spending quality time with
						friends, indulging my Siberian Husky's every whim or diving deep
						into gaming.
					</p>

					<p>
						I'm a hardcore gamer who loves spending hours pursuing that elusive
						100% achievement completion. If you check my Steam achievements,
						you'll see I've spent countless hours chasing nearly impossible
						challenges. I'm stubborn in the same way at work.
					</p>
				</div>
			</section>

			<section
				aria-labelledby="future-title"
				className={`${SECTION} ${GUTTER}`}
			>
				<div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
					<h2 id="future-title" className={SECTION_TITLE}>
						My future
					</h2>
				</div>

				<div className="flex flex-col gap-12">
					<div className={PROSE}>
						<p>
							I aspire to create something truly impactful on a global scale. I
							want to be able to look at something that everyone knows or uses
							and say, "I was part of that." I dream of becoming a reference in
							the tech community and, who knows, maybe one day becoming a GitHub
							Star.
						</p>

						<p>
							Beyond my professional goals, I have a personal dream of living in
							a cold country like Canada, experiencing a different culture and
							way of life.
						</p>
					</div>

					<div className="flex flex-col gap-6 border-neon/60 border-t pt-10">
						<p className="max-w-[24ch] text-balance font-medium text-[clamp(1.5rem,1.4vw+1rem,2.5rem)] text-foreground leading-[1.1] tracking-[-0.02em]">
							Have something to build? Let's talk.
						</p>

						<Image
							src={signature}
							alt="Leonardo Lopes signature"
							width={260}
							className="about-signature -rotate-6 w-56 brightness-150 sm:w-64"
						/>

						<div className="flex flex-wrap items-center gap-x-8 gap-y-4">
							<Link
								href="/contact"
								className={cn(
									buttonVariants({ variant: 'light', size: 'xl' }),
									CTA,
								)}
							>
								Start a project
							</Link>

							<Link href="/experiences" className={TEXT_LINK}>
								See my experience
								<ArrowRight
									className="size-4 transition-transform group-hover:translate-x-0.5"
									aria-hidden
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
