import { useEffect, useState } from 'react'
import { devError } from '~/utils/log'

export const COPY_FEEDBACK_MS = 2000

export enum ECopyStatus {
	IDLE = 'idle',
	COPIED = 'copied',
	FAILED = 'failed',
}

const ANNOUNCEMENTS: Record<ECopyStatus, string> = {
	[ECopyStatus.IDLE]: '',
	[ECopyStatus.COPIED]: 'Email copied',
	[ECopyStatus.FAILED]: 'Could not copy, select the address instead',
}

export function useCopyEmailButtonContainer(email: string) {
	const [status, setStatus] = useState(ECopyStatus.IDLE)

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(email)
			setStatus(ECopyStatus.COPIED)
		} catch (error) {
			devError('Could not copy the email', error)
			setStatus(ECopyStatus.FAILED)
		}
	}

	function resetStatus() {
		if (status === ECopyStatus.IDLE) return

		const timeout = setTimeout(
			() => setStatus(ECopyStatus.IDLE),
			COPY_FEEDBACK_MS,
		)

		return () => clearTimeout(timeout)
	}
	useEffect(resetStatus, [status])

	return {
		isCopied: status === ECopyStatus.COPIED,
		announcement: ANNOUNCEMENTS[status],
		handleCopy,
	}
}
