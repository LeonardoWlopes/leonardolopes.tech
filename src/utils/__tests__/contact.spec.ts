import { describe, expect, it } from 'vitest'
import { buildContactText, buildWhatsAppUrl } from '../contact'

const message = { name: ' Ana ', subject: 'a new app ', content: 'Hi there' }

describe('buildContactText', () => {
	it('trims and joins the fields', () => {
		expect(buildContactText(message)).toBe(
			'Hello, my name is Ana and I would like to talk about a new app.\n\nHi there',
		)
	})
})

describe('buildWhatsAppUrl', () => {
	it('encodes spaces and line breaks once', () => {
		const url = buildWhatsAppUrl('5511999999999', message)

		expect(url).toBe(
			'https://wa.me/5511999999999?text=Hello%2C%20my%20name%20is%20Ana%20and%20I%20would%20like%20to%20talk%20about%20a%20new%20app.%0A%0AHi%20there',
		)
		expect(url).not.toContain('%2520')
	})
})
