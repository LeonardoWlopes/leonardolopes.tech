import { Footer } from '@/components/footer'
import { ELSE_WHERE_LINKS, NAV_LINKS } from '@/utils/mock'

beforeEach(() => {
	cy.mount(<Footer />)
})

it('displays the signature image', () => {
	cy.get('footer').find('img').should('have.attr', 'src')
})

it('displays the current year', () => {
	const currentYear = new Date().getFullYear()
	cy.get('footer').contains(`${currentYear}`).should('exist')
})

it('displays navigation links', () => {
	cy.get('[data-cy="footer-navigation"]')
		.find('a')
		.should('have.length', NAV_LINKS.length)
		.each(($link, index) => {
			cy.wrap($link)
				.should('have.attr', 'href', NAV_LINKS[index].href)
				.and('contain', NAV_LINKS[index].label)
		})
})

it('displays external links', () => {
	cy.get('[data-cy="footer-external-links"]')
		.find('a')
		.should('have.length', ELSE_WHERE_LINKS.length)
		.each(($link, index) => {
			cy.wrap($link)
				.should('have.attr', 'href', ELSE_WHERE_LINKS[index].href)
				.and('contain', ELSE_WHERE_LINKS[index].label)
				.and('have.attr', 'target', '_blank')
		})
})
