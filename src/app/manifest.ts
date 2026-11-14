import type { MetadataRoute } from 'next'
import { HOME_HERO } from '~/utils/mock'
import { SITE_DESCRIPTION, SITE_NAME } from '~/utils/seo'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${SITE_NAME} · ${HOME_HERO.role.replace(' · ', ', ')}`,
		short_name: SITE_NAME,
		description: SITE_DESCRIPTION,
		start_url: '/',
		display: 'browser',
		background_color: '#030407',
		theme_color: '#030407',
		icons: [
			{ src: '/icon/192', sizes: '192x192', type: 'image/png' },
			{ src: '/icon/512', sizes: '512x512', type: 'image/png' },
			{ src: '/apple-icon', sizes: '180x180', type: 'image/png' },
		],
	}
}
