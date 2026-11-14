import type { IDefaultComponentProps } from '~/interfaces/component'
import type { IOutcome } from '~/interfaces/outcome'

export interface ICostSlabProps extends IDefaultComponentProps {
	outcome: IOutcome & { ratio: number }
	caption: string
	/** id the hero beam lands on */
	surfaceId?: string
}
