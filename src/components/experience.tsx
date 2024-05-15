// utils
import { calculateTime } from '@/utils/time'
import { twMerge } from 'tailwind-merge'
import { addMonths, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

//components
import Image from 'next/image'

//types
import type { IExperience } from '@/interfaces/experience'

interface IExperienceProps extends Pick<HTMLDivElement, 'className'> {
	experience: IExperience
}

export function Experience({ experience, className }: IExperienceProps) {
	const startDate = format(experience.role.startDate, 'MMM yyyy', {
		//@ts-ignore - locale is not in the types
		locale: ptBR,
	})

	const endDate = experience.role.endDate
		? format(experience.role.endDate, 'MMM yyyy', {
				//@ts-ignore - locale is not in the types
				locale: ptBR,
		  })
		: 'o momento'

	const { months, years } = calculateTime(
		experience.role.startDate,
		addMonths(experience.role.endDate ?? new Date(), 1),
	)

	const timeParts = [
		years > 0 ? `${years} a` : null,
		months > 0 ? `${months} m` : null,
	]
		.filter(Boolean)
		.join(' ')

	return (
		<div className={twMerge('flex gap-2', className)}>
			<Image
				className="aspect-square h-12 w-12 rounded-md object-cover"
				src={experience.icon}
				alt={experience.company}
				width={48}
				height={48}
			/>

			<div className="flex flex-col">
				<h3 className="font-bold text-lg text-primary">
					{experience.company}
					{' - '}
					<strong className="font-bold text-base">
						{experience.role.title}
					</strong>
				</h3>

				<span className="mb-3 text-dark-gray text-sm">
					{`${startDate} - ${endDate} · ${timeParts}
					`}
				</span>

				<p className="w-full text-primary text-sm">
					{experience.description}
				</p>
			</div>
		</div>
	)
}
