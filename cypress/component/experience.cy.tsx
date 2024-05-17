import { Experience } from '@/components/experience'
import { EXPERIENCES } from '@/utils/mock'

const experience = EXPERIENCES[Math.floor(Math.random() * EXPERIENCES.length)]

beforeEach(() => {
	cy.mount(<Experience experience={experience} />)
})

it('renders the company name and role title', () => {
	cy.get('[data-cy="experience-title"]').should('contain', experience.company)
	cy.get('[data-cy="experience-title"]').should(
		'contain',
		experience.role.title,
	)
})

it('renders the start date, end date, and time duration', () => {
	cy.get('[data-cy="experience-date"]').should(
		'contain',
		`${experience.role.startDate.getFullYear()}`,
	)

	if (experience.role.endDate) {
		cy.get('[data-cy="experience-date"]').should(
			'contain',
			`${experience.role.endDate.getFullYear()}`,
		)
	} else {
		cy.get('[data-cy="experience-date"]').should('contain', 'o momento')
	}
})

it('renders the company logo', () => {
	cy.get('[data-cy="experience-logo"]').should('have.attr', 'src')

	cy.get('[data-cy="experience-logo"]').should(
		'have.attr',
		'alt',
		experience.company,
	)
})

it('renders the experience description', () => {
	cy.get('[data-cy="experience-description"]').should(
		'contain',
		experience.description,
	)
})
