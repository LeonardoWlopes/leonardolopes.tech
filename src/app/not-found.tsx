import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Page not found',
	description: 'This address does not exist on leonardolopes.tech.',
}

export { NotFoundScreen as default } from '~/screens/not-found'
