// types
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Experiencias',
	description:
		'Conheça um pouco mais sobre mim, minhas experiências e projetos',
}

export default function Contact() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<h1 className="mb-3 font-bold text-4xl text-primary md:text-6xl sm:text-5xl">
				Experiencias
			</h1>

			<h2 className="text-medium-gray md:text-2xl sm:text-xl">
				Minha trajetória profissional até aqui
			</h2>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />
		</div>
	)
}
