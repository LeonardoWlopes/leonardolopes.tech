// components
import { Link } from '@/i18n/navigation'
import Image from 'next/image'

// assets
import signature from '@/assets/icons/signature.svg'

// utils
import { ELSE_WHERE_LINKS, NAV_LINKS } from '@/utils/mock'

// hooks
import { useTranslations } from 'next-intl'

export function Footer() {
	const t = useTranslations('footer')

	const currentYear = new Date().getFullYear()

	return (
		<footer className="flex w-full justify-center border-primary-border border-t px-4 pt-8 pb-24 sm:pb-11">
			<div className="flex w-full max-w-limit flex-col-reverse justify-between gap-8 md:flex-row">
				<div className="flex flex-col">
					<Image src={signature} alt="Leonardo Lopes" width={200} />

					<p className="mb-8 text-onyx text-sm sm:mb-auto dark:text-dark-gray/50">
						{t('gratings')}
					</p>

					<p className="text-onyx text-sm dark:text-dark-gray/50">
						{t('copy', {
							year: currentYear,
						})}
					</p>
				</div>

				<div className="flex gap-16 text-base text-light-gray sm:gap-32">
					<div className="flex flex-col">
						<span className="mb-8 font-bold text-onyx dark:text-primary">
							{t('links.title')}
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
										{t(`links.${label}`)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col">
						<span className="mb-8 font-bold text-onyx dark:text-primary">
							{t('external_links.title')}
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
										{t(`external_links.${label}`)}
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
