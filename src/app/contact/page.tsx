// components
import { PageTitle, PageSubtitle } from '@/components/typography'
import { Mail } from '@/components/mail'

// types
import type { Metadata } from 'next'
import Link from 'next/link'

// utils
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
			<PageTitle className="mb-3">Entre em contato</PageTitle>

			<PageSubtitle>
				Para discutir oportunidades de colaboração, projetos ou apenas
				para bater um papo
			</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<Mail />

			<div className="mt-16 flex items-center justify-center gap-8">
				{CONTACT_LINKS.map(({ href, Icon }) => (
					<Link
						className="h-6 w-6 text-primary opacity-80"
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
