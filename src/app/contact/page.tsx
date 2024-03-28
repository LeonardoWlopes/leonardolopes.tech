// components
import { Mail } from '@/components/mail'

//types
import type { Metadata } from 'next'

// next
export const metadata: Metadata = {
	title: 'Contato',
	description:
		'Entre em contato comigo para discutir oportunidades de colaboração, projetos ou apenas para bater um papo.',
}

export default function Contact() {
	return (
		<main className="flex w-full max-w-limit flex-col">
			<h1 className="mb-3 font-bold text-4xl text-white md:text-6xl sm:text-5xl">
				Entre em contato
			</h1>

			<h2 className="text-medium-gray md:text-2xl sm:text-xl">
				Para discutir oportunidades de colaboração, projetos ou apenas
				para bater um papo
			</h2>

			<hr className="my-8 border-white/10 md:my-16" />

			<Mail />
		</main>
	)
}
