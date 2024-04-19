'use client'
import type { FormEvent } from 'react'

// components
import { Button } from './button'

// utils
import { env } from '@/env'

export function Mail() {
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		const data = Object.fromEntries(formData)

		const subject = data.subject.toString().trim().replace(/\s/g, '%20')

		const content = encodeURI(
			`Olá, meu nome é ${data.name} e eu gostaria de falar sobre *${subject}*.\n\n${data.content}`,
		)

		const url = `https://wa.me/${env.NEXT_PUBLIC_CONTACT_NUMBER}?text=${content}`

		window.open(url)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex w-full flex-col overflow-hidden rounded-xl border border-card-border bg-onyx"
		>
			<div className="relative flex h-[54px] items-center justify-center border-card-border/60 border-b p-4">
				<div className="absolute left-4 flex items-center gap-2">
					<div className="h-3 w-3 rounded-full border border-[#D62929] bg-[#F63636]" />
					<div className="h-3 w-3 rounded-full border border-[#CEA435] bg-[#F6C136]" />
					<div className="h-3 w-3 rounded-full border border-[#53CC28] bg-[#68F636]" />
				</div>

				<h3 className="font-medium text-base text-white">
					Nova Mensagem
				</h3>
			</div>

			<div className="flex flex-col px-4 py-3 sm:px-8">
				<div className="flex w-full items-center">
					<label
						className="mr-2 font-medium text-base text-white"
						htmlFor="input-name"
					>
						Nome:
					</label>
					<input
						className="w-full border-none bg-inherit text-medium-gray outline-none placeholder:text-medium-gray/60"
						type="text"
						name="name"
						placeholder="Seu nome"
						autoComplete="off"
						id="input-name"
						required
					/>
				</div>

				<hr className="my-3 border-white/10" />

				<div className="flex w-full items-center">
					<label
						className="mr-2 font-medium text-base text-white"
						htmlFor="input-name"
					>
						Assunto:
					</label>
					<input
						className="w-full border-none bg-inherit text-medium-gray outline-none placeholder:text-medium-gray/60"
						type="text"
						name="subject"
						placeholder="Assunto"
						autoComplete="off"
						id="input-subject"
						required
					/>
				</div>

				<hr className="my-8 border-white/10" />

				<textarea
					className="mb-6 h-52 w-full resize-none rounded-xl bg-main-bg p-6 font-normal text-base text-white outline-card-border sm:h-80 placeholder:text-medium-gray"
					name="content"
					autoComplete="off"
					placeholder="Escreva sua mensagem aqui..."
					required
				/>

				<Button className="self-end" type="submit">
					Enviar
				</Button>
			</div>
		</form>
	)
}
