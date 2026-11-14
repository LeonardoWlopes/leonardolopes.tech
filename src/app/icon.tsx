import { renderPortraitIcon } from '~/utils/portrait-icon'

/** Favicon plus the 192 and 512 sizes Android and Chrome need to install the site */
const SIDES = [64, 192, 512]

export function generateImageMetadata() {
	return SIDES.map((side) => ({
		id: String(side),
		contentType: 'image/png',
		size: { width: side, height: side },
	}))
}

export default async function Icon({ id }: { id: Promise<string> }) {
	return renderPortraitIcon(Number(await id))
}
