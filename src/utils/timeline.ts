import type { IExperience } from '~/interfaces/experience'
import type {
	ICareerTimeline,
	ITimelineLane,
	ITimelineSegment,
} from '~/interfaces/timeline'

function toPercent(value: number, total: number) {
	return Math.round((value / total) * 10000) / 100
}

function clientOf(title: string) {
	const [, client] = title.split('@')
	return (client ?? title).trim()
}

/**
 * Lays the career out on one axis from the first role to `now`, one lane
 * per employer with its client engagements inside. Offsets and widths are
 * percentages of the whole axis.
 */
export function buildCareerTimeline(
	experiences: IExperience[],
	now: number,
): ICareerTimeline {
	const starts = experiences.flatMap(({ roles }) =>
		roles.map(({ startDate }) => startDate.getTime()),
	)
	const axisStart = Math.min(...starts)
	const total = now - axisStart

	function segment(label: string, start: Date, end: Date | null) {
		const from = start.getTime() - axisStart
		const to = (end?.getTime() ?? now) - axisStart

		return {
			label,
			start,
			end,
			offset: toPercent(from, total),
			width: toPercent(to - from, total),
		} satisfies ITimelineSegment
	}

	const lanes: ITimelineLane[] = experiences
		.map(({ company, roles }) => {
			const start = new Date(
				Math.min(...roles.map((r) => r.startDate.getTime())),
			)
			const isOpen = roles.some((r) => r.endDate === null)
			const end = isOpen
				? null
				: new Date(Math.max(...roles.map((r) => r.endDate?.getTime() ?? 0)))
			const engagements =
				roles.length > 1
					? roles
							.map((r) => segment(clientOf(r.title), r.startDate, r.endDate))
							.sort((a, b) => a.offset - b.offset)
					: []

			return { ...segment(company.name, start, end), engagements }
		})
		.sort((a, b) => a.offset - b.offset)

	const firstYear = new Date(axisStart).getFullYear()
	const lastYear = new Date(now).getFullYear()
	const years = Array.from(
		{ length: lastYear - firstYear + 1 },
		(_, index) => firstYear + index,
	).map((year) => ({
		year,
		// The first year starts the axis even when the career began mid-year
		offset: Math.max(
			0,
			toPercent(new Date(year, 0, 1).getTime() - axisStart, total),
		),
	}))

	return { lanes, years }
}
