import { buildPageMetadata } from '~/utils/seo'

export const metadata = buildPageMetadata({
	title: 'Experience · Go, Node.js and React Native · Leonardo Lopes',
	description:
		'Roles and results since 2020: zero-downtime healthtech modernization, national pricing, field-sales app speed and HLS streaming in Go and TypeScript.',
	path: '/experiences',
})

export { ExperiencesScreen as default } from '~/screens/experiences'
