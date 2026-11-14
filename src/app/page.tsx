import { buildPageMetadata, SITE_DESCRIPTION } from '~/utils/seo'

export const metadata = buildPageMetadata({
	title: 'Leonardo Lopes · Tech Lead, Software Engineer & Architect',
	description: SITE_DESCRIPTION,
	path: '/',
})

export { HomeScreen as default } from '~/screens/home'
