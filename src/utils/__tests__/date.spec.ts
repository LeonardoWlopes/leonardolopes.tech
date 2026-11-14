import { describe, expect, it } from 'vitest'
import {
	formatDuration,
	formatElapsed,
	formatMonthYear,
	formatYearsInWords,
	getAge,
} from '../date'

describe('formatMonthYear', () => {
	it('formats as short month and year', () => {
		const date = new Date(2025, 6, 1)

		expect(formatMonthYear(date)).toBe('Jul 2025')
	})
})

describe('formatDuration', () => {
	it('counts the end month as worked', () => {
		const start = new Date(2024, 10, 1)
		const end = new Date(2025, 7, 1)

		expect(formatDuration(start, end)).toBe('10 mo')
	})

	it('shows years and months', () => {
		const start = new Date(2023, 4, 1)
		const end = new Date(2024, 10, 1)

		expect(formatDuration(start, end)).toBe('1 yr 7 mo')
	})

	it('falls back to zero months', () => {
		const start = new Date(2024, 0, 1)
		const end = new Date(2023, 11, 1)

		expect(formatDuration(start, end)).toBe('0 mo')
	})
})

describe('formatElapsed', () => {
	it('uses plural units', () => {
		const start = new Date(2020, 0, 1)
		const now = new Date(2022, 3, 4)

		expect(formatElapsed(start, now)).toBe('2 years 3 months and 3 days')
	})

	it('uses singular units', () => {
		const start = new Date(2020, 0, 1)
		const now = new Date(2021, 1, 2)

		expect(formatElapsed(start, now)).toBe('1 year 1 month and 1 day')
	})

	it('omits zero parts', () => {
		const date = new Date(2020, 0, 1)

		expect(formatElapsed(date, date)).toBe('')
	})
})

describe('formatYearsInWords', () => {
	it('spells out whole years', () => {
		expect(
			formatYearsInWords(new Date(2020, 5, 1), new Date(2026, 10, 13)),
		).toBe('Six')
	})

	it('does not round up before the anniversary', () => {
		expect(
			formatYearsInWords(new Date(2020, 5, 1), new Date(2027, 4, 31)),
		).toBe('Six')
	})

	it('falls back to digits past twenty and clamps negatives', () => {
		expect(formatYearsInWords(new Date(2000, 0, 1), new Date(2030, 0, 1))).toBe(
			'30',
		)
		expect(formatYearsInWords(new Date(2030, 0, 1), new Date(2020, 0, 1))).toBe(
			'Zero',
		)
	})
})

describe('getAge', () => {
	it('returns full years', () => {
		const birthday = new Date(2003, 10, 10)

		expect(getAge(birthday, new Date(2026, 10, 9))).toBe(22)
		expect(getAge(birthday, new Date(2026, 10, 10))).toBe(23)
	})
})
