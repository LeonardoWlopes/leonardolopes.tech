import { buildPageMetadata } from '~/utils/seo'

export const metadata = buildPageMetadata({
	title: 'About Leonardo Lopes · Tech Lead, Engineer and Architect',
	description:
		'Tech lead, software engineer and architect from Brazil, shipping web, backend and mobile systems since 2020 for healthtech, food, pharma and edtech.',
	path: '/about',
})

export { AboutScreen as default } from '~/screens/about'
