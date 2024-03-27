import { TechCard, type ITechCardProps } from '@/components/tech-card'
import { TECHNOLOGIES } from '@/utils/mock'

export default function Tech() {
	const groups = Object.values(
		TECHNOLOGIES.reduce(
			(acc, item: ITechCardProps) => {
				const category = item.category
				if (!acc[category]) {
					acc[category] = { category, items: [] }
				}
				acc[category].items.push(item)
				return acc
			},
			{} as Record<string, { category: string; items: ITechCardProps[] }>,
		),
	)

	console.log(groups)

	return (
		<main className="flex w-full max-w-limit flex-col">
			<h1 className="mb-3 font-bold text-4xl text-white md:text-6xl sm:text-5xl">
				Tecnologias
			</h1>

			<h2 className="text-medium-gray md:text-2xl sm:text-xl">
				Linguagens, frameworks, ferramentas e outras coisas que eu uso
			</h2>

			<hr className="my-8 border-white/10 md:my-16" />

			{groups.map(({ category, items }) => (
				<div className="flex flex-col gap-8" key={category}>
					<h3 className='text-center font-bold text-3xl text-dark-gray sm:text-start'>
						{category}
					</h3>

					<div className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-3 sm:grid-cols-2'>
						{items.map((tech) => (
							<TechCard key={tech.name} {...tech} />
						))}
					</div>
				</div>
			))}
		</main>
	)
}
