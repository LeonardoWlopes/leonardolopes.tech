// types
import type { Metadata } from 'next'

//components
import { Experience } from '@/components/experience'

//utils
import { EXPERIENCES } from '@/utils/mock'
import { twMerge } from 'tailwind-merge'

export const metadata: Metadata = {
	title: 'Experiencias',
	description:
		'Conheça um pouco mais sobre minha trajetória profissional e pessoal.',
}

export default function Experiencies() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<h1 className="mb-3 font-bold text-4xl text-primary md:text-6xl sm:text-5xl">
				Experiencias
			</h1>

			<h2 className="text-medium-gray md:text-2xl sm:text-xl">
				Minha trajetória profissional até aqui
			</h2>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<div className={'relative flex flex-col gap-8 sm:gap-2'}>
				<div
					className={
						'absolute left-1/2 hidden h-full w-[1px] bg-primary-border sm:flex'
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
			</div>
		</div>
	)
}
