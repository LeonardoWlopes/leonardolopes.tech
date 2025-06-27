import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

// utils
import { twMerge } from 'tailwind-merge'

// types
interface IButtonProps
	extends ComponentProps<'button'>,
		VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
	'flex cursor-pointer justify-center gap-2 rounded-lg px-8 py-[20px] font-medium text-primary transition-all duration-200 ease-in-out shadow-xl',
	{
		variants: {
			variant: {
				primary:
					'bg-linear-to-b from-[#1a1a1a] to-[#131313] transition-colors duration-500 ease-in-out hover:from-[#131313] hover:to-[#1a1a1a] text-white',
				secondary:
					'dark:text-secondary dark:bg-onyx bg-faint-white dark:hover:bg-onyx/80',
			},
		},
	},
)

export function Button({
	type,
	className,
	variant = 'primary',
	...rest
}: IButtonProps) {
	return (
		<button
			type={type}
			className={twMerge(buttonVariants({ className, variant }))}
			{...rest}
		/>
	)
}
