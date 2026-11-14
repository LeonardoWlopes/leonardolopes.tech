import { act, renderHook } from '@testing-library/react'
import type { InputEvent, SubmitEvent } from 'react'
import { describe, expect, it, vi } from 'vitest'
import {
	EContactField,
	SENT_ANNOUNCEMENT,
	useContactFormContainer,
	validateContact,
} from './container'

vi.mock('~/utils/env', () => ({
	env: { NEXT_PUBLIC_CONTACT_NUMBER: '5511999999999' },
}))

function buildForm(fields: Record<string, string>) {
	const form = document.createElement('form')

	for (const [name, value] of Object.entries(fields)) {
		const input = document.createElement('input')
		input.name = name
		input.value = value
		form.appendChild(input)
	}

	document.body.appendChild(form)
	return form
}

function buildSubmit(form: HTMLFormElement) {
	return {
		preventDefault: vi.fn(),
		currentTarget: form,
	} as unknown as SubmitEvent<HTMLFormElement>
}

function buildInput(form: HTMLFormElement, name: string, value: string) {
	const target = form.elements.namedItem(name) as HTMLInputElement
	target.value = value
	return { target } as unknown as InputEvent<HTMLFormElement>
}

const VALID = { name: 'Ana', subject: 'a new app', content: 'Hi there' }

describe('validateContact', () => {
	it('flags blank and whitespace-only fields', () => {
		expect(validateContact({ name: ' ', subject: 'x', content: '' })).toEqual({
			[EContactField.NAME]: 'Enter your name.',
			[EContactField.CONTENT]: 'Write a message.',
		})
	})

	it('accepts filled fields', () => {
		expect(validateContact(VALID)).toEqual({})
	})
})

describe('useContactFormContainer', () => {
	it('opens WhatsApp in a new tab with the encoded message and announces it', () => {
		const open = vi.spyOn(window, 'open').mockReturnValue(null)
		const { result } = renderHook(() => useContactFormContainer())
		const event = buildSubmit(buildForm(VALID))

		act(() => result.current.handleSubmit(event))

		expect(event.preventDefault).toHaveBeenCalled()
		expect(open).toHaveBeenCalledWith(
			`https://wa.me/5511999999999?text=${encodeURIComponent('Hello, my name is Ana and I would like to talk about a new app.\n\nHi there')}`,
			'_blank',
			'noopener,noreferrer',
		)
		expect(result.current.errors).toEqual({})
		expect(result.current.announcement).toBe(SENT_ANNOUNCEMENT)
	})

	it('blocks the submit, reports errors and focuses the first invalid field', () => {
		const open = vi.spyOn(window, 'open').mockReturnValue(null)
		const { result } = renderHook(() => useContactFormContainer())
		const form = buildForm({ name: 'Ana', subject: '', content: '' })

		act(() => result.current.handleSubmit(buildSubmit(form)))

		expect(open).not.toHaveBeenCalled()
		expect(Object.keys(result.current.errors)).toEqual([
			EContactField.SUBJECT,
			EContactField.CONTENT,
		])
		expect(result.current.announcement).toBe(
			'Message not sent. Enter what you want to talk about. Write a message.',
		)
		expect(document.activeElement).toBe(form.elements.namedItem('subject'))
	})

	it('treats missing fields as empty', () => {
		vi.spyOn(window, 'open').mockReturnValue(null)
		const { result } = renderHook(() => useContactFormContainer())

		act(() => result.current.handleSubmit(buildSubmit(buildForm({}))))

		expect(Object.keys(result.current.errors)).toHaveLength(3)
	})

	it('clears a field error once it has text, and ignores other input', () => {
		vi.spyOn(window, 'open').mockReturnValue(null)
		const { result } = renderHook(() => useContactFormContainer())
		const form = buildForm({ name: '', subject: '', content: '', other: '' })

		act(() => result.current.handleSubmit(buildSubmit(form)))

		act(() => result.current.handleInput(buildInput(form, 'name', '   ')))
		expect(result.current.errors.name).toBeDefined()

		act(() => result.current.handleInput(buildInput(form, 'other', 'x')))
		act(() => result.current.handleInput(buildInput(form, 'name', 'Ana')))

		expect(result.current.errors.name).toBeUndefined()
		expect(result.current.errors.subject).toBeDefined()
	})
})
