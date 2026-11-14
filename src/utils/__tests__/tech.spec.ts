import { describe, expect, it, vi } from 'vitest'
import { ETechCategory } from '~/enums/tech'
import type { ITech } from '~/interfaces/tech'
import { groupTechsByCategory, pickTechsByName } from '../tech'

vi.mock('../mock', () => ({
	TECH_CARDS: [],
	TECH_CATEGORIES: [{ name: 'Languages', category: 0 }],
}))

const techs: ITech[] = [
	{ name: 'Typescript', image: '', category: ETechCategory.LANGUAGE },
	{ name: 'Go', image: '', category: ETechCategory.LANGUAGE },
	{ name: 'Docker', image: '', category: ETechCategory.TOOL },
]

describe('groupTechsByCategory', () => {
	it('groups by category in the given order, sorted by name', () => {
		const groups = groupTechsByCategory(techs, [
			{ name: 'Tools', category: ETechCategory.TOOL },
			{ name: 'Languages', category: ETechCategory.LANGUAGE },
		])

		expect(groups).toEqual([
			{ name: 'Tools', items: [techs[2]] },
			{ name: 'Languages', items: [techs[1], techs[0]] },
		])
	})

	it('defaults to the site catalog', () => {
		expect(groupTechsByCategory()).toEqual([{ name: 'Languages', items: [] }])
	})
})

describe('pickTechsByName', () => {
	it('keeps the requested order and skips unknown names', () => {
		expect(pickTechsByName(['Go', 'Kotlin', 'Docker'], techs)).toEqual([
			techs[1],
			techs[2],
		])
	})

	it('defaults to the site catalog', () => {
		expect(pickTechsByName(['Go'])).toEqual([])
	})
})
