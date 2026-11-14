import { renderBadgeBack } from '~/utils/badge-texture'

/** Back texture of the hero's 3D badge, prerendered at build time */
export function GET() {
	return renderBadgeBack()
}
