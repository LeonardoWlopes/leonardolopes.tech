import { describe, expect, it } from 'vitest'
import type { IExperience } from '~/interfaces/experience'
import { buildCareerTimeline } from '../timeline'

const icon = { src: '', width: 1, height: 1 }

const experiences: IExperience[] = [
	{
		company: { name: 'Studio', icon },
		roles: [
			{
				title: 'Engineer @Alpha',
				startDate: new Date(2022, 0, 1),
				endDate: new Date(2023, 0, 1),
				description: '',
			},
			{
				title: 'Lead @Beta',
				startDate: new Date(2023, 0, 1),
				endDate: null,
				description: '',
			},
		],
	},
	{
		company: { name: 'Solo', icon },
		roles: [
			{
				title: 'Mobile Engineer',
				startDate: new Date(2020, 0, 1),
				endDate: new Date(2022, 0, 1),
				description: '',
			},
		],
	},
]

describe('buildCareerTimeline', () => {
	const now = new Date(2024, 0, 1).getTime()
	const { lanes, years } = buildCareerTimeline(experiences, now)

	it('orders lanes by start and spans the whole axis', () => {
		expect(lanes.map(({ label }) => label)).toEqual(['Solo', 'Studio'])
		expect(lanes[0].offset).toBe(0)
		expect(lanes[1].offset + lanes[1].width).toBeCloseTo(100, 0)
	})

	it('keeps an open lane open and lists client engagements', () => {
		expect(lanes[1].end).toBeNull()
		expect(lanes[1].engagements.map(({ label }) => label)).toEqual([
			'Alpha',
			'Beta',
		])
	})

	it('skips engagements for single-role employers', () => {
		expect(lanes[0].engagements).toEqual([])
		expect(lanes[0].end).toEqual(new Date(2022, 0, 1))
	})

	it('places a tick at every new year on the axis', () => {
		expect(years.map(({ year }) => year)).toEqual([
			2020, 2021, 2022, 2023, 2024,
		])
		expect(years[0].offset).toBe(0)
		expect(years[4].offset).toBe(100)
	})
})

describe('buildCareerTimeline axis start', () => {
	it('pins the first year label to the axis start when the career began mid-year', () => {
		const midYear: IExperience[] = [
			{
				company: { name: 'Solo', icon },
				roles: [
					{
						title: 'Engineer',
						startDate: new Date(2020, 5, 1),
						endDate: null,
						description: '',
					},
				],
			},
		]
		const { years } = buildCareerTimeline(
			midYear,
			new Date(2022, 5, 1).getTime(),
		)

		expect(years[0]).toEqual({ year: 2020, offset: 0 })
	})
})
