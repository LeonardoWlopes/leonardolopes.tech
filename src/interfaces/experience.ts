import type { StaticImageData } from 'next/image'
import type { IOutcome } from './outcome'

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
	/** What the work at this employer is about, above its roles */
	summary?: string
	roles: IExperienceRole[]
}

/** A role as the experience timeline shows it */
export interface IExperienceRoleEntry {
	/** anchor linked from the home ledger (`/experiences#<slug>`) */
	slug: string
	position: string
	client: string | null
	period: string
	duration: string
	description: string
	isCurrent: boolean
	outcome?: IOutcome
}

/** One employer (or freelance) with its roles, newest first */
export interface IExperienceGroup {
	id: string
	company: string
	icon: StaticImageData
	isFreelance: boolean
	relation: string
	summary: string | null
	clients: string[]
	period: string
	duration: string
	roles: IExperienceRoleEntry[]
}
