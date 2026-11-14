import { buildPageMetadata } from '~/utils/seo'

export const metadata = buildPageMetadata({
	title: 'Technologies · TypeScript, Go, React Native · Leonardo Lopes',
	description:
		'The stack Leonardo Lopes uses in production: TypeScript, Go, Node.js, React, React Native, Next.js, PostgreSQL, Terraform, AWS and OpenTelemetry.',
	path: '/technologies',
})

export { TechnologiesScreen as default } from '~/screens/technologies'
