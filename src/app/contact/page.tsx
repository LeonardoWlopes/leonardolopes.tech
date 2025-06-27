import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail } from '@/components/mail'
import { PageSubtitle, PageTitle } from '@/components/typography'
import { CONTACT_LINKS } from '@/utils/mock'

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Contact me to discuss collaboration opportunities, projects, or just to chat.',
}

export default function Contact() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">Contact</PageTitle>

			<PageSubtitle>Let's build something amazing together?</PageSubtitle>

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
