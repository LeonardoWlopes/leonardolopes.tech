import { env } from '@/env'
import { Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

const LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Sobre', href: '/about' },
]

export function Header() {
	return (
		<header className="mb-32 flex w-full max-w-limit justify-between rounded-xl border border-[#5E5E5E]/10 bg-[#181818]/30 p-4 text-light-gray backdrop-blur-sm">
			<div className="flex items-center">
				<ul className="flex items-center gap-10">
					{LINKS.map(({ href, label }) => (
						<li key={href}>
							<Link
								className="font-medium text-base text-light-gray active:text-white hover:text-light-gray/80"
								href={href}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="flex items-center gap-6">
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
