import type { StaticImageData } from 'next/image'

export interface IExperience {
	role: IExperienceRole
	company: string
	icon: StaticImageData
	description: string
}

interface IExperienceRole {
	title: string
	startDate: Date
	endDate: Date | null
}
