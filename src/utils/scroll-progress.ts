/**
 * Progress (0 to 1) of a tall element scrolled through while its sticky child
 * is pinned. `top` and `height` come from getBoundingClientRect(): 0 until the
 * element reaches the top of the viewport, 1 at its last viewport of scroll.
 */
export function getScrollProgress(
	top: number,
	height: number,
	viewportHeight: number,
) {
	const distance = height - viewportHeight

	if (distance <= 0) return 1

	return Math.min(1, Math.max(0, -top / distance))
}
