import type { StaticImageData } from 'next/image'
import type { ETechCategory } from '~/enums/tech'

export interface ITech {
	name: string
	image: string | StaticImageData
	link?: string
	nonProfessional?: boolean
	category: ETechCategory
}

export interface ITechCategory {
	name: string
	category: ETechCategory
}
