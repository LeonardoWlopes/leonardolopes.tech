import { describe, expect, it, vi } from 'vitest'
import type { IExperience, IExperienceRole } from '~/interfaces/experience'
import { getFirstRole, sortRolesByRecent } from '../role'

vi.mock('../mock', () => ({ EXPERIENCES: [] }))

function role(title: string, start: Date): IExperienceRole {
	return { title, startDate: start, endDate: null, description: '' }
}

const older = role('older', new Date(2020, 0, 1))
const newer = role('newer', new Date(2024, 0, 1))
const oldest = role('oldest', new Date(2018, 0, 1))

describe('sortRolesByRecent', () => {
	it('puts the most recent first without mutating the input', () => {
		const input = [older, newer]

		expect(sortRolesByRecent(input)).toEqual([newer, older])
		expect(input).toEqual([older, newer])
	})
})

describe('getFirstRole', () => {
	it('returns the earliest role across companies', () => {
		const experiences = [
			{ roles: [newer, older] },
			{ roles: [oldest] },
		] as unknown as IExperience[]

		expect(getFirstRole(experiences)).toBe(oldest)
	})

	it('defaults to the site experiences', () => {
		expect(getFirstRole()).toBeUndefined()
	})
})
