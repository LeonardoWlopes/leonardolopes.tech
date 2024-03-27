// components
import Image, { type StaticImageData } from 'next/image'

// types
import type { ETechCategory } from '@/enums/tech'

export interface ITechCardProps {
	name: string
	image: string | StaticImageData
	category: ETechCategory
}

export function TechCard({ category, image, name }: ITechCardProps) {
	return (
		<div className="relative flex w-full gap-3 rounded-3xl border border-card-border bg-onyx p-4 sm:min-h-[300px] sm:flex-col md:p-6">
			<Image
				className="aspect-square h-14 w-14 rounded-xl sm:m-auto sm:h-[100px] sm:w-[100px]"
				src={image}
				alt={name}
				width={100}
				height={100}
			/>

			<div className="flex w-full items-center justify-between gap-2 sm:absolute sm:bottom-6 sm:left-0 sm:px-6">
				<span className="font-bold text-base text-white sm:text-lg">
					{name}
				</span>

				<span className="rounded-3xl border border-dark-gray/90 px-2 py-1 text-center font-normal text-dark-gray text-xs">
					{category}
				</span>
			</div>
		</div>
	)
}
