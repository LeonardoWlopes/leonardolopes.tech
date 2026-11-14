import type { ComponentType } from 'react'

export interface IContactLink {
	href: string
	Icon: ComponentType<{ className?: string }>
	label: string
}
