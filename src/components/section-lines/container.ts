import { useEffect, useState, useSyncExternalStore } from 'react'
import { DESKTOP_QUERY, readMedia, subscribeToMedia } from '~/utils/media'
import { useStillMotion } from '~/utils/still-motion'

const subscribeDesktop = subscribeToMedia(DESKTOP_QUERY)
const readDesktop = readMedia(DESKTOP_QUERY)

function serverFalse() {
	return false
}

/** The WebGL lines only exist on desktop and while their section is on screen */
export function useSectionLinesContainer() {
	const [element, setElement] = useState<HTMLElement | null>(null)
	const [isVisible, setIsVisible] = useState(false)

	const reducedMotion = useStillMotion()

	const isDesktop = useSyncExternalStore(
		subscribeDesktop,
		readDesktop,
		serverFalse,
	)

	function trackVisibility() {
		if (!element) return

		const observer = new IntersectionObserver(([entry]) =>
			setIsVisible(entry.isIntersecting),
		)
		observer.observe(element)

		return () => observer.disconnect()
	}
	useEffect(trackVisibility, [element])

	return {
		attachRef: setElement,
		shouldRender: isDesktop && isVisible,
		reducedMotion,
	}
}
