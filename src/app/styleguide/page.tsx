import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Styleguide',
	description: 'Tokens and components used across the site.',
	robots: { index: false, follow: false },
}

export { StyleguideScreen as default } from '~/screens/styleguide'
