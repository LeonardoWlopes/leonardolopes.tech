import type { ReactNode } from 'react'

// components
import Link from 'next/link'

// types
interface IKnowCardProps {
	title: string
	description: string
	href: string
	children: ReactNode
}

export function KnowCard({
	description,
	href,
	title,
	children,
}: IKnowCardProps) {
	return (
		<Link
			className='relative flex aspect-square w-full max-w-[500px] flex-col items-center overflow-hidden rounded-[40px] bg-card pt-16 shadow-2xl'
			href={href}
			data-cy="know-card"
		>
			<span className="mb-4 font-extrabold text-[32px] text-secondary">
				{title}
			</span>

			<p className="mb-auto text-center font-medium text-dark-gray">
				{description}
			</p>

			{children}
		</Link>
	)
}
