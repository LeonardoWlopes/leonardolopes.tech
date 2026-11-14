'use client'

import { Check, Copy } from 'lucide-react'
import { cn } from '~/lib/utils'
import { useCopyEmailButtonContainer } from './container'
import type { ICopyEmailButtonProps } from './types'

export function CopyEmailButton({
	email,
	className,
	testId = 'copy-email-button',
}: ICopyEmailButtonProps) {
	const { isCopied, announcement, handleCopy } =
		useCopyEmailButtonContainer(email)

	return (
		<span className="contents">
			<button
				type="button"
				data-testid={testId}
				onClick={handleCopy}
				className={cn(
					'inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-foreground text-sm transition-colors hover:border-white/35 hover:bg-white/5',
					className,
				)}
			>
				{isCopied ? (
					<Check className="size-4 text-neon-soft" aria-hidden />
				) : (
					<Copy className="size-4" aria-hidden />
				)}
				Copy email
			</button>

			<span role="status" className="sr-only">
				{announcement}
			</span>
		</span>
	)
}
