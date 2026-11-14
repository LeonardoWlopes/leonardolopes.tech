import type { IExperienceRole } from '~/interfaces/experience'
import { EXPERIENCES } from './mock'

export function sortRolesByRecent(roles: IExperienceRole[]) {
	return [...roles].sort(
		(a, b) => b.startDate.getTime() - a.startDate.getTime(),
	)
}

export function getFirstRole(experiences = EXPERIENCES) {
	return experiences
		.flatMap((experience) => experience.roles)
		.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())[0]
}
