export function calculateTime(start: Date, end: Date = new Date()) {
	let years = end.getFullYear() - start.getFullYear()
	let months = end.getMonth() - start.getMonth()
	let days = end.getDate() - start.getDate()

	if (months < 0 || (months === 0 && days < 0)) {
		years--
		months += 12
	}

	if (days < 0) {
		months--
		const copyNow = new Date(end.getTime())
		copyNow.setMonth(copyNow.getMonth() - 1)
		days += new Date(
			copyNow.getFullYear(),
			copyNow.getMonth() + 1,
			0,
		).getDate()
	}

	return { years, months, days }
}
