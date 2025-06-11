import { Book } from 'lucide-react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

export interface ITechCardProps {
	name: string
	image: string | StaticImageData
	link?: string
	nonProfessional?: boolean
}

export function TechCard({
	image,
	name,
	link,
	nonProfessional,
}: ITechCardProps) {
	function Card() {
		return (
			<div className="relative flex w-full gap-3 rounded-3xl border border-card-border bg-faint-white p-4 sm:min-h-[300px] sm:flex-col md:p-6 dark:bg-onyx">
				<div className="flex items-center justify-center rounded-md p-2 sm:m-auto sm:h-[100px] sm:w-[100px]">
					<Image
						className="aspect-square w-14 rounded-xl sm:w-full"
						src={image}
						alt={name}
						width={100}
						height={100}
					/>
				</div>

				<div className="flex w-full items-center justify-between gap-2 sm:absolute sm:bottom-6 sm:left-0 sm:px-6">
					<span className="font-bold text-base text-secondary capitalize sm:text-lg">
						{name}
					</span>

					{nonProfessional && (
						<abbr title="Non professional skill">
							<span className="flex items-center gap-1 rounded-3xl border border-card-border p-2 text-center font-normal text-dark-gray text-xs capitalize dark:border-dark-gray/90 dark:text-dark-gray">
								<Book className="size-4" />
							</span>
						</abbr>
					)}
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
