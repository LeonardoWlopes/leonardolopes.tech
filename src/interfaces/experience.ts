import type { StaticImageData } from 'next/image'

export interface IExperienceCompany {
	name: string
	icon: StaticImageData
}

export interface IExperienceRole {
	title: string
	startDate: Date
	endDate: Date | null
	description: string
}

export interface IExperience {
	company: IExperienceCompany
	roles: IExperienceRole[]
}
