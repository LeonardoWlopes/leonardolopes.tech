import { Button } from '@/components/button'

it('renders a button with the primary variant', () => {
	cy.mount(<Button />)

	cy.get('button').should('have.class', 'bg-gradient-to-b')
	cy.get('button').should('have.class', 'text-white')
})

it('renders a button with the secondary variant', () => {
	cy.mount(<Button variant="secondary" />)

	cy.get('button').should('have.class', 'dark:text-secondary')
	cy.get('button').should('have.class', 'dark:bg-onyx')
})

it('calls the onClick handler when clicked', () => {
	const onClick = cy.stub()

	cy.mount(<Button onClick={onClick} />)

	cy.get('button')
		.click()
		.then(() => {
			expect(onClick).to.be.calledOnce
		})
})

it('renders a button with the provided type', () => {
	cy.mount(<Button type="submit" />)

	cy.get('button').should('have.attr', 'type', 'submit')
})

it('renders a button with the provided children', () => {
	cy.mount(<Button>Click me</Button>)

	cy.get('button').should('have.text', 'Click me')
})

it('renders a button with the provided className', () => {
	cy.mount(<Button className="custom-class" />)

	cy.get('button').should('have.class', 'custom-class')
})

it('should not click the button when disabled', () => {
	const onClick = cy.stub()

	cy.mount(<Button disabled onClick={onClick} />)

	cy.get('button')
		.click({ force: true })
		.then(() => {
			expect(onClick).to.not.have.been.called
		})
})
