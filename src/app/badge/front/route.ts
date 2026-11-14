import { renderBadgeFront } from '~/utils/badge-texture'

/** Front texture of the hero's 3D badge, prerendered at build time */
export function GET() {
	return renderBadgeFront()
}
