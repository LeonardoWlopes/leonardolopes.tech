export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
export const DESKTOP_QUERY = '(min-width: 64rem)'

/** Subscribe helper for useSyncExternalStore over a media query */
export function subscribeToMedia(query: string) {
	return function subscribe(onChange: () => void) {
		const media = window.matchMedia(query)
		media.addEventListener('change', onChange)
		return () => media.removeEventListener('change', onChange)
	}
}

export function readMedia(query: string) {
	return function read() {
		return window.matchMedia(query).matches
	}
}
