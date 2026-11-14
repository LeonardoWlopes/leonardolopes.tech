import { Palette } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import signature from '~/assets/icons/signature.svg'
import type { IDefaultComponentProps } from '~/interfaces/component'
import { cn } from '~/lib/utils'
import { getCachedNow } from '~/utils/clock'
import { ELSE_WHERE_LINKS, HOME_HERO } from '~/utils/mock'
import { NAV_LINKS } from '~/utils/navigation'

const LINK =
	'text-muted-foreground text-sm transition-colors hover:text-foreground'

export async function Footer({
	className,
	testId = 'footer',
}: IDefaultComponentProps) {
	const currentYear = new Date(await getCachedNow()).getFullYear()

	return (
		<footer
			data-testid={testId}
			className={cn(
				'relative w-full border-border border-t px-[clamp(1.25rem,5vw,6rem)] pt-16 pb-32 sm:pb-12',
				className,
			)}
		>
			<div
				aria-hidden
				className="filament-glow -top-px absolute inset-x-[clamp(1.25rem,5vw,6rem)] h-px opacity-70"
			/>

			<div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto]">
				<div className="flex flex-col gap-5">
					<Image
						src={signature}
						alt="Leonardo Lopes"
						width={200}
						className="footer-signature opacity-90"
					/>

					<p className="max-w-[40ch] text-pretty text-muted-foreground text-sm">
						{HOME_HERO.role}. {HOME_HERO.availability}.
					</p>
				</div>

				<div className="flex gap-16 sm:gap-24">
					<nav className="flex flex-col gap-4" aria-labelledby="footer-site">
						<p id="footer-site" className="font-medium text-foreground text-sm">
							Site
						</p>

						<ul className="flex flex-col gap-3">
							{NAV_LINKS.map(({ href, label }) => (
								<li key={label}>
									<Link className={LINK} href={href}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<nav
						className="flex flex-col gap-4"
						aria-labelledby="footer-elsewhere"
					>
						<p
							id="footer-elsewhere"
							className="font-medium text-foreground text-sm"
						>
							Elsewhere
						</p>

						<ul className="flex flex-col gap-3">
							{ELSE_WHERE_LINKS.map(({ href, label }) => (
								<li key={label}>
									<a
										className={LINK}
										href={href}
										target="_blank"
										rel="noreferrer"
									>
										{label}
										<span className="sr-only"> (opens in a new tab)</span>
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>

			<div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-border/60 border-t pt-6 text-muted-foreground text-xs">
				<p>© {currentYear} Leonardo Lopes. All rights reserved.</p>

				<Link
					href="/styleguide"
					className="inline-flex min-h-6 items-center gap-2 transition-colors hover:text-neon-soft"
				>
					<Palette className="size-3.5" aria-hidden />
					Styleguide
				</Link>
			</div>
		</footer>
	)
}
