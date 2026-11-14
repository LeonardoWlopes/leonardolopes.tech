import type { IDefaultComponentProps } from '~/interfaces/component'
import type { IExperience } from '~/interfaces/experience'
import type { IOutcome } from '~/interfaces/outcome'

export interface IExperiencesTimelineProps extends IDefaultComponentProps {
	experiences: IExperience[]
	outcomes: IOutcome[]
	now: Date
}
