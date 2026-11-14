import type {
	IExperience,
	IExperienceGroup,
	IExperienceRole,
	IExperienceRoleEntry,
} from '~/interfaces/experience'
import type { IOutcome } from '~/interfaces/outcome'
import { formatDuration, formatMonthYear } from './date'
import { toSlug } from './slug'

const FREELANCE = 'Freelance'

/** "Tech Lead @Linda Lifetech" → position + client */
export function splitRoleTitle(title: string) {
	const [position, client] = title.split('@').map((part) => part.trim())

	return { position, client: client || null }
}

export function formatPeriod(start: Date, end: Date | null) {
	return `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : 'Present'}`
}

function describeRelation(company: string, clients: string[]) {
	if (company === FREELANCE) return 'Independent · multiple client projects'
	if (clients.length === 1) return `Employer · client: ${clients[0]}`

	return `Employer · ${clients.length} client engagements`
}

function toEntry(
	role: IExperienceRole,
	outcomes: IOutcome[],
	now: Date,
): IExperienceRoleEntry {
	const slug = toSlug(role.title)

	return {
		slug,
		...splitRoleTitle(role.title),
		period: formatPeriod(role.startDate, role.endDate),
		duration: formatDuration(role.startDate, role.endDate ?? now),
		description: role.description,
		isCurrent: role.endDate === null,
		outcome: outcomes.find(({ href }) => href === `/experiences#${slug}`),
	}
}

/** Employers in source order, each with its roles most recent first */
export function buildExperienceGroups(
	experiences: IExperience[],
	outcomes: IOutcome[],
	now: Date,
): IExperienceGroup[] {
	return experiences.map(({ company, summary, roles }) => {
		const sorted = [...roles].sort(
			(a, b) => b.startDate.getTime() - a.startDate.getTime(),
		)

		const entries = sorted.map((role) => toEntry(role, outcomes, now))

		const clients = entries
			.map(({ client }) => client)
			.filter((client): client is string => Boolean(client))

		const start = sorted[sorted.length - 1].startDate
		const end = sorted.some(({ endDate }) => endDate === null)
			? null
			: new Date(
					Math.max(...sorted.map(({ endDate }) => endDate?.getTime() ?? 0)),
				)

		return {
			id: `employer-${toSlug(company.name)}`,
			company: company.name,
			icon: company.icon,
			isFreelance: company.name === FREELANCE,
			relation: describeRelation(company.name, clients),
			summary: summary ?? null,
			clients,
			period: formatPeriod(start, end),
			duration: formatDuration(start, end ?? now),
			roles: entries,
		}
	})
}
