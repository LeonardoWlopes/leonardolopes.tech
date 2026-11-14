import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { canRenderHeavyWebgl } from '~/utils/device'
import {
	DESKTOP_QUERY,
	REDUCED_MOTION_QUERY,
	readMedia,
	subscribeToMedia,
} from '~/utils/media'
import { getScrollProgress } from '~/utils/scroll-progress'
import { useStillMotion } from '~/utils/still-motion'

const subscribeReducedMotion = subscribeToMedia(REDUCED_MOTION_QUERY)
const readReducedMotion = readMedia(REDUCED_MOTION_QUERY)
const subscribeDesktop = subscribeToMedia(DESKTOP_QUERY)
const readDesktop = readMedia(DESKTOP_QUERY)

function serverFalse() {
	return false
}

/**
 * Writes the scroll progress (0 to 1) into `--p` on the scene every frame,
 * through the DOM, so the layers move without React re-renders. With reduced
 * motion the scene stays at its final state.
 */
export function useSignatureFinaleContainer() {
	const [element, setElement] = useState<HTMLElement | null>(null)
	const [isVisible, setIsVisible] = useState(false)
	const [isCapable, setIsCapable] = useState(false)

	const surfaceRef = useRef<HTMLSpanElement | null>(null)
	const isStill = useStillMotion()

	const reducedMotion = useSyncExternalStore(
		subscribeReducedMotion,
		readReducedMotion,
		serverFalse,
	)

	const isDesktop = useSyncExternalStore(
		subscribeDesktop,
		readDesktop,
		serverFalse,
	)

	// Phones and weak devices keep the CSS glow and the signature only
	function checkCapability() {
		setIsCapable(isDesktop && canRenderHeavyWebgl(navigator))
	}
	useEffect(checkCapability, [isDesktop])

	// The beam is WebGL: render it only while the scene is on screen
	function trackVisibility() {
		if (!element) return

		const observer = new IntersectionObserver(([entry]) =>
			setIsVisible(entry.isIntersecting),
		)
		observer.observe(element)

		return () => observer.disconnect()
	}
	useEffect(trackVisibility, [element])

	function trackScroll() {
		if (!element) return

		const scene = element

		function updateProgress() {
			const { top, height } = scene.getBoundingClientRect()
			const progress = reducedMotion
				? 1
				: getScrollProgress(top, height, window.innerHeight)

			scene.style.setProperty('--p', String(progress))
		}

		updateProgress()

		if (reducedMotion) return

		let frame = 0

		function scheduleUpdate() {
			cancelAnimationFrame(frame)
			frame = requestAnimationFrame(updateProgress)
		}

		window.addEventListener('scroll', scheduleUpdate, { passive: true })
		window.addEventListener('resize', scheduleUpdate)

		return () => {
			cancelAnimationFrame(frame)
			window.removeEventListener('scroll', scheduleUpdate)
			window.removeEventListener('resize', scheduleUpdate)
		}
	}
	useEffect(trackScroll, [element, reducedMotion])

	return {
		attachScene: setElement,
		surfaceRef,
		isVisible,
		showWebgl: isVisible && isCapable,
		reducedMotion,
		isStill,
	}
}
