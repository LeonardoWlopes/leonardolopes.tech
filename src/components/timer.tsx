function calculateTime() {
	const START_DATE = new Date('2020-06-04T00:00:00Z')
	const NOW = new Date()

	let years = NOW.getFullYear() - START_DATE.getFullYear()
	let months = NOW.getMonth() - START_DATE.getMonth()
	let days = NOW.getDate() - START_DATE.getDate()

	if (months < 0 || (months === 0 && days < 0)) {
		years--
		months += 12
	}

	if (days < 0) {
		months--
		const copyNow = new Date(NOW.getTime())
		copyNow.setMonth(copyNow.getMonth() - 1)
		days += new Date(
			copyNow.getFullYear(),
			copyNow.getMonth() + 1,
			0,
		).getDate()
	}

	return { years, months, days }
}

export function Timer() {
	const { years, months, days } = calculateTime()

	const timeParts = [
		`${years} Anos`,
		months > 0 ? `${months} ${months === 1 ? 'mês' : 'meses'}` : null,
		days > 0 ? `e ${days} ${days === 1 ? 'dia' : 'dias'}` : null,
	]
		.filter(Boolean)
		.join(' ')

	return <span>{timeParts}</span>
}
