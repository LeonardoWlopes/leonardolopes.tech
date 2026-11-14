import type { Button as ButtonPrimitive } from '@base-ui/react/button'
import type { VariantProps } from 'class-variance-authority'
import type { IDefaultComponentProps } from '~/interfaces/component'
import type { buttonVariants } from './styles'

export type IButtonProps = ButtonPrimitive.Props &
	VariantProps<typeof buttonVariants> &
	IDefaultComponentProps
