import type { StaticImageData } from 'next/image'
import type pt from '@/i18n/languages/pt.json'

export interface IExperience {
	role: IExperienceRole
	company: string
	icon: StaticImageData
	description: keyof typeof pt.experiences
	link?: string
}

interface IExperienceRole {
	title: string
	startDate: Date
	endDate: Date | null
}
