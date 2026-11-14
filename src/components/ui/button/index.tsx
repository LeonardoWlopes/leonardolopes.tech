import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cn } from '~/lib/utils'
import { buttonVariants } from './styles'
import type { IButtonProps } from './types'

function Button({
	className,
	variant = 'default',
	size = 'default',
	testId = 'button',
	...props
}: IButtonProps) {
	return (
		<ButtonPrimitive
			data-slot="button"
			data-testid={testId}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
