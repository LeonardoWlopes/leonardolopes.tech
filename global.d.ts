import type pt from "@/i18n/locales/pt-BR.json"

type Messages = typeof pt

declare global {
	interface IntlMessages extends Messages {}
}
