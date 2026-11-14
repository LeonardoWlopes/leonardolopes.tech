import { describe, expect, it } from 'vitest'
import {
	buildPageMetadata,
	buildPersonJsonLd,
	buildProfilePageJsonLd,
	serializeJsonLd,
} from '../seo'

describe('buildPageMetadata', () => {
	it('sets an absolute title, canonical and matching social fields', () => {
		const metadata = buildPageMetadata({
			title: 'About',
			description: 'About me',
			path: '/about',
		})

		expect(metadata.title).toEqual({ absolute: 'About' })
		expect(metadata.alternates).toEqual({ canonical: '/about' })
		expect(metadata.openGraph).toMatchObject({ url: '/about', title: 'About' })
		expect(metadata.twitter).toMatchObject({ description: 'About me' })
	})
})

describe('JSON-LD builders', () => {
	it('links the person and the website with stable ids', () => {
		const graph = buildPersonJsonLd('https://example.com/')['@graph']

		expect(graph[0]['@id']).toBe('https://example.com/#person')
		expect(graph[1]).toMatchObject({
			url: 'https://example.com',
			publisher: { '@id': 'https://example.com/#person' },
		})
	})

	it('points the profile page at the person', () => {
		expect(
			buildProfilePageJsonLd('https://example.com', '/about'),
		).toMatchObject({
			url: 'https://example.com/about',
			mainEntity: { '@id': 'https://example.com/#person' },
		})
	})

	it('escapes < when serializing', () => {
		expect(serializeJsonLd({ a: '</script>' })).toBe('{"a":"\\u003c/script>"}')
	})
})
