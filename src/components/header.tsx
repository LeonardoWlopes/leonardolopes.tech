// components
import Link from 'next/link'

// utils
import { CONSTANTS } from '@/utils/constants'
import { NAV_LINKS } from '@/utils/mock'

// assets
import { Linkedin, Github } from 'lucide-react'

// components
import { ThemeSwitch } from './theme-switch'

export function Header() {
	return (
		<header className="fixed bottom-8 z-10 flex w-[calc(100vw-32px)] max-w-limit justify-between rounded-xl border border-primary-border bg-white/60 p-4 text-light-gray backdrop-blur-sm sm:top-6 sm:bottom-[unset] sm:mb-32 dark:bg-onyx/60 dark:sm:bg-onyx/30 sm:bg-white/30">
			<div className="flex flex-1 items-center">
				<ul
					className="flex flex-1 justify-evenly gap-10 sm:items-center sm:justify-start"
					data-cy="header-navigation"
				>
					{NAV_LINKS.map(({ href, label, Icon }) => {
						return (
							<li key={href}>
								<Link
									className={
										'font-medium text-base text-primary dark:hover:text-light-gray/80 dark:text-light-gray hover:text-primary/80'
									}
									href={href}
								>
									<span className="hidden sm:flex">
										{label}
									</span>

									<abbr title={label}>
										<Icon className="sm:hidden" />
									</abbr>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>

			<div
				className="hidden items-center gap-6 text-primary md:flex dark:text-light-gray"
				data-cy="header-external-links"
			>
				<Link href={CONSTANTS.LINKEDIN_URL} target="_blank">
					<Linkedin />
				</Link>

				<Link href={CONSTANTS.GITHUB_URL} target="_blank">
					<Github />
				</Link>
			</div>

			<div className="mx-6 hidden w-[1px] border sm:flex dark:border-primary-border" />

			<ThemeSwitch className="hidden sm:flex" />
		</header>
	)
}
