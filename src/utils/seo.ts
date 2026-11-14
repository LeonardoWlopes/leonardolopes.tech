import type { Metadata } from 'next'
import { CONSTANTS } from './constants'

export const SITE_NAME = 'Leonardo Lopes'

export const SITE_DESCRIPTION =
	'Tech lead, software engineer and architect in Brazil (UTC−3) building Go, Node.js, TypeScript and React Native systems since 2020. Cut a cloud bill ~38%.'

const OG_IMAGE = {
	url: '/opengraph-image',
	width: 1200,
	height: 630,
	alt: 'Leonardo Lopes, tech lead, software engineer and architect',
}

export interface IPageSeo {
	title: string
	description: string
	path: string
}

/**
 * Per-page metadata: absolute title, its own description, canonical URL and
 * Open Graph/Twitter fields. Next merges metadata shallowly, so each page
 * repeats the shared Open Graph fields here instead of inheriting them.
 */
export function buildPageMetadata({
	title,
	description,
	path,
}: IPageSeo): Metadata {
	return {
		title: { absolute: title },
		description,
		alternates: { canonical: path },
		openGraph: {
			type: 'website',
			siteName: SITE_NAME,
			locale: 'en_US',
			url: path,
			title,
			description,
			images: [OG_IMAGE],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [OG_IMAGE.url],
		},
	}
}

/** Schema.org graph for the owner and the site, built only from repo facts */
export function buildPersonJsonLd(siteUrl: string) {
	const url = siteUrl.replace(/\/$/, '')
	const person = `${url}/#person`

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': person,
				name: SITE_NAME,
				url,
				image: CONSTANTS.AVATAR_URL,
				jobTitle: 'Tech Lead',
				description: SITE_DESCRIPTION,
				worksFor: { '@type': 'Organization', name: 'Buildbox' },
				address: { '@type': 'PostalAddress', addressCountry: 'BR' },
				knowsLanguage: ['pt-BR', 'en'],
				knowsAbout: [
					'Go',
					'Node.js',
					'TypeScript',
					'React',
					'React Native',
					'Next.js',
					'Kotlin',
					'OpenTelemetry',
					'Terraform',
					'Microservices',
				],
				sameAs: [
					CONSTANTS.GITHUB_URL,
					CONSTANTS.LINKEDIN_URL,
					CONSTANTS.INSTAGRAM_URL,
				],
			},
			{
				'@type': 'WebSite',
				'@id': `${url}/#website`,
				url,
				name: SITE_NAME,
				inLanguage: 'en',
				publisher: { '@id': person },
			},
		],
	}
}

export function buildProfilePageJsonLd(siteUrl: string, path: string) {
	const url = siteUrl.replace(/\/$/, '')

	return {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		url: `${url}${path}`,
		mainEntity: { '@id': `${url}/#person` },
	}
}

/** JSON-LD is injected as raw HTML: escape `<` so content cannot close the tag */
export function serializeJsonLd(data: unknown) {
	return JSON.stringify(data).replace(/</g, '\\u003c')
}

export const SITEMAP_PATHS = [
	'/',
	'/about',
	'/experiences',
	'/technologies',
	'/contact',
] as const
