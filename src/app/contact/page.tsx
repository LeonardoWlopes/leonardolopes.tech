// components
import { Mail } from '@/components/mail'

// types
import type { Metadata } from 'next'
import Link from 'next/link'

// icons
import { CONTACT_LINKS } from '@/utils/mock'

// next
export const metadata: Metadata = {
	title: 'Contato',
	description:
		'Entre em contato comigo para discutir oportunidades de colaboração, projetos ou apenas para bater um papo.',
}

export default function Contact() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<h1 className="mb-3 font-bold text-4xl text-primary md:text-6xl sm:text-5xl">
				Entre em contato
			</h1>

			<h2 className="text-medium-gray md:text-2xl sm:text-xl">
				Para discutir oportunidades de colaboração, projetos ou apenas
				para bater um papo
			</h2>

			<hr className="my-8 border-white/10 md:my-16" />

			<Mail />

			<div className="mt-16 flex items-center justify-center gap-8">
				{CONTACT_LINKS.map(({ href, Icon }) => (
					<Link
						className="h-6 w-6 text-light-gray"
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
