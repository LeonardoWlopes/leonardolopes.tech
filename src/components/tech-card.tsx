import type { ETechCategory } from '@/enums/tech'
import Image from 'next/image'

export interface ITechCardProps {
	name: string
	image: string
	category: ETechCategory
}

export function TechCard({ category, image, name }: ITechCardProps) {
	return (
		<div className='relative flex w-full max-w-[330px] flex-col rounded-3xl border border-card-border bg-onyx md:min-h-[300px] md:p-6'>
			<Image
				className="m-auto rounded-xl"
				src={image}
				alt={name}
				width={100}
				height={100}
			/>

			<div className="absolute bottom-6 left-0 flex w-full items-center justify-between px-6">
				<span className="font-bold text-lg text-white">{name}</span>

				<span className='rounded-3xl border border-dark-gray/90 px-2 py-1 font-normal text-dark-gray text-xs'>
					{category}
				</span>
			</div>
		</div>
	)
}
