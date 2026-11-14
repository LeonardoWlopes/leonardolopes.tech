import { describe, expect, it } from 'vitest'
import { STACK_GROUPS, TECH_CARDS } from '../mock'

describe('STACK_GROUPS', () => {
	it('only names technologies that exist in the catalog', () => {
		const catalog = new Set(TECH_CARDS.map(({ name }) => name))
		const missing = STACK_GROUPS.flatMap(({ techs }) =>
			techs.filter((name) => !catalog.has(name)),
		)

		expect(missing).toEqual([])
	})
})
