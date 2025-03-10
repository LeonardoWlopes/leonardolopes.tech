import type pt from '@/i18n/languages/pt.json'

type Messages = typeof pt

declare global {
	interface IntlMessages extends Messages {}
}
