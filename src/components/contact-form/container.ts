import { type InputEvent, type SubmitEvent, useState } from 'react'
import { flushSync } from 'react-dom'
import { buildWhatsAppUrl } from '~/utils/contact'
import { env } from '~/utils/env'

export enum EContactField {
	NAME = 'name',
	SUBJECT = 'subject',
	CONTENT = 'content',
}

export type TContactErrors = Partial<Record<EContactField, string>>

const FIELD_ORDER = [
	EContactField.NAME,
	EContactField.SUBJECT,
	EContactField.CONTENT,
]

const REQUIRED_MESSAGES: Record<EContactField, string> = {
	[EContactField.NAME]: 'Enter your name.',
	[EContactField.SUBJECT]: 'Enter what you want to talk about.',
	[EContactField.CONTENT]: 'Write a message.',
}

export const SENT_ANNOUNCEMENT =
	'WhatsApp opened in a new tab with your message filled in. Send it from there.'

function readField(data: FormData, field: EContactField) {
	return String(data.get(field) ?? '')
}

function isContactField(name: string): name is EContactField {
	return FIELD_ORDER.includes(name as EContactField)
}

export function validateContact(values: Record<EContactField, string>) {
	const errors: TContactErrors = {}

	for (const field of FIELD_ORDER) {
		if (!values[field].trim()) errors[field] = REQUIRED_MESSAGES[field]
	}

	return errors
}

export function useContactFormContainer() {
	const [errors, setErrors] = useState<TContactErrors>({})
	const [announcement, setAnnouncement] = useState('')

	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault()
		const form = event.currentTarget
		const data = new FormData(form)

		const values = {
			[EContactField.NAME]: readField(data, EContactField.NAME),
			[EContactField.SUBJECT]: readField(data, EContactField.SUBJECT),
			[EContactField.CONTENT]: readField(data, EContactField.CONTENT),
		}

		const nextErrors = validateContact(values)
		const messages = Object.values(nextErrors)

		// Commit the errors before moving focus, so the field is announced with aria-invalid and its message
		// Clear first so an identical message is announced again on a repeat submit
		flushSync(() => setAnnouncement(''))
		flushSync(() => {
			setErrors(nextErrors)
			setAnnouncement(
				messages.length ? `Message not sent. ${messages.join(' ')}` : '',
			)
		})

		const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field])

		if (firstInvalid) {
			const element = form.elements.namedItem(firstInvalid)
			if (element instanceof HTMLElement) element.focus()
			return
		}

		window.open(
			buildWhatsAppUrl(env.NEXT_PUBLIC_CONTACT_NUMBER, values),
			'_blank',
			'noopener,noreferrer',
		)
		setAnnouncement(SENT_ANNOUNCEMENT)
	}

	function handleInput(event: InputEvent<HTMLFormElement>) {
		const target = event.target as HTMLInputElement
		const field = target.name

		if (!isContactField(field) || !errors[field] || !target.value.trim()) return

		const { [field]: _cleared, ...rest } = errors
		setErrors(rest)
		if (Object.keys(rest).length === 0) setAnnouncement('')
	}

	return { errors, announcement, handleSubmit, handleInput }
}
