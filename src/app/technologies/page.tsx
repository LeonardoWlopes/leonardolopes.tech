import { TechCard } from '@/components/tech-card'
import { PageTitle, PageSubtitle } from '@/components/typography'
import type { Metadata } from 'next'
import { TECH_CARDS, TECH_CATEGORIES } from '@/utils/mock'

export const metadata: Metadata = {
	title: 'Technologies',
	description:
		'Get to know the technologies I master and use in my projects, from programming languages to frameworks and libraries.',
}

export default function Tech() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">Technologies</PageTitle>

			<PageSubtitle>
				Languages, frameworks, tools, and other things I use
			</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<div className="flex flex-col gap-8">
				{TECH_CATEGORIES.map(({ name, category }) => {
					const items = TECH_CARDS.filter(
						(card) => card.category === category,
					)

					return (
						<div className="flex flex-col gap-8" key={name}>
							<h3 className="font-bold text-3xl text-light-gray capitalize sm:text-start dark:text-dark-gray">
								{name}
							</h3>

							<div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
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
