// components
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

// types
import type { ETechTag } from '@/enums/tech'

export interface ITechCardProps {
	name: string
	image: string | StaticImageData
	tag: ETechTag
	link?: string
}

export function TechCard({ tag, image, name, link }: ITechCardProps) {
	function Card() {
		return (
			<div className="relative flex w-full gap-3 rounded-3xl border border-card-border bg-faint-white p-4 sm:min-h-[300px] sm:flex-col dark:bg-onyx md:p-6">
				<Image
					className="aspect-square h-14 w-14 rounded-xl sm:m-auto sm:h-[100px] sm:w-[100px]"
					src={image}
					alt={name}
					width={100}
					height={100}
				/>

				<div className="flex w-full items-center justify-between gap-2 sm:absolute sm:bottom-6 sm:left-0 sm:px-6">
					<span className="font-bold text-base text-secondary sm:text-lg">
						{name}
					</span>

					<span className="rounded-3xl border border-card-border px-2 py-1 text-center font-normal text-dark-gray text-xs dark:border-dark-gray/90 dark:text-dark-gray">
						{tag}
					</span>
				</div>
			</div>
		)
	}

	if (link)
		return (
			<Link
				className="w-full"
				href={link}
				target="_blank"
				rel="noreferrer"
			>
				<Card />
			</Link>
		)

	return <Card />
}
