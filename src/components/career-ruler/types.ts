import type { IDefaultComponentProps } from '~/interfaces/component'
import type { ICareerTimeline } from '~/interfaces/timeline'

export interface ICareerRulerProps extends IDefaultComponentProps {
	timeline: ICareerTimeline
}
