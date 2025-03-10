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
				'font-bold text-4xl text-primary sm:text-5xl md:text-6xl',
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
				'text-medium-gray sm:text-xl md:text-2xl',
				className,
			)}
		>
			{children}
		</h2>
	)
}
