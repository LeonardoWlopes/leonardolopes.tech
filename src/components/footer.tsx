// components
import Image from 'next/image'
import Link from 'next/link'

// assets
import signature from '@/assets/icons/signature.svg'

// utils
import { env } from '@/env'

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Sobre', href: '/about' },
	{ label: 'Tecnologias', href: '/technologies' },
	{ label: 'Contato', href: '/contact' },
]

const ELSE_WHERE_LINKS = [
	{ label: 'Github', href: env.GITHUB_URL },
	{ label: 'LinkedIn', href: env.LINKEDIN_URL },
	{ label: 'Email', href: `mailto:${env.CONTACT_EMAIL}` },
]

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="flex w-full justify-center border-white/10 border-t px-4 pt-8 pb-24 sm:pb-11">
			<div className="flex w-full max-w-limit flex-col-reverse justify-between gap-8 md:flex-row">
				<div className="flex flex-col">
					<Image src={signature} alt="Leonardo Lopes" width={200} />

					<p className="mb-8 text-medium-gray text-sm sm:mb-auto">
						Obrigado por vir ^_^
					</p>

					<p className="text-medium-gray text-sm">
						© {currentYear} Leonardo Lopes. Todos os direitos
						reservados.
					</p>
				</div>

				<div className="flex gap-16 text-base text-light-gray sm:gap-32">
					<div className="flex flex-col">
						<span className="mb-8 text-white">Links</span>

						<ul className="flex flex-col gap-3">
							{NAV_LINKS.map(({ href, label }) => (
								<li key={label}>
									<Link href={href}>{label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col">
						<span className="mb-8 text-white">Fora Daqui</span>

						<ul className="flex flex-col gap-3">
							{ELSE_WHERE_LINKS.map(({ href, label }) => (
								<li key={label}>
									<Link href={href}>{label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
