import { LOCALES } from '@/utils/constants'
import { headers } from 'next/headers'
import { ptBR, enUS } from 'date-fns/locale'

export function getCurrentLocale() {
	const headersList = headers()
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

export function getDateFnsLocale() {
	const locale = getCurrentLocale()

	switch (locale) {
		case 'pt-BR':
			return ptBR
		case 'en':
			return enUS
		default:
			return ptBR
	}
}
