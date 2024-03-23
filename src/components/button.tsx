import type { ComponentProps } from 'react'

// utils
import { twMerge } from 'tailwind-merge'

// types
interface IButtonProps extends ComponentProps<'button'> {
	variant?: keyof typeof VARIANTS
}

const VARIANTS = {
	primary:
		'text-white shadow-xl  bg-gradient-to-b from-[#1a1a1a] to-[#131313] transition-colors duration-500 ease-in-out hover:from-[#131313] hover:to-[#1a1a1a]',
	secondary: 'text-white shadow-xl bg-onyx hover:bg-onyx/80',
}

export function Button({
	type,
	className,
	variant = 'primary',
	...rest
}: IButtonProps) {
	return (
		<button
			type={type}
			className={twMerge(
				'cursor-pointer rounded-lg px-8 py-[20px] font-medium text-dark-gray transition-all duration-200 ease-in-out',
				VARIANTS[variant],
				className,
			)}
			{...rest}
		/>
	)
}
