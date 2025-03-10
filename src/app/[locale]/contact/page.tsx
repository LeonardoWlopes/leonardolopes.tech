// components
import { PageTitle, PageSubtitle } from '@/components/typography'
import { Mail } from '@/components/mail'
import { Link } from '@/i18n/navigation'

// types
import type { Metadata } from 'next'

// utils
import { CONTACT_LINKS } from '@/utils/mock'
import { getTranslations } from 'next-intl/server'

// hooks
import { useTranslations } from 'next-intl'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('contact._meta')

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default function Contact() {
	const t = useTranslations('contact')

	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">{t('title')}</PageTitle>

			<PageSubtitle>{t('subtitle')}</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<Mail />

			<div className="mt-16 flex items-center justify-center gap-8">
				{CONTACT_LINKS.map(({ href, Icon }) => (
					<Link
						className="h-6 w-6 text-primary opacity-80"
						key={href}
						href={href}
						target="_blank"
					>
						<Icon />
					</Link>
				))}
			</div>
		</div>
	)
}
