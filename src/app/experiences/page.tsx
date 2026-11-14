import { buildPageMetadata } from '~/utils/seo'

export const metadata = buildPageMetadata({
	title: 'Experience · Tech Lead, Node.js and Go · Leonardo Lopes',
	description:
		'Roles since 2020, tech lead since 2025: Horizontes, the Callink super app, a zero-downtime healthtech rebuild that cut cloud cost 38%, national pricing.',
	path: '/experiences',
})

export { ExperiencesScreen as default } from '~/screens/experiences'
