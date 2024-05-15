import { calculateTime } from '@/utils/time'

export function Timer() {
	const { years, months, days } = calculateTime(
		new Date('2020-06-04T00:00:00Z'),
	)

	const timeParts = [
		`${years} Anos`,
		months > 0 ? `${months} ${months === 1 ? 'mês' : 'meses'}` : null,
		days > 0 ? `e ${days} ${days === 1 ? 'dia' : 'dias'}` : null,
	]
		.filter(Boolean)
		.join(' ')

	return <span>{timeParts}</span>
}
