import type { ReactNode } from 'react'
import type { IDefaultComponentProps } from '~/interfaces/component'

export interface ISignatureFinaleProps extends IDefaultComponentProps {
	message: string
	/** Calls to action shown with the closing line */
	children?: ReactNode
}
