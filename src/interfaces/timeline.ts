export interface ITimelineSegment {
	label: string
	start: Date
	end: Date | null
	offset: number
	width: number
}

export interface ITimelineLane extends ITimelineSegment {
	engagements: ITimelineSegment[]
}

export interface ITimelineYear {
	year: number
	offset: number
}

export interface ICareerTimeline {
	lanes: ITimelineLane[]
	years: ITimelineYear[]
}
