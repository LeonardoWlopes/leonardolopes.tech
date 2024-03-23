import type { ComponentProps } from 'react'

// utils
import { twMerge } from 'tailwind-merge'

// types
interface IButtonProps extends ComponentProps<'button'> {
	variant?: keyof typeof VARIANTS
}

const VARIANTS = {
	primary: 'text-white shadow-xl bg-onyx hover:bg-onyx/80',
	secondary: '',
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
				'cursor-pointer rounded-lg px-8 py-[20px] font-medium text-dark-gray transition-colors duration-200 ease-in-out',
				VARIANTS[variant],
				className,
			)}
			{...rest}
		/>
	)
}
