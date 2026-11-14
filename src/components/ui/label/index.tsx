import { cn } from '~/lib/utils'
import type { ILabelProps } from './types'

function Label({ className, testId = 'label', ...props }: ILabelProps) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: htmlFor is passed through props
		<label
			data-slot="label"
			data-testid={testId}
			className={cn(
				'flex select-none items-center gap-2 font-medium text-sm leading-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}

export { Label }
