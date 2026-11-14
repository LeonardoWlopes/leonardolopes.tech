import { describe, expect, it } from 'vitest'
import { toSlug } from '../slug'

describe('toSlug', () => {
	it('turns a role title into a url fragment', () => {
		expect(toSlug('Tech Lead @Linda Lifetech')).toBe('tech-lead-linda-lifetech')
	})

	it('strips accents and edge separators', () => {
		expect(toSlug('  Software Engineer @Grupo Petrópolis! ')).toBe(
			'software-engineer-grupo-petropolis',
		)
	})
})
