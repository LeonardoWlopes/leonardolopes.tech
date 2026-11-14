import type { IDefaultComponentProps } from '~/interfaces/component'
import type { IOutcome } from '~/interfaces/outcome'

export interface IOutcomeLedgerProps extends IDefaultComponentProps {
	outcomes: IOutcome[]
}
