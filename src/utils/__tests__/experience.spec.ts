import type { StaticImageData } from 'next/image'
import { describe, expect, it } from 'vitest'
import type { IExperience } from '~/interfaces/experience'
import type { IOutcome } from '~/interfaces/outcome'
import {
	buildExperienceGroups,
	formatPeriod,
	splitRoleTitle,
} from '../experience'

const icon = { src: '/x.png', width: 1, height: 1 } as StaticImageData
const now = new Date(2026, 10, 13)

const EXPERIENCES: IExperience[] = [
	{
		company: { name: 'Acme', icon },
		roles: [
			{
				title: 'Engineer @Client Two',
				startDate: new Date(2024, 0, 1),
				endDate: new Date(2025, 5, 1),
				description: 'Second',
			},
			{
				title: 'Tech Lead @Client Três',
				startDate: new Date(2025, 0, 1),
				endDate: null,
				description: 'Current',
			},
		],
	},
	{
		company: { name: 'Studio', icon },
		roles: [
			{
				title: 'Engineer @Only Client',
				startDate: new Date(2021, 0, 1),
				endDate: new Date(2022, 5, 1),
				description: 'One',
			},
			{
				title: 'Engineer @Only Client II',
				startDate: new Date(2020, 0, 1),
				endDate: new Date(2022, 8, 1),
				description: 'Two',
			},
		],
	},
	{
		company: { name: 'Freelance', icon },
		roles: [
			{
				title: 'Mobile Engineer',
				startDate: new Date(2019, 0, 1),
				endDate: new Date(2019, 11, 1),
				description: 'Apps',
			},
		],
	},
]

const OUTCOMES = [
	{ metric: '−59%', href: '/experiences#tech-lead-client-tres' },
] as IOutcome[]

describe('splitRoleTitle', () => {
	it('splits position and client', () => {
		expect(splitRoleTitle('Tech Lead @Linda Lifetech')).toEqual({
			position: 'Tech Lead',
			client: 'Linda Lifetech',
		})
	})

	it('has no client without @', () => {
		expect(splitRoleTitle('Mobile Engineer')).toEqual({
			position: 'Mobile Engineer',
			client: null,
		})
	})
})

describe('formatPeriod', () => {
	it('marks an open role as present', () => {
		expect(formatPeriod(new Date(2025, 6, 1), null)).toBe('Jul 2025 – Present')
	})
})

describe('buildExperienceGroups', () => {
	const [acme, studio, freelance] = buildExperienceGroups(
		EXPERIENCES,
		OUTCOMES,
		now,
	)

	it('sorts roles most recent first and keeps the home anchors', () => {
		expect(acme.roles.map(({ slug }) => slug)).toEqual([
			'tech-lead-client-tres',
			'engineer-client-two',
		])
	})

	it('lights only the open role and attaches its outcome', () => {
		expect(acme.roles[0].isCurrent).toBe(true)
		expect(acme.roles[0].outcome?.metric).toBe('−59%')
		expect(acme.roles[1].isCurrent).toBe(false)
		expect(acme.roles[1].outcome).toBeUndefined()
	})

	it('describes the employer and client relationship', () => {
		expect(acme.relation).toBe('Employer · 2 client engagements')
		expect(acme.clients).toEqual(['Client Três', 'Client Two'])
		expect(acme.period).toBe('Jan 2024 – Present')
		expect(acme.id).toBe('employer-acme')
		expect(freelance.relation).toBe('Independent · multiple client projects')
		expect(freelance.isFreelance).toBe(true)
	})

	it('spans the employer from the first start to the latest end', () => {
		expect(studio.period).toBe('Jan 2020 – Sep 2022')
	})

	it('names a single client', () => {
		const [single] = buildExperienceGroups([EXPERIENCES[2]], [], now)
		const [one] = buildExperienceGroups(
			[{ ...EXPERIENCES[1], roles: [EXPERIENCES[1].roles[0]] }],
			[],
			now,
		)

		expect(single.clients).toEqual([])
		expect(one.relation).toBe('Employer · client: Only Client')
	})
})
