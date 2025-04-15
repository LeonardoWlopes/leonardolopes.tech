import { EXPERIENCES } from './mock'

export function getFirstRole() {
	return EXPERIENCES.flatMap((exp) => exp.roles).sort(
		(a, b) => a.startDate.getTime() - b.startDate.getTime(),
	)[0]
}
