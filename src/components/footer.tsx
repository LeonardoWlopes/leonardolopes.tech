// components
import Image from 'next/image'
import Link from 'next/link'

// assets
import signature from '@/assets/icons/signature.svg'

// utils
import { CONSTANTS } from '@/utils/constants'

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Sobre', href: '/about' },
	{ label: 'Tecnologias', href: '/technologies' },
	{ label: 'Contato', href: '/contact' },
]

const ELSE_WHERE_LINKS = [
	{ label: 'Github', href: CONSTANTS.GITHUB_URL },
	{ label: 'LinkedIn', href: CONSTANTS.LINKEDIN_URL },
	{ label: 'Email', href: `mailto:${CONSTANTS.CONTACT_EMAIL}` },
	{ label: 'Instagram', href: CONSTANTS.INSTAGRAM_URL },
]

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="flex w-full justify-center border-primary-border border-t px-4 pt-8 pb-24 sm:pb-11">
			<div className="flex w-full max-w-limit flex-col-reverse justify-between gap-8 md:flex-row">
				<div className="flex flex-col">
					<Image src={signature} alt="Leonardo Lopes" width={200} />

					<p className="mb-8 text-onyx text-sm sm:mb-auto dark:text-dark-gray/50">
						Obrigado por vir 😁
					</p>

					<p className="text-onyx text-sm dark:text-dark-gray/50">
						© {currentYear} Leonardo Lopes. Todos os direitos
						reservados.
					</p>
				</div>

				<div className="flex gap-16 text-base text-light-gray sm:gap-32">
					<div className="flex flex-col">
						<span className="mb-8 font-bold text-onyx dark:text-primary">
							Links
						</span>

						<ul
							className="flex flex-col gap-3"
							data-cy="footer-navigation"
						>
							{NAV_LINKS.map(({ href, label }) => (
								<li key={label}>
									<Link
										className="text-onyx dark:text-light-gray"
										href={href}
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col">
						<span className="mb-8 font-bold text-onyx dark:text-primary">
							Fora Daqui
						</span>

						<ul
							className="flex flex-col gap-3"
							data-cy="footer-external-links"
						>
							{ELSE_WHERE_LINKS.map(({ href, label }) => (
								<li key={label}>
									<Link
										className="text-onyx dark:text-light-gray"
										href={href}
										target="_blank"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
