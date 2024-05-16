import { Header } from '@/components/header'
import { NAV_LINKS } from '@/utils/mock'

beforeEach(() => {
	cy.viewport('macbook-15')
	cy.mount(<Header />)
})

it('displays navigation links', () => {
	cy.get('[data-cy="header-navigation"]')
		.find('a')
		.should('have.length', NAV_LINKS.length)
		.each(($link, index) => {
			cy.wrap($link)
				.should('have.attr', 'href', NAV_LINKS[index].href)
				.and('contain', NAV_LINKS[index].label)
		})
})

it('displays external links', () => {
	cy.get('[data-cy="header-external-links"]')
		.find('a')
		.should('have.length', 2)
		.each(($link) => {
			cy.wrap($link).should('have.attr', 'href')
		})
})

it('displays the theme switch', () => {
	cy.get('[data-cy="theme-switch"]').should('exist')
})
