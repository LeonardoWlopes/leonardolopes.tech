import { use } from 'react'
import { calculateTime } from '@/utils/time'
import { twMerge } from 'tailwind-merge'
import { addMonths, format } from 'date-fns'
import Image from 'next/image'
import type { IExperience, IExperienceRole } from '@/interfaces/experience'
import { useTranslations } from 'next-intl'
import { getDateFnsLocale } from '@/utils/locale'
import Link from 'next/link'

const EXPERIENCE_HEIGHT = 400

export interface IExperienceProps {
	experience: IExperience
	className?: string
}

interface IRoleInfoProps {
	role: IExperienceRole
}

interface ISingleRoleProps {
	role: IExperienceRole
}

interface IMultipleRolesProps {
	roles: IExperienceRole[]
}

export function Experience({ experience, className }: IExperienceProps) {
	const sortedRoles = [...experience.roles].sort(
		(a, b) => b.startDate.getTime() - a.startDate.getTime(),
	)

	return (
		<Link href="" className={twMerge('overflow-hidden', className)}>
			<div className={'flex gap-2'} data-cy="experience">
				<div className="h-12 w-full max-w-12 overflow-hidden rounded-md">
					<Image
						className="object-cover"
						src={experience.company.icon}
						alt={experience.company.name}
						width={48}
						height={48}
						data-cy="experience-logo"
					/>
				</div>

				<div className="flex flex-1 flex-col">
					<h3
						className="font-bold text-lg text-primary"
						data-cy="experience-title"
					>
						{experience.company.name}
						{sortedRoles.length === 1 && (
							<>
								{' - '}
								<strong className="font-bold text-base">
									{sortedRoles[0].title}
								</strong>
							</>
						)}
					</h3>

					<div
						className="relative"
						style={{ maxHeight: EXPERIENCE_HEIGHT }}
					>
						<div className="overflow-hidden pb-8">
							{sortedRoles.length === 1 ? (
								<SingleRole role={sortedRoles[0]} />
							) : (
								<MultipleRoles roles={sortedRoles} />
							)}
						</div>

						<div className="pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-main-bg to-transparent" />
					</div>
				</div>
			</div>
		</Link>
	)
}

function RoleInfo({ role }: IRoleInfoProps) {
	const t = useTranslations('experiences')
	const locale = use(getDateFnsLocale())

	function formatDate(date: Date) {
		return format(date, 'MMM yyyy', { locale })
	}

	function calculateDuration(startDate: Date, endDate: Date | null): string {
		if (!startDate) return ''

		const end = endDate ?? new Date()
		const { months, years } = calculateTime(startDate, addMonths(end, 1))

		return (
			[years > 0 && `${years} a`, months > 0 && `${months} m`]
				.filter(Boolean)
				.join(' ') || '0 m'
		)
	}

	function formatDateRange(startDate: Date, endDate: Date | null) {
		return `${formatDate(startDate)} - ${
			endDate ? formatDate(endDate) : t('present')
		}`
	}

	return (
		<>
			<span className="text-dark-gray text-sm">
				{`${formatDateRange(role.startDate, role.endDate)} · ${calculateDuration(
					role.startDate,
					role.endDate,
				)}`}
			</span>
			<p className="text-primary text-sm">{role.description}</p>
		</>
	)
}

function SingleRole({ role }: ISingleRoleProps) {
	const t = useTranslations('experiences')

	const locale = use(getDateFnsLocale())

	function formatDate(date: Date) {
		return format(date, 'MMM yyyy', { locale })
	}

	function calculateDuration(startDate: Date, endDate: Date | null): string {
		if (!startDate) return ''

		const end = endDate ?? new Date()
		const { months, years } = calculateTime(startDate, addMonths(end, 1))

		return (
			[years > 0 && `${years} a`, months > 0 && `${months} m`]
				.filter(Boolean)
				.join(' ') || '0 m'
		)
	}

	function formatDateRange(startDate: Date, endDate: Date | null) {
		return `${formatDate(startDate)} - ${
			endDate ? formatDate(endDate) : t('present')
		}`
	}

	return (
		<>
			<span
				className="mb-3 text-dark-gray text-sm"
				data-cy="experience-date"
			>
				{`${formatDateRange(role.startDate, role.endDate)} · ${calculateDuration(
					role.startDate,
					role.endDate,
				)}`}
			</span>
			<p
				className="w-full text-primary text-sm"
				data-cy="experience-description"
			>
				{role.description}
			</p>
		</>
	)
}

function MultipleRoles({ roles }: IMultipleRolesProps) {
	return (
		<div className="flex flex-col gap-2">
			{roles.map((role) => (
				<div key={role.title} className="flex flex-col">
					<span className="font-bold text-base text-primary">
						{role.title}
					</span>
					<RoleInfo role={role} />
				</div>
			))}
		</div>
	)
}
