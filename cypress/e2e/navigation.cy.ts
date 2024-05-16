import { NAV_LINKS } from '../../src/utils/mock'

beforeEach(() => {
	cy.visit('/')
})

describe('header', () => {
	it('should navigate internally when links are clicked', () => {
		const navigation = cy.get('[data-cy=header-navigation]')

		const links = navigation.find('a')

		links.should('have.length', NAV_LINKS)

		links.each(($link) => {
			const href = new URL($link.prop('href')).pathname

			cy.wrap($link).as('link').click()

			cy.location('pathname').should('include', href)
		})
	})

	it('should have external links', () => {
		const header = cy.get('[data-cy=header-external-links]')

		header.find('a').should('have.length', 2)
	})
})

describe('footer', () => {
	it('should navigate internally when links are clicked', () => {
		const footer = cy.get('[data-cy=footer-navigation]')

		const links = footer.find('a')

		links.should('have.length', 5)

		links.each(($link) => {
			const href = new URL($link.prop('href')).pathname

			cy.wrap($link).as('link').click()

			cy.location('pathname').should('include', href)
		})
	})

	it('should have external links', () => {
		const footer = cy.get('[data-cy=footer-external-links]')

		footer.find('a').should('have.length', 4)
	})
})

describe('/', () => {
	it('should have a button to see the resume', () => {
		cy.get('[data-cy=resume-button]').should('exist')
	})

	it('should have buttons to contact', () => {
		const contacts = cy.get('[data-cy=contact-button]')

		contacts.should('have.length', 2)

		contacts.each((_, index) => {
			const currentButton = cy.get('[data-cy=contact-button]').eq(index)

			currentButton.click()

			cy.location('pathname').should('include', '/contact')

			cy.go('back')
		})
	})

	it('should have cards navigation', () => {
		const cards = cy.get('[data-cy=know-card]')

		cards.should('have.length', 2)

		const links = ['/about', '/technologies']

		for (const link of links) {
			const currentCard = cy.get(`[data-cy=know-card][href="${link}"]`)

			currentCard.click()

			cy.location('pathname').should('include', link)

			cy.go('back')
		}
	})
})

//TODO: add tests for /about, /technologies, /contact
