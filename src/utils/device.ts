interface INavigatorHints {
	hardwareConcurrency?: number
	deviceMemory?: number
	connection?: { saveData?: boolean }
}

/**
 * Whether the device can comfortably run the heavy WebGL scenes (3D badge,
 * closing scene): WebGL2, at least 4
 * cores and 4 GB of memory (when the browser reports it), and no data saver.
 */
export function canRenderHeavyWebgl(
	nav: INavigatorHints,
	createCanvas: () => HTMLCanvasElement = () =>
		document.createElement('canvas'),
) {
	if (nav.connection?.saveData) return false
	if ((nav.hardwareConcurrency ?? 0) < 4) return false
	if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false

	try {
		return Boolean(createCanvas().getContext('webgl2'))
	} catch {
		return false
	}
}
