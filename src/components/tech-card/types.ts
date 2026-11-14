import type { IDefaultComponentProps } from '~/interfaces/component'
import type { ITech } from '~/interfaces/tech'

export interface ITechCardProps extends IDefaultComponentProps {
	tech: ITech
}
