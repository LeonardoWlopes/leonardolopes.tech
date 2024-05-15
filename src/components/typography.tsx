import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ITypographyProps {
	children: ReactNode
	className?: string
}

export function PageTitle({ children, className }: ITypographyProps) {
	return (
		<h1
			className={twMerge(
				'font-bold text-4xl text-primary md:text-6xl sm:text-5xl',
				className,
			)}
		>
			{children}
		</h1>
	)
}

export function PageSubtitle({ children, className }: ITypographyProps) {
	return (
		<h2
			className={twMerge(
				'text-medium-gray md:text-2xl sm:text-xl',
				className,
			)}
		>
			{children}
		</h2>
	)
}
