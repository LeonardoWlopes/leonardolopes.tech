export interface IOutcome {
	metric: string
	unit: string
	summary: string
	role: string
	client: string
	employer: string
	period: string
	href: string
	isCurrent?: boolean
	/** The headline result the home cost slab draws (needs a ratio) */
	isFeatured?: boolean
	/** The figure is scale (states, units served), not an improvement */
	isScope?: boolean
	/** Tools this engagement ran on, taken from its role description */
	stack?: readonly string[]
	/** after ÷ before, drawn by the cost slab (only when a real ratio exists) */
	ratio?: number
}

export interface IStackGroup {
	title: string
	techs: readonly string[]
}
