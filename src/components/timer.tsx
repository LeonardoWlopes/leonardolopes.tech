import { getFirstRole } from '@/utils/role'
import { calculateTime } from '@/utils/time'

export function Timer() {
	const firstRole = getFirstRole()

	const { years, months, days } = calculateTime(firstRole.startDate)

	const timeParts = [
		years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : null,
		months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : null,
		days > 0 ? `and ${days} ${days === 1 ? 'day' : 'days'}` : null,
	]
		.filter(Boolean)
		.join(' ')

	return <span>{timeParts}</span>
}
