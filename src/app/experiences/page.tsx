// types
import type { Metadata } from 'next'

// components
import { Experience } from '@/components/experience'
import { Timer } from '@/components/timer'
import { PageTitle, PageSubtitle } from '@/components/typography'

// utils
import { EXPERIENCES } from '@/utils/mock'
import { twMerge } from 'tailwind-merge'

// next
export const metadata: Metadata = {
	title: 'Experiencias',
	description:
		'Conheça um pouco mais sobre minha trajetória profissional e pessoal.',
}

export const revalidate = 60 * 60 * 12 // 12 hours

export default function Experiencies() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">Experiencias</PageTitle>

			<PageSubtitle>Minha trajetória profissional até aqui</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<div
				className={'relative flex flex-col items-center gap-8 sm:gap-2'}
			>
				<div
					className={
						'absolute hidden h-full w-[1px] bg-primary-border sm:flex'
					}
				/>

				{EXPERIENCES.map((experience, index) => {
					const isEven = index % 2 === 0

					return (
						<div
							key={experience.company}
							className={twMerge(
								'relative flex items-center',
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
					Há <Timer />
				</span>
			</div>
		</div>
	)
}
