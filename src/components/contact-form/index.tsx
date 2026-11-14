'use client'

import { Send } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import type { IDefaultComponentProps } from '~/interfaces/component'
import { cn } from '~/lib/utils'
import { EContactField, useContactFormContainer } from './container'

const FIELD =
	'h-11 bg-background/70 text-base md:text-base focus-visible:border-neon-soft focus-visible:ring-neon-soft/40'

const HINT = 'contact-form-hint'

function describedBy(field: EContactField, hasError: boolean) {
	return hasError ? `${HINT} contact-${field}-error` : HINT
}

export function ContactForm({
	className,
	testId = 'contact-form',
}: IDefaultComponentProps) {
	const { errors, announcement, handleSubmit, handleInput } =
		useContactFormContainer()

	return (
		<form
			data-testid={testId}
			aria-labelledby="contact-form-title"
			noValidate
			onSubmit={handleSubmit}
			onInput={handleInput}
			className={cn(
				'glass-control flex w-full flex-col overflow-hidden rounded-3xl',
				className,
			)}
		>
			<div className="flex h-14 items-center justify-between gap-4 border-white/10 border-b px-6">
				<div aria-hidden className="flex items-center gap-2">
					<span className="size-3 rounded-full bg-white/15" />
					<span className="size-3 rounded-full bg-white/15" />
					<span className="size-3 rounded-full bg-neon shadow-neon-dot" />
				</div>

				<h2
					id="contact-form-title"
					className="font-mono text-muted-foreground text-xs uppercase tracking-widest"
				>
					Message on WhatsApp
				</h2>

				<span aria-hidden className="hidden w-12 sm:block" />
			</div>

			<div className="flex flex-col gap-6 p-6 sm:p-8">
				<p id={HINT} className="text-muted-foreground text-sm">
					All fields are required.
				</p>

				<div className="grid gap-6 sm:grid-cols-2">
					<div className="flex flex-col gap-2">
						<Label htmlFor="contact-name" className="text-foreground">
							Name
						</Label>

						<Input
							id="contact-name"
							name={EContactField.NAME}
							placeholder="Your name"
							autoComplete="name"
							className={FIELD}
							testId={`${testId}-name`}
							required
							aria-invalid={Boolean(errors.name)}
							aria-describedby={describedBy(
								EContactField.NAME,
								Boolean(errors.name),
							)}
						/>

						{errors.name && (
							<p id="contact-name-error" className="text-destructive text-sm">
								{errors.name}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="contact-subject" className="text-foreground">
							Subject
						</Label>

						<Input
							id="contact-subject"
							name={EContactField.SUBJECT}
							placeholder="e.g. Backend modernization"
							autoComplete="off"
							className={FIELD}
							testId={`${testId}-subject`}
							required
							aria-invalid={Boolean(errors.subject)}
							aria-describedby={describedBy(
								EContactField.SUBJECT,
								Boolean(errors.subject),
							)}
						/>

						{errors.subject && (
							<p
								id="contact-subject-error"
								className="text-destructive text-sm"
							>
								{errors.subject}
							</p>
						)}
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="contact-content" className="text-foreground">
						Message
					</Label>

					<Textarea
						id="contact-content"
						name={EContactField.CONTENT}
						placeholder="What you are building, where it stands and your timeline"
						className="min-h-52 resize-none bg-background/70 text-base sm:min-h-64 md:text-base focus-visible:border-neon-soft focus-visible:ring-neon-soft/40"
						testId={`${testId}-content`}
						required
						aria-invalid={Boolean(errors.content)}
						aria-describedby={describedBy(
							EContactField.CONTENT,
							Boolean(errors.content),
						)}
					/>

					{errors.content && (
						<p id="contact-content-error" className="text-destructive text-sm">
							{errors.content}
						</p>
					)}
				</div>

				<div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
					<p className="max-w-[36ch] text-muted-foreground text-sm">
						Sending opens WhatsApp in a new tab with your message filled in.
					</p>

					<Button
						type="submit"
						variant="glow"
						size="xl"
						testId={`${testId}-submit`}
						className="w-full sm:w-auto"
					>
						Send on WhatsApp
						<span className="sr-only"> (opens in a new tab)</span>
						<Send aria-hidden />
					</Button>
				</div>

				<p role="status" className="sr-only">
					{announcement}
				</p>
			</div>
		</form>
	)
}
