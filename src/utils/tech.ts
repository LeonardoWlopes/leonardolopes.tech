import type { ITech, ITechCategory } from '~/interfaces/tech'
import { TECH_CARDS, TECH_CATEGORIES } from './mock'

export function groupTechsByCategory(
	techs: ITech[] = TECH_CARDS,
	categories: readonly ITechCategory[] = TECH_CATEGORIES,
) {
	return categories.map(({ name, category }) => ({
		name,
		items: techs
			.filter((tech) => tech.category === category)
			.sort((a, b) => a.name.localeCompare(b.name)),
	}))
}

export function pickTechsByName(names: readonly string[], techs = TECH_CARDS) {
	return names.flatMap((name) => techs.filter((tech) => tech.name === name))
}
