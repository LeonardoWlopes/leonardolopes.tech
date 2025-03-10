import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale

	// Ensure that a valid locale is used
	if (!locale || !routing.locales.includes(locale as 'pt')) {
		locale = routing.defaultLocale
	}
	return {
		locale,
		messages: (await import(`./languages/${locale}.json`)).default,
	}
})
