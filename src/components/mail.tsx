'use client'

import type { FormEvent } from 'react'
import { env } from '@/utils/env'
import { Button } from './button'

export function Mail() {
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		const data = Object.fromEntries(formData)

		const subject = data.subject.toString().trim().replace(/\s/g, '%20')

		const content = encodeURI(
			`Hello, my name is ${data.name} and I would like to talk about ${subject}. \n\n${data.content}`,
		)

		const url = `https://wa.me/${env.NEXT_PUBLIC_CONTACT_NUMBER}?text=${content}`

		window.open(url)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex w-full flex-col overflow-hidden rounded-xl border border-card-border bg-card dark:bg-onyx"
		>
			<div className="relative flex h-[54px] items-center justify-center border-card-border border-b p-4">
				<div className="absolute left-4 flex items-center gap-2">
					<div className="h-3 w-3 rounded-full border border-[#D62929] bg-[#F63636]" />
					<div className="h-3 w-3 rounded-full border border-[#CEA435] bg-[#F6C136]" />
					<div className="h-3 w-3 rounded-full border border-[#53CC28] bg-[#68F636]" />
				</div>

				<h3 className="font-medium text-base text-secondary">
					New message
				</h3>
			</div>

			<div className="flex flex-col px-4 py-3 sm:px-8">
				<div className="flex w-full items-center">
					<label
						className="mr-2 font-medium text-base text-secondary"
						htmlFor="input-name"
					>
						Name
					</label>

					<input
						className="w-full border-none bg-inherit text-medium-gray outline-hidden placeholder:text-medium-gray/60"
						type="text"
						name="name"
						placeholder={'Your name'}
						autoComplete="off"
						id="input-name"
						required
					/>
				</div>

				<hr className="my-3 border-light-gray dark:border-white/10" />

				<div className="flex w-full items-center">
					<label
						className="mr-2 font-medium text-base text-secondary"
						htmlFor="input-name"
					>
						Subject
					</label>

					<input
						className="w-full border-none bg-inherit text-medium-gray outline-hidden placeholder:text-medium-gray/60"
						type="text"
						name="subject"
						placeholder={'What do you want to talk about?'}
						autoComplete="off"
						id="input-subject"
						required
					/>
				</div>

				<hr className="my-8 border-light-gray dark:border-white/10" />

				<textarea
					className="mb-6 h-52 w-full resize-none rounded-xl bg-main-bg p-6 font-normal text-base text-secondary outline-card-border placeholder:text-medium-gray sm:h-80"
					name="content"
					autoComplete="off"
					placeholder={'Write your message here...'}
					required
				/>

				<Button className="self-end py-3" type="submit">
					Send
				</Button>
			</div>
		</form>
	)
}
