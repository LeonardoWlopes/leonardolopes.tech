import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'
import { Experience } from '@/components/experience'
import { Timer } from '@/components/timer'
import { PageSubtitle, PageTitle } from '@/components/typography'
import { EXPERIENCES } from '@/utils/mock'

export const revalidate = 43200 // 12 hours

export const metadata: Metadata = {
	title: 'Experiences',
	description:
		'Get to know my professional journey, projects, and experiences that made me the professional I am today.',
}

export default function Experiencies() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">Experiences</PageTitle>

			<PageSubtitle>My professional experiences so far</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<div
				className={'relative flex flex-col items-center gap-8 sm:gap-2'}
			>
				<div
					className={
						'absolute hidden h-full w-px bg-primary-border sm:flex'
					}
				/>

				{EXPERIENCES.map((experience, index) => {
					const isEven = index % 2 === 0

					return (
						<div
							key={experience.company.name}
							className={twMerge(
								'relative flex w-full items-center',
								isEven ? 'flex-row' : 'sm:flex-row-reverse',
							)}
						>
							<div className="absolute left-[calc(50%-7.5px)] hidden h-4 w-4 items-center justify-center rounded-full border border-primary-border bg-main-bg sm:flex">
								<div className="h-1/3 w-1/3 rounded-full bg-primary-border" />
							</div>

							<Experience
								experience={experience}
								className={twMerge('sm:max-w-[calc(50%-15px)]')}
							/>
						</div>
					)
				})}

				<span className="z-10 mt-4 rounded-md border border-primary-border bg-main-bg px-3 py-2 text-dark-gray text-sm">
					<Timer /> ago
				</span>
			</div>
		</div>
	)
}
