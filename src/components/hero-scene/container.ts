import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { canRender3dBadge } from '~/utils/device'
import {
	DESKTOP_QUERY,
	REDUCED_MOTION_QUERY,
	readMedia,
	subscribeToMedia,
} from '~/utils/media'
import { useStillMotion } from '~/utils/still-motion'

/** The beam's intro: 1.25s drop to the surface plus the landing flash */
export const LIGHT_INTRO_MS = 1600

export enum EBadgeMode {
	NONE = 'none',
	THREE_D = '3d',
	STATIC = 'static',
}

const subscribeReducedMotion = subscribeToMedia(REDUCED_MOTION_QUERY)
const readReducedMotion = readMedia(REDUCED_MOTION_QUERY)
const subscribeDesktop = subscribeToMedia(DESKTOP_QUERY)
const readDesktop = readMedia(DESKTOP_QUERY)

function serverFalse() {
	return false
}

function createCanvas() {
	return document.createElement('canvas')
}

function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export function loadLanyard() {
	return import('~/components/ui/lanyard')
}

/**
 * One thing at a time: the beam plays its intro first; only then the badge
 * appears, either the 3D one (already loaded during the light) or, on weak
 * devices or without WebGL2, the static one. Never both.
 */
export function useHeroSceneContainer(surfaceId: string) {
	const [badgeMode, setBadgeMode] = useState(EBadgeMode.NONE)
	const [isBadgeReady, setIsBadgeReady] = useState(false)

	const surfaceRef = useRef<HTMLElement | null>(null)

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
	// Ambient motion holds still on reduced motion or the page's pause control
	const isStill = useStillMotion()

	// The 3D badge reports its first painted frame; only then it drops in
	function markBadgeReady() {
		setIsBadgeReady(true)
	}

	function bindBeamSurface() {
		surfaceRef.current = document.getElementById(surfaceId)
	}
	useEffect(bindBeamSurface, [surfaceId])

	function revealBadgeAfterLight() {
		if (!isDesktop) return

		let cancelled = false
		const use3d = !reducedMotion && canRender3dBadge(navigator, createCanvas)
		const lightDone = wait(reducedMotion ? 0 : LIGHT_INTRO_MS)
		const ready = use3d
			? Promise.all([lightDone, loadLanyard()]).then(() => EBadgeMode.THREE_D)
			: lightDone.then(() => EBadgeMode.STATIC)

		ready
			.catch(() => EBadgeMode.STATIC)
			.then((mode) => {
				if (!cancelled) setBadgeMode(mode)
			})

		return () => {
			cancelled = true
		}
	}
	useEffect(revealBadgeAfterLight, [isDesktop, reducedMotion])

	return {
		surfaceRef,
		reducedMotion,
		isStill,
		isDesktop,
		badgeMode,
		isBadgeReady,
		markBadgeReady,
	}
}
