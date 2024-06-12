// utils
import { calculateTime } from '@/utils/time'
import { twMerge } from 'tailwind-merge'
import { addMonths, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

//components
import Image from 'next/image'
import Link from 'next/link'

//types
import type { IExperience } from '@/interfaces/experience'

export interface IExperienceProps {
	experience: IExperience
	className?: string
}

export function Experience({ experience, className }: IExperienceProps) {
	const startDate = format(experience.role.startDate, 'MMM yyyy', {
		locale: ptBR,
	})

	const endDate = experience.role.endDate
		? format(experience.role.endDate, 'MMM yyyy', {
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

	const haveLink = !!experience.link

	return (
		<div className={twMerge('flex gap-2', className)} data-cy="experience">
			<Link
				className={twMerge(
					'h-12 w-full max-w-12 overflow-hidden rounded-md',
					!haveLink && 'pointer-events-none',
				)}
				aria-disabled={!haveLink}
				tabIndex={!haveLink ? -1 : undefined}
				href={experience.link || ''}
				target="_blank"
			>
				<Image
					className="object-cover"
					src={experience.icon}
					alt={experience.company}
					width={48}
					height={48}
					data-cy="experience-logo"
				/>
			</Link>

			<div className="flex flex-col">
				<Link
					className={twMerge(
						'w-fit',
						!haveLink && 'pointer-events-none',
					)}
					aria-disabled={!haveLink}
					tabIndex={!haveLink ? -1 : undefined}
					href={experience.link || ''}
					target="_blank"
				>
					<h3
						className={twMerge(
							'font-bold text-lg text-primary',
							haveLink && 'hover:text-sky-400',
						)}
						data-cy="experience-title"
					>
						{experience.company}
						{' - '}
						<strong className="font-bold text-base">
							{experience.role.title}
						</strong>
					</h3>
				</Link>

				<span
					className="mb-3 text-dark-gray text-sm"
					data-cy="experience-date"
				>
					{`${startDate} - ${endDate} · ${timeParts}
					`}
				</span>

				<p
					className="w-full text-primary text-sm"
					data-cy="experience-description"
				>
					{experience.description}
				</p>
			</div>
		</div>
	)
}
