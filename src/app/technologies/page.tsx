//components
import { TechCard } from '@/components/tech-card'

//types
import type { Metadata } from 'next'
import { ETechCategory } from '@/enums/tech'

//utils
import { DEVELOPMENT_CARDS } from '@/utils/mock'

//next
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
			<h1 className="mb-3 font-bold text-4xl text-secondary md:text-6xl sm:text-5xl">
				Tecnologias
			</h1>

			<h2 className="text-medium-gray md:text-2xl sm:text-xl">
				Linguagens, frameworks, ferramentas e outras coisas que eu uso
			</h2>

			<hr className="my-8 border-white/10 md:my-16" />

			<div className="flex flex-col gap-8">
				{CATEGORIES.map(({ name, category }) => {
					const items = DEVELOPMENT_CARDS.filter(
						(card) => card.category === category,
					)

					return (
						<div className="flex flex-col gap-8" key={name}>
							<h3 className="text-center font-bold text-3xl text-primary sm:text-start">
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
