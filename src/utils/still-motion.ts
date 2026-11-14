import { useSyncExternalStore } from 'react'
import { REDUCED_MOTION_QUERY, readMedia, subscribeToMedia } from './media'
import {
	readMotionPaused,
	serverMotionPaused,
	subscribeMotionPaused,
} from './motion-preference'

const subscribeReduced = subscribeToMedia(REDUCED_MOTION_QUERY)
const readReduced = readMedia(REDUCED_MOTION_QUERY)

function serverFalse() {
	return false
}

/**
 * True when ambient motion must hold still: the OS asks for reduced motion
 * or the visitor paused it with the page's own control.
 */
export function useStillMotion() {
	const reduced = useSyncExternalStore(
		subscribeReduced,
		readReduced,
		serverFalse,
	)
	const paused = useSyncExternalStore(
		subscribeMotionPaused,
		readMotionPaused,
		serverMotionPaused,
	)

	return reduced || paused
}
