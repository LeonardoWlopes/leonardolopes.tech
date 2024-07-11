// utils
import { calculateTime } from '@/utils/time'

// hooks
import { useTranslations } from 'next-intl'

export function Timer() {
	const t = useTranslations('dates')

	const { years, months, days } = calculateTime(
		new Date('2020-06-04T00:00:00Z'),
	)

	const timeParts = [
		years > 0 ? `${years} ${years === 1 ? t('year') : t('years')}` : null,
		months > 0
			? `${months} ${months === 1 ? t('month') : t('months')}`
			: null,
		days > 0
			? `${t('and')} ${days} ${days === 1 ? t('day') : t('days')}`
			: null,
	]
		.filter(Boolean)
		.join(' ')

	return <span>{timeParts}</span>
}
