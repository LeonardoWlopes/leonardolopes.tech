import { GithubIcon, LinkedinIcon } from '~/components/brand-icons'
import { MotionToggle } from '~/components/motion-toggle'
import { NavLinks } from '~/components/nav-links'
import type { IDefaultComponentProps } from '~/interfaces/component'
import { cn } from '~/lib/utils'
import { CONSTANTS } from '~/utils/constants'
import { OUTCOMES } from '~/utils/mock'

const CURRENT_OUTCOME = OUTCOMES.find(({ isCurrent }) => isCurrent)

const SOCIAL_LINKS = [
	{ href: CONSTANTS.LINKEDIN_URL, label: 'LinkedIn', Icon: LinkedinIcon },
	{ href: CONSTANTS.GITHUB_URL, label: 'GitHub', Icon: GithubIcon },
]

export function Header({
	className,
	testId = 'header',
}: IDefaultComponentProps) {
	return (
		<header
			data-testid={testId}
			className={cn(
				'glass-control header-glass fixed inset-x-2 bottom-6 z-50 mx-auto flex items-center justify-between gap-1 rounded-full bg-background/85 p-1.5 sm:inset-x-[clamp(1.25rem,5vw,6rem)] sm:top-6 sm:bottom-auto sm:gap-4 sm:p-2',
				className,
			)}
		>
			<span aria-hidden className="header-rim hidden sm:block" />

			<nav aria-label="Main" className="flex min-w-0 flex-1">
				<NavLinks />
			</nav>

			<MotionToggle className="size-8 shrink-0 md:hidden" />

			<div className="hidden items-center gap-1 pr-2 md:flex">
				<span
					aria-hidden
					className="live-chip mr-2 flex items-center gap-2 text-muted-foreground text-xs"
				>
					<span className="size-1.5 rounded-full bg-neon-soft" />
					{CURRENT_OUTCOME?.client} · in production
				</span>

				<MotionToggle />

				{SOCIAL_LINKS.map(({ href, label, Icon }) => (
					<a
						key={href}
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={`${label} (opens in a new tab)`}
						className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
					>
						<Icon className="size-5" aria-hidden />
					</a>
				))}
			</div>
		</header>
	)
}
