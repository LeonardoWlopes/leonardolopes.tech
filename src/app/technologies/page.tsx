// components
import { TechCard } from '@/components/tech-card'
import { PageTitle, PageSubtitle } from '@/components/typography'

// types
import type { Metadata } from 'next'

// utils
import { TECH_CARDS, TECH_CATEGORIES } from '@/utils/mock'
import { getTranslations } from 'next-intl/server'

// hooks
import { useTranslations } from 'next-intl'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('technologies._meta')

	return {
		title: t('title'),
		description: t('description'),
	}
}

export default function Tech() {
	const t = useTranslations('technologies')

	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">{t('title')}</PageTitle>

			<PageSubtitle>{t('subtitle')}</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<div className="flex flex-col gap-8">
				{TECH_CATEGORIES.map(({ name, category }) => {
					const items = TECH_CARDS.filter(
						(card) => card.category === category,
					)

					return (
						<div className="flex flex-col gap-8" key={name}>
							<h3 className="font-bold text-3xl text-light-gray sm:text-start dark:text-dark-gray">
								{t(name)}
							</h3>

							<div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-3 sm:grid-cols-2">
								{items.map((tech) => (
									<TechCard key={tech.name} {...tech} />
								))}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
