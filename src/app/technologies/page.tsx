import { Book } from 'lucide-react'
import type { Metadata } from 'next'
import { TechCard } from '@/components/tech-card'
import { PageSubtitle, PageTitle } from '@/components/typography'
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

			<div className="mb-8 flex items-center gap-2 text-light-gray text-xs dark:text-dark-gray">
				<span className="flex items-center gap-2">
					<Book className="w-5" />

					<span className="flex-1">
						Technologies marked with this icon indicate personal
						projects and academic studies, not professional
						experience
					</span>
				</span>
			</div>

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
