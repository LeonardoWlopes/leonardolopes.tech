import { devWarn } from './log'

export const MOTION_STORAGE_KEY = 'motion-paused'
const CHANGE_EVENT = 'motion-preference-change'

/** Whether the visitor paused the page's ambient animations (WCAG 2.2.2) */
export function readMotionPaused() {
	try {
		return window.localStorage.getItem(MOTION_STORAGE_KEY) === 'true'
	} catch {
		return false
	}
}

export function writeMotionPaused(paused: boolean) {
	try {
		window.localStorage.setItem(MOTION_STORAGE_KEY, String(paused))
	} catch (error) {
		devWarn('Could not store the motion preference', error)
	}
	window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function subscribeMotionPaused(onChange: () => void) {
	window.addEventListener(CHANGE_EVENT, onChange)
	window.addEventListener('storage', onChange)

	return () => {
		window.removeEventListener(CHANGE_EVENT, onChange)
		window.removeEventListener('storage', onChange)
	}
}

export function serverMotionPaused() {
	return false
}
