// components
import { TechCard } from '@/components/tech-card'
import { PageTitle, PageSubtitle } from '@/components/typography'

// types
import type { Metadata } from 'next'
import { ETechCategory } from '@/enums/tech'

// utils
import { DEVELOPMENT_CARDS } from '@/utils/mock'

// next
export const metadata: Metadata = {
	title: 'Tecnologias',
	description: 'Conheça as tecnologias que utilizo no meu dia a dia.',
}

const CATEGORIES = [
	{
		name: 'Linguagens',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Runtime JS',
		category: ETechCategory.RUNTIME,
	},
	{
		name: 'Frameworks',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Bibliotecas',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Ferramentas',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Banco de Dados',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Testes',
		category: ETechCategory.TESTING,
	},
]

export default function Tech() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">Tecnologias</PageTitle>

			<PageSubtitle>
				Linguagens, frameworks, ferramentas e outras coisas que eu uso
			</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<div className="flex flex-col gap-8">
				{CATEGORIES.map(({ name, category }) => {
					const items = DEVELOPMENT_CARDS.filter(
						(card) => card.category === category,
					)

					return (
						<div className="flex flex-col gap-8" key={name}>
							<h3 className="font-bold text-3xl text-light-gray sm:text-start dark:text-dark-gray">
								{name}
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
