'use client'
import { useState, useEffect } from 'react'

const START_DATE = new Date('2020-06-04T00:00:00Z')
const NOW = new Date()

export function Timer() {
	const [time, setTime] = useState(
		`${Math.ceil(NOW.getFullYear() - START_DATE.getFullYear())} Anos`,
	)

	useEffect(() => {
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

		setTime(`${years} Anos ${months} meses e ${days} dias`)
	}, [])

	return <span>{time}</span>
}
