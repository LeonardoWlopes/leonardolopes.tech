import type { ITechCardProps } from '@/components/tech-card'
import { ETechCategory } from '@/enums/tech'

//assets
import javascript from '@/assets/icons/javascript.svg'
import typescript from '@/assets/icons/typescript.svg'
import python from '@/assets/icons/python.svg'

export const TECHNOLOGIES: ITechCardProps[] = [
	{
		name: 'Javascript',
		image: javascript,
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Typescript',
		image: typescript,
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Python',
		image: python,
		category: ETechCategory.LANGUAGE,
	},
]
