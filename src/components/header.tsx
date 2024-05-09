'use client'

// components
import Link from 'next/link'

// utils
import { twMerge } from 'tailwind-merge'
import { CONSTANTS } from '@/utils/constants'

// assets
import {
	Linkedin,
	Github,
	Home,
	UserRound,
	Atom,
	Mail,
	Moon,
} from 'lucide-react'

// next
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
	{ label: 'Home', href: '/', Icon: Home },
	{ label: 'Sobre', href: '/about', Icon: UserRound },
	{ label: 'Tecnologias', href: '/technologies', Icon: Atom },
	{ label: 'Contato', href: '/contact', Icon: Mail },
]

export function Header() {
	const path = usePathname()

	// const ThemeIcon = theme === 'dark' ? Moon : Sun
	const ThemeIcon = Moon

	return (
		<header className="fixed bottom-8 z-10 flex w-[calc(100vw-32px)] max-w-limit justify-between rounded-xl border border-primary-border bg-[#181818]/60 p-4 text-light-gray backdrop-blur-sm sm:top-6 sm:bottom-[unset] sm:mb-32 sm:bg-[#181818]/30">
			<div className="flex flex-1 items-center">
				<ul
					className="flex flex-1 justify-evenly gap-10 sm:items-center sm:justify-start"
					data-cy="header-navigation"
				>
					{NAV_LINKS.map(({ href, label, Icon }) => {
						const isActive = path === href

						return (
							<li key={href}>
								<Link
									className={twMerge(
										'font-medium text-base',
										isActive
											? 'text-secondary'
											: 'text-light-gray',
										'sm:hover:text-light-gray/80',
									)}
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
				className="hidden items-center gap-6 sm:flex"
				data-cy="header-external-links"
			>
				<Link href={CONSTANTS.LINKEDIN_URL} target="_blank">
					<Linkedin />
				</Link>

				<Link href={CONSTANTS.GITHUB_URL} target="_blank">
					<Github />
				</Link>
			</div>

			<div className="mx-6 w-[1px] border border-primary-border" />

			<ThemeIcon className="cursor-pointer" />
		</header>
	)
}
