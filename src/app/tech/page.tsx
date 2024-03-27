//components
import { TechCard } from '@/components/tech-card'
import { DEVELOPMENT_CARDS } from '@/utils/mock'

//types
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tecnologias',
}

export default function Tech() {
	return (
		<main className="flex w-full max-w-limit flex-col">
			<h1 className="mb-3 font-bold text-4xl text-white md:text-6xl sm:text-5xl">
				Tecnologias
			</h1>

			<h2 className="text-medium-gray md:text-2xl sm:text-xl">
				Linguagens, frameworks, ferramentas e outras coisas que eu uso
			</h2>

			<hr className="my-8 border-white/10 md:my-16" />

			<div className="flex flex-col gap-8">
				<h3 className="text-center font-bold text-3xl text-dark-gray sm:text-start">
					Desenvolvimento
				</h3>

				<div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-3 sm:grid-cols-2">
					{DEVELOPMENT_CARDS.map((tech) => (
						<TechCard key={tech.name} {...tech} />
					))}
				</div>
			</div>
		</main>
	)
}
