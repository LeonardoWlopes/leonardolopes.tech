import type { IDefaultComponentProps } from '~/interfaces/component'

export interface IHeroSceneProps extends IDefaultComponentProps {
	/** id of the element the laser beam lands on */
	surfaceId: string
}
