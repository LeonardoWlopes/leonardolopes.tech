import { useEffect, useSyncExternalStore } from 'react'
import {
	readMotionPaused,
	serverMotionPaused,
	subscribeMotionPaused,
	writeMotionPaused,
} from '~/utils/motion-preference'

export function useMotionToggleContainer() {
	const isPaused = useSyncExternalStore(
		subscribeMotionPaused,
		readMotionPaused,
		serverMotionPaused,
	)

	function handleToggle() {
		writeMotionPaused(!isPaused)
	}

	// Mirrors the preference on <html> so pure-CSS animations can hold still too
	function reflectMotionOnDocument() {
		if (isPaused) document.documentElement.dataset.motion = 'paused'
		else delete document.documentElement.dataset.motion
	}
	useEffect(reflectMotionOnDocument, [isPaused])

	return { isPaused, handleToggle }
}
