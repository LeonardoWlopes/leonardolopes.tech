import {
	addMonths,
	differenceInYears,
	format,
	intervalToDuration,
} from 'date-fns'
import { DATE_FNS_LOCALE } from './constants'

export function formatMonthYear(date: Date) {
	return format(date, 'MMM yyyy', { locale: DATE_FNS_LOCALE })
}

export function formatDuration(start: Date, end: Date) {
	const { months = 0, years = 0 } = intervalToDuration({
		start,
		end: addMonths(end, 1),
	})

	return (
		[years > 0 && `${years} yr`, months > 0 && `${months} mo`]
			.filter(Boolean)
			.join(' ') || '0 mo'
	)
}

export function formatElapsed(start: Date, now: Date) {
	const {
		years = 0,
		months = 0,
		days = 0,
	} = intervalToDuration({ start, end: now })

	const parts = [
		years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : null,
		months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : null,
		days > 0 ? `and ${days} ${days === 1 ? 'day' : 'days'}` : null,
	]

	return parts.filter(Boolean).join(' ')
}

const NUMBER_WORDS = [
	'Zero',
	'One',
	'Two',
	'Three',
	'Four',
	'Five',
	'Six',
	'Seven',
	'Eight',
	'Nine',
	'Ten',
	'Eleven',
	'Twelve',
	'Thirteen',
	'Fourteen',
	'Fifteen',
	'Sixteen',
	'Seventeen',
	'Eighteen',
	'Nineteen',
	'Twenty',
]

/** Whole years between two dates, spelled out for display copy ("Six") */
export function formatYearsInWords(start: Date, now: Date) {
	const years = Math.max(0, differenceInYears(now, start))

	return NUMBER_WORDS[years] ?? String(years)
}

export function getAge(birthday: Date, now: Date) {
	return differenceInYears(now, birthday)
}
