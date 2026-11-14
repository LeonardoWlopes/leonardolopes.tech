import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CareerRuler } from '~/components/career-ruler'
import { CostSlab } from '~/components/cost-slab'
import { OutcomeLedger } from '~/components/outcome-ledger'
import { SectionLines } from '~/components/section-lines'
import { buttonVariants } from '~/components/ui/button/styles'
import { cn } from '~/lib/utils'
import { getCachedNow } from '~/utils/clock'
import { EXPERIENCES, HOME_HERO, OUTCOMES } from '~/utils/mock'
import { buildCareerTimeline } from '~/utils/timeline'

const GUTTER = 'px-[clamp(1.25rem,5vw,6rem)]'

const SECTION = `relative isolate flex flex-col gap-12 py-[clamp(4rem,9vw,7rem)] ${GUTTER}`

const SECTION_TITLE =
	'max-w-[24ch] text-balance font-medium text-[clamp(2rem,2.4vw+1rem,3.5rem)] text-foreground leading-[1.05] tracking-[-0.03em]'

const LEAD = 'max-w-[56ch] text-pretty text-muted-foreground'

const SPEC_NAME = 'font-medium font-mono text-neon-soft text-sm'

const CTA =
	'px-4 text-sm transition-transform active:scale-[0.97] sm:px-7 sm:text-base'

const CURRENT = OUTCOMES.find(
	(outcome): outcome is (typeof OUTCOMES)[number] & { ratio: number } =>
		Boolean(outcome.isCurrent && outcome.ratio),
)

const BRAND = [
	{
		name: 'midnight',
		className: 'bg-midnight',
		value: '#030407',
		use: 'Ground. Every page sits on it.',
	},
	{
		name: 'cobalt',
		className: 'bg-cobalt',
		value: '#1558C9',
		use: 'Brand. Grids, glow cores, never small text.',
	},
	{
		name: 'neon',
		className: 'bg-neon',
		value: '#2F6BFF',
		use: 'Light. Beams, the lit slab, the timeline rail.',
	},
	{
		name: 'neon-soft',
		className: 'bg-neon-soft',
		value: '#7AA6FF',
		use: 'Readable light. Accent words, links, focus.',
	},
]

const SEMANTIC = [
	{ token: '--background', className: 'bg-background' },
	{ token: '--foreground', className: 'bg-foreground' },
	{ token: '--card', className: 'bg-card' },
	{ token: '--muted', className: 'bg-muted' },
	{ token: '--muted-foreground', className: 'bg-muted-foreground' },
	{ token: '--primary', className: 'bg-primary' },
	{ token: '--border', className: 'bg-border' },
	{ token: '--input', className: 'bg-input' },
	{ token: '--ring', className: 'bg-ring' },
	{ token: '--destructive', className: 'bg-destructive' },
]

const TYPE = [
	{
		label: 'Display H1',
		spec: 'semibold · clamp(2.5rem → 6rem) · leading 0.98 · tracking −0.04em',
		className:
			'text-balance font-semibold text-[clamp(2.5rem,4.6vw+0.5rem,6rem)] leading-[0.98] tracking-[-0.04em]',
		sample: (
			<>
				Shipping to <span className="text-neon-soft">production</span>.
			</>
		),
	},
	{
		label: 'Section title H2',
		spec: 'medium · clamp(2rem → 3.5rem) · leading 1.05 · max 24ch',
		className: SECTION_TITLE,
		sample: 'Measured in production, one engagement after another.',
	},
	{
		label: 'Body',
		spec: 'regular · 1rem · muted-foreground · max 44–56ch',
		className: LEAD,
		sample:
			'Measured results from systems I helped ship. Full role descriptions live in the experience history.',
	},
	{
		label: 'Mono measurement',
		spec: 'Geist Mono · medium · tnum + slashed zero',
		className:
			'font-medium font-mono text-[clamp(2rem,2.4vw+1rem,3.75rem)] leading-none tracking-tight',
		sample: '−38% · 27 · 2020 – Present',
	},
]

const SCENES = [
	{
		name: 'LaserFlow',
		use: 'The beam. Falls on the cost slab in the hero and on the floor of the closing scene, wrapping a rounded surface.',
	},
	{
		name: 'Lanyard',
		use: 'The 3D badge in the hero: drops in with a soft bounce, sways, flips on click.',
	},
	{
		name: 'FloatingLines',
		use: 'Section lines behind the career ruler, the about page and the experience and technology heroes.',
	},
	{
		name: 'GhostFibers + Lightfall',
		use: 'The closing scene: fibres drifting through the middle while light rains behind the signature.',
	},
]

const MOTION_RULES = [
	'Ambient motion (WebGL lines, beams, badge sway) holds still when the OS asks for reduced motion or the visitor presses the pause control in the header. Components read both through useStillMotion().',
	'WebGL scenes mount only when visible. The hero beam, the badge and the section lines are desktop only (DESKTOP_QUERY); phones get CSS light such as the beam above. The closing scene is the one exception and also renders on phones.',
	'Scroll-drawn effects (timeline rail, ruler spans, slab dimming) use CSS view timelines and are skipped under reduced motion; the static state is the final state.',
	'No loop plays without the pause path. Small effects stay in CSS.',
]

export async function StyleguideScreen() {
	const timeline = buildCareerTimeline(EXPERIENCES, await getCachedNow())

	return (
		<div className="bleed flex w-full flex-col">
			<section
				aria-labelledby="sg-title"
				className={`blueprint relative isolate flex flex-col gap-8 pt-8 pb-[clamp(4rem,9vw,7rem)] ${GUTTER}`}
			>
				<h1
					id="sg-title"
					className="max-w-[18ch] text-balance font-semibold text-[clamp(2.5rem,4.6vw+0.5rem,6rem)] text-foreground leading-[0.98] tracking-[-0.04em]"
				>
					Neon on <span className="text-neon-soft">midnight</span>, the
					styleguide.
				</h1>
				<p className={LEAD}>
					The living reference for this site&apos;s design system: color tokens,
					type scale, controls, the glass surface and the light effects the home
					is built from. Light means running in production now; past work stays
					unlit.
				</p>
				<div className="flex flex-wrap gap-3">
					<Link
						href="/"
						className={cn(
							buttonVariants({ variant: 'light', size: 'xl' }),
							CTA,
						)}
					>
						See it on the home
					</Link>
					<Link
						href="/experiences"
						className={cn(
							buttonVariants({ variant: 'line', size: 'xl' }),
							'glass-control',
							CTA,
						)}
					>
						Experience history
					</Link>
				</div>
			</section>

			<section aria-labelledby="sg-colors" className={SECTION}>
				<div className="flex flex-col gap-4">
					<h2 id="sg-colors" className={SECTION_TITLE}>
						Color tokens
					</h2>
					<p className={LEAD}>
						Four brand primitives in <code>@theme</code>, and the shadcn
						semantic tokens in <code>.dark</code> that components actually use.
						Never hard-code a color.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
					{BRAND.map((color) => (
						<div
							key={color.name}
							className="overflow-hidden rounded-2xl border border-border"
						>
							<div
								className={cn(
									'h-[clamp(5rem,10vw,9rem)] border-border border-b',
									color.className,
								)}
							/>
							<div className="flex flex-col gap-1 p-4">
								<h3 className="font-medium font-mono text-foreground text-sm">
									{color.name}
								</h3>
								<p className="font-mono text-muted-foreground text-xs">
									{color.value}
								</p>
								<p className="text-muted-foreground text-sm">{color.use}</p>
							</div>
						</div>
					))}
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="font-medium text-foreground text-xl">
						Semantic tokens (shadcn)
					</h3>
					<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
						{SEMANTIC.map((item) => (
							<li
								key={item.token}
								className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3"
							>
								<span
									aria-hidden
									className={cn(
										'size-8 shrink-0 rounded-lg ring-1 ring-white/15',
										item.className,
									)}
								/>
								<span className="flex min-w-0 flex-col">
									<code className="truncate font-mono text-foreground text-xs">
										{item.token}
									</code>
									<span className="truncate font-mono text-muted-foreground text-xs">
										{item.className}
									</span>
								</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section
				aria-labelledby="sg-type"
				className={cn(SECTION, 'border-border/60 border-y')}
			>
				<div className="flex flex-col gap-4">
					<h2 id="sg-type" className={SECTION_TITLE}>
						Type scale
					</h2>
					<p className={LEAD}>
						Geist for words, Geist Mono for measurements. Mono turns on tabular
						figures and a slashed zero so numbers line up.
					</p>
				</div>

				<ul className="flex flex-col border-border border-t">
					{TYPE.map((item) => (
						<li
							key={item.label}
							className="grid gap-3 border-border border-b py-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10"
						>
							<span className="flex flex-col gap-1">
								<span className="font-medium text-foreground text-sm">
									{item.label}
								</span>
								<span className="font-mono text-muted-foreground text-xs">
									{item.spec}
								</span>
							</span>
							<p className={cn('text-foreground', item.className)}>
								{item.sample}
							</p>
						</li>
					))}
				</ul>
			</section>

			<section aria-labelledby="sg-controls" className={SECTION}>
				<div className="flex flex-col gap-4">
					<h2 id="sg-controls" className={SECTION_TITLE}>
						Buttons and focus
					</h2>
					<p className={LEAD}>
						Navigation that looks like a button is still a link:{' '}
						<code>Link</code> or <code>a</code> with <code>buttonVariants</code>
						. Press Tab to see the focus ring, a 2px neon-soft outline with an
						offset.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-3">
					<div className="flex flex-col gap-4">
						<h3 className={SPEC_NAME}>light</h3>
						<Link
							href="/contact"
							className={cn(
								buttonVariants({ variant: 'light', size: 'xl' }),
								CTA,
								'w-fit',
							)}
						>
							Start a project
						</Link>
						<p className="text-muted-foreground text-sm">
							The primary action. One per view.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className={SPEC_NAME}>line + glass-control</h3>
						<Link
							href="/experiences"
							className={cn(
								buttonVariants({ variant: 'line', size: 'xl' }),
								'glass-control',
								CTA,
								'w-fit',
							)}
						>
							Experience history
						</Link>
						<p className="text-muted-foreground text-sm">
							The secondary action, next to light.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className={SPEC_NAME}>glass</h3>
						<Link
							href="/technologies"
							className={cn(
								buttonVariants({ variant: 'glass', size: 'xl' }),
								CTA,
								'w-fit',
							)}
						>
							Technologies
						</Link>
						<p className="text-muted-foreground text-sm">
							Over light or imagery only.
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className={SPEC_NAME}>focus-visible</h3>
					<div className="flex flex-wrap items-center gap-6">
						<span
							aria-hidden
							className={cn(
								buttonVariants({ variant: 'light', size: 'xl' }),
								CTA,
								'outline-2 outline-neon-soft outline-offset-3 outline-solid',
							)}
						>
							Focused
						</span>
						<p className="max-w-[44ch] text-muted-foreground text-sm">
							Static sample of the ring. Text links use the same outline and
							gain an underline on hover.
						</p>
					</div>
				</div>
			</section>

			<section
				aria-labelledby="sg-glass"
				className={cn(SECTION, 'blueprint overflow-hidden')}
			>
				<div className="flex flex-col gap-4">
					<h2 id="sg-glass" className={SECTION_TITLE}>
						Glass surface
					</h2>
					<p className={LEAD}>
						<code>.glass-control</code>: 6% white fill, a hairline edge and an
						18px blur. It only sits on top of light; on bare midnight it reads
						as a grey box.
					</p>
				</div>

				<div className="relative grid min-h-[clamp(14rem,24vw,20rem)] place-items-center overflow-hidden rounded-3xl border border-border">
					<span
						aria-hidden
						className="css-beam absolute inset-y-0 left-1/3 w-24"
					/>
					<div className="glass-control relative m-6 flex max-w-sm flex-col gap-2 rounded-2xl p-6">
						<h3 className="font-medium text-foreground text-lg">
							Glass over light
						</h3>
						<p className="text-foreground/80 text-sm">
							Used on the header, the dock and secondary buttons. The header
							uses a thicker frost with a lit top edge (.header-glass).
						</p>
					</div>
				</div>
			</section>

			<section
				aria-labelledby="sg-light"
				className={cn(SECTION, 'border-border/60 border-y')}
			>
				<div className="flex flex-col gap-4">
					<h2 id="sg-light" className={SECTION_TITLE}>
						Light effects
					</h2>
					<p className={LEAD}>
						Reusable effects in <code>globals.css</code>. Only work running in
						production now emits light; past work uses cold filaments.
					</p>
				</div>

				<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<li className="flex flex-col gap-3">
						<div className="blueprint relative isolate h-40 overflow-hidden rounded-2xl border border-border" />
						<h3 className={SPEC_NAME}>.blueprint</h3>
						<p className="text-muted-foreground text-sm">
							Cobalt grid with a light pool at the start. Put it on a{' '}
							<code>relative isolate</code> section.
						</p>
					</li>
					<li className="flex flex-col gap-3">
						<div className="grid h-40 place-items-center rounded-2xl border border-border px-8">
							<span className="relative block h-0.5 w-full bg-white/10">
								<span className="filament-glow absolute inset-y-0 left-0 w-1/2" />
							</span>
						</div>
						<h3 className={SPEC_NAME}>.filament-glow</h3>
						<p className="text-muted-foreground text-sm">
							Neon rule: the footer's top edge and the line under the about
							portrait.
						</p>
					</li>
					<li className="flex flex-col gap-3">
						<div className="relative h-40 overflow-hidden rounded-2xl border border-border">
							<span
								aria-hidden
								className="absolute inset-y-6 left-10 w-px bg-neon-soft/20"
							/>
							<span
								aria-hidden
								className="-translate-x-1/2 absolute top-6 left-10 h-2/5 w-0.5 bg-linear-to-b from-neon/15 via-neon to-neon-soft shadow-neon-dot"
							/>
							<span
								aria-hidden
								className="-translate-x-1/2 absolute top-6 left-10 size-3 rounded-full border-2 border-neon-soft bg-neon shadow-neon-dot"
							/>
							<span
								aria-hidden
								className="-translate-x-1/2 absolute bottom-6 left-10 size-3 rounded-full border-2 border-neon-soft/50 bg-background"
							/>
						</div>
						<h3 className={SPEC_NAME}>.timeline-fill · .timeline-dot</h3>
						<p className="text-muted-foreground text-sm">
							The experience rail lights up to the middle of the viewport as you
							scroll, and each role&apos;s dot turns on when the light reaches
							it.
						</p>
					</li>
					<li className="flex flex-col gap-3">
						<div className="grid h-40 place-items-center rounded-2xl border border-border px-8">
							<span className="ruler-ticks block h-1.5 w-full" />
						</div>
						<h3 className={SPEC_NAME}>.ruler-ticks</h3>
						<p className="text-muted-foreground text-sm">
							72 month marks under the career ruler.
						</p>
					</li>
					<li className="flex flex-col gap-3">
						<div className="relative h-40 overflow-hidden rounded-2xl border border-border">
							<span
								aria-hidden
								className="css-beam absolute inset-y-0 left-1/2 w-12 -translate-x-1/2"
							/>
						</div>
						<h3 className={SPEC_NAME}>.css-beam</h3>
						<p className="text-muted-foreground text-sm">
							Vertical light without WebGL, the phone hero beam.
						</p>
					</li>
				</ul>

				{CURRENT && (
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-2">
							<h3 className={SPEC_NAME}>CostSlab</h3>
							<p className="max-w-[56ch] text-muted-foreground text-sm">
								The only emitter: the current job&apos;s cloud bill after the
								migration, labelled Before 100% and Now 62% inside the bar. On
								the home its rounded box is the surface the hero beam lands on.
							</p>
						</div>
						<CostSlab
							outcome={CURRENT}
							caption={HOME_HERO.slabCaption}
							testId="styleguide-cost-slab"
						/>
					</div>
				)}
			</section>

			<section aria-labelledby="sg-ledger" className={cn(SECTION, 'blueprint')}>
				<div className="flex flex-col gap-4">
					<h2 id="sg-ledger" className={SECTION_TITLE}>
						Ledger rows
					</h2>
					<p className={LEAD}>
						<code>OutcomeLedger</code>: metric in mono, the summary, the stack
						it ran on and who it was for. Hovering a row dims its siblings;
						every row links to its role in the{' '}
						<Link
							href="/experiences"
							className="text-neon-soft underline underline-offset-4"
						>
							experience history
						</Link>
						.
					</p>
				</div>

				<OutcomeLedger outcomes={OUTCOMES} testId="styleguide-ledger" />
			</section>

			<section
				aria-labelledby="sg-career"
				className={cn(SECTION, 'overflow-hidden border-border/60 border-y')}
			>
				<SectionLines />

				<div className="flex flex-col gap-4">
					<h2 id="sg-career" className={SECTION_TITLE}>
						Career ruler
					</h2>
					<p className={LEAD}>
						<code>CareerRuler</code> takes the timeline built from the
						experiences and today&apos;s date, so the current span keeps
						growing. Behind it, the floating lines background (desktop only).
					</p>
				</div>

				<CareerRuler
					timeline={timeline}
					testId="styleguide-career-ruler"
					className="rounded-3xl border border-neon-soft/15 bg-background/55 p-[clamp(1.25rem,3vw,2.5rem)] backdrop-blur-md"
				/>
			</section>

			<section aria-labelledby="sg-scenes" className={SECTION}>
				<div className="flex flex-col gap-4">
					<h2 id="sg-scenes" className={SECTION_TITLE}>
						WebGL scenes
					</h2>
					<p className={LEAD}>
						Vendored from React Bits into <code>components/ui</code>, tuned to
						the palette. Each one pauses with the header control.
					</p>
				</div>

				<ul className="grid max-w-5xl gap-x-12 border-border border-t sm:grid-cols-2">
					{SCENES.map(({ name, use }) => (
						<li
							key={name}
							className="flex flex-col gap-1 border-border border-b py-5"
						>
							<h3 className={SPEC_NAME}>{name}</h3>
							<p className="text-pretty text-muted-foreground text-sm">{use}</p>
						</li>
					))}
				</ul>
			</section>

			<section aria-labelledby="sg-motion" className={SECTION}>
				<h2 id="sg-motion" className={SECTION_TITLE}>
					Motion rules
				</h2>

				<ul className="flex max-w-[64ch] flex-col border-border border-t">
					{MOTION_RULES.map((rule) => (
						<li
							key={rule}
							className="border-border border-b py-5 text-pretty text-foreground/85"
						>
							{rule}
						</li>
					))}
				</ul>

				<Link
					href="/"
					className="group inline-flex w-fit items-center gap-2 text-neon-soft underline-offset-4 hover:underline"
				>
					Back to the home
					<ArrowRight
						className="size-4 transition-transform group-hover:translate-x-0.5"
						aria-hidden
					/>
				</Link>
			</section>
		</div>
	)
}
