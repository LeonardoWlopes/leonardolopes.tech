import { LOCALES } from '@/utils/constants'
import { enUS, ptBR } from 'date-fns/locale'
import { headers } from 'next/headers'

export async function getCurrentLocale() {
	const headersList = await headers()
	const acceptedLanguage = headersList.get('accept-language') || ''

	const preferredLanguages = acceptedLanguage
		.split(',')
		.map((lang) => lang.split(';')[0])

	let locale = LOCALES[0]

	for (const lang of preferredLanguages) {
		if (LOCALES.includes(lang)) {
			locale = lang
			break
		}
	}

	return locale
}

export async function getDateFnsLocale() {
	const locale = await getCurrentLocale()

	switch (locale) {
		case 'pt':
			return ptBR
		case 'en':
			return enUS
		default:
			return ptBR
	}
}
