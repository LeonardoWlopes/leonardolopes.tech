// components
import Link from 'next/link'

// utils
import { env } from '@/env'

// assets
import { Linkedin, Github, Home, UserRound, Atom, Mail } from 'lucide-react'

const LINKS = [
	{ label: 'Home', href: '/', Icon: Home },
	{ label: 'Sobre', href: '/about', Icon: UserRound },
	{ label: 'Tecnologias', href: '/technologies', Icon: Atom },
	{ label: 'Contato', href: '/contact', Icon: Mail },
]

export function Header() {
	return (
		<header className="fixed bottom-8 z-10 flex w-11/12 max-w-limit justify-between rounded-xl border border-[#5E5E5E]/10 bg-[#181818]/60 p-4 text-light-gray backdrop-blur-sm sm:static sm:mb-32 sm:w-full sm:bg-[#181818]/30">
			<div className="flex flex-1 items-center">
				<ul className="flex flex-1 justify-evenly gap-10 sm:items-center sm:justify-start">
					{LINKS.map(({ href, label, Icon }) => (
						<li key={href}>
							<Link
								className="font-medium text-base text-light-gray active:text-white hover:text-light-gray/80"
								href={href}
							>
								<span className="hidden sm:flex">{label}</span>

								<abbr title={label}>
									<Icon className="sm:hidden" />
								</abbr>
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="hidden items-center gap-6 sm:flex">
				<Link href={env.LINKEDIN_URL} target="_blank">
					<Linkedin />
				</Link>

				<Link href={env.GITHUB_URL} target="_blank">
					<Github />
				</Link>
			</div>
		</header>
	)
}
