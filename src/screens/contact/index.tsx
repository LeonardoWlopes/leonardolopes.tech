import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from '~/components/contact-form'
import { CopyEmailButton } from '~/components/copy-email-button'
import { CONSTANTS } from '~/utils/constants'
import { env } from '~/utils/env'
import { CONTACT_LINKS } from '~/utils/mock'

const EMAIL_HREF = `mailto:${CONSTANTS.CONTACT_EMAIL}`

const CHANNEL_ROWS = CONTACT_LINKS.filter(({ href }) => href !== EMAIL_HREF)

const GUTTER = 'px-[clamp(1.25rem,5vw,6rem)]'

const SECTION_TITLE =
	'max-w-[24ch] text-balance font-medium text-[clamp(1.75rem,1.6vw+1rem,2.5rem)] text-foreground leading-[1.05] tracking-[-0.03em]'

const TEXT_LINK =
	'group inline-flex w-fit items-center gap-2 text-neon-soft underline-offset-4 hover:underline'

export function ContactScreen() {
	return (
		<div className="bleed flex w-full flex-col">
			<section
				aria-labelledby="contact-title"
				className={`blueprint relative isolate grid gap-x-16 gap-y-12 pt-[clamp(1rem,4vw,3rem)] pb-[clamp(3rem,8vw,6rem)] lg:grid-cols-[minmax(0,6fr)_minmax(0,7fr)] ${GUTTER}`}
			>
				<div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-1">
					<h1
						id="contact-title"
						className="max-w-[14ch] text-balance font-semibold text-[clamp(2.5rem,4.6vw+0.5rem,6rem)] text-foreground leading-[0.98] tracking-[-0.04em]"
					>
						Let's build something{' '}
						<span className="text-neon-soft">together</span>.
					</h1>

					<div className="flex max-w-[52ch] flex-col gap-4 text-pretty text-lg text-muted-foreground">
						<p>
							I'm Leonardo Lopes, a software engineer, architect and tech lead
							working remotely from Brazil (UTC−3), which overlaps with US East
							working hours. I'm open to full-time, contract and freelance work,
							remote or relocating anywhere, in English (full professional) or
							Portuguese (native).
						</p>

						<p>
							Tell me what you're building, where it stands today and your
							timeline. The form opens WhatsApp with your message ready to send.
							Prefer email? Write to{' '}
							<a
								href={EMAIL_HREF}
								className="text-neon-soft underline-offset-4 wrap-anywhere hover:underline"
							>
								{CONSTANTS.CONTACT_EMAIL}
							</a>
							, or book a call below. Every channel here reaches me directly.
						</p>
					</div>
				</div>

				<div className="relative lg:col-start-2 lg:row-span-2 lg:sticky lg:top-32 lg:row-start-1 lg:self-start">
					<div
						aria-hidden
						className="-z-10 pointer-events-none absolute inset-x-[6%] top-[18%] bottom-[22%] rounded-full bg-neon/30 blur-3xl"
					/>

					<div
						aria-hidden
						className="filament-glow absolute inset-x-10 top-0 h-px rounded-full"
					/>

					<ContactForm testId="contact-form" />
				</div>

				<section
					aria-labelledby="channels-title"
					className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2"
				>
					<h2 id="channels-title" className={SECTION_TITLE}>
						Or reach me on any channel.
					</h2>

					<ul className="border-border border-t">
						<li className="flex flex-wrap items-center justify-between gap-4 border-border border-b py-5">
							<a
								href={EMAIL_HREF}
								className="group flex min-w-0 items-center gap-4"
							>
								<Mail className="size-5 shrink-0 text-neon-soft" aria-hidden />
								<span className="flex min-w-0 flex-col gap-1">
									<span className="font-medium text-foreground text-xl sm:text-2xl">
										Email
									</span>

									<span className="break-all text-muted-foreground text-sm group-hover:text-foreground">
										{CONSTANTS.CONTACT_EMAIL}
									</span>
								</span>
							</a>

							<CopyEmailButton email={CONSTANTS.CONTACT_EMAIL} />
						</li>

						{CHANNEL_ROWS.map(({ href, label, Icon }) => (
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

					<div className="flex flex-col gap-3 pt-2">
						<p className="text-muted-foreground">Want the background first?</p>

						<a
							href={env.CV_URL}
							target="_blank"
							rel="noreferrer"
							className={TEXT_LINK}
						>
							Download resume (PDF)
							<ArrowUpRight
								className="group-hover:-translate-y-0.5 size-4 transition-transform group-hover:translate-x-0.5"
								aria-hidden
							/>
							<span className="sr-only"> (opens in a new tab)</span>
						</a>

						<Link href="/about" className={TEXT_LINK}>
							About me
							<ArrowRight
								className="size-4 transition-transform group-hover:translate-x-0.5"
								aria-hidden
							/>
						</Link>

						<Link href="/experiences" className={TEXT_LINK}>
							Experience history
							<ArrowRight
								className="size-4 transition-transform group-hover:translate-x-0.5"
								aria-hidden
							/>
						</Link>

						<Link href="/technologies" className={TEXT_LINK}>
							Technologies I use
							<ArrowRight
								className="size-4 transition-transform group-hover:translate-x-0.5"
								aria-hidden
							/>
						</Link>
					</div>
				</section>
			</section>
		</div>
	)
}
