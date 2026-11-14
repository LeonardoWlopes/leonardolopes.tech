import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { isActiveRoute, NAV_LINKS } from '~/utils/navigation'

export interface IPillPosition {
	x: number
	width: number
}

export function measurePill(list: HTMLElement): IPillPosition | null {
	const active = list.querySelector<HTMLElement>('[aria-current="page"]')

	if (!active) return null

	return { x: active.offsetLeft, width: active.offsetWidth }
}

export function useNavLinksContainer() {
	const [pill, setPill] = useState<IPillPosition | null>(null)

	const pathname = usePathname()

	const listRef = useRef<HTMLUListElement>(null)

	const links = NAV_LINKS.map((link) => ({
		...link,
		active: isActiveRoute(pathname, link.href),
	}))

	function followActiveLink() {
		const list = listRef.current

		if (!list) return

		function update() {
			if (list) setPill(measurePill(list))
		}

		update()

		// Labels change width when fonts load or the viewport crosses sm
		const observer = new ResizeObserver(update)
		observer.observe(list)

		return () => observer.disconnect()
	}
	// Re-measure on every route change: client navigation moves aria-current
	// without resizing the list, so the observer alone never fires
	useEffect(followActiveLink, [pathname])

	return { links, listRef, pill }
}
