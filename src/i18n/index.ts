import { getCurrentLocale } from '@/utils/locale'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
	const locale = getCurrentLocale()

	return {
		locale,
		messages: (await import(`./locales/${locale}.json`)).default,
	}
})
