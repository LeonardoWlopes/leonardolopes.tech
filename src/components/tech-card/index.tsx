import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '~/lib/utils'
import type { ITechCardProps } from './types'

/**
 * Brand marks drawn in near-black ink vanish on the midnight ground. They are
 * shown in white, as those brands present themselves on dark surfaces; every
 * other logo keeps its own colours so it stays recognizable.
 */
const DARK_INK_LOGOS = new Set([
	'Apache Kafka',
	'Cypress',
	'Docusaurus',
	'Linux',
	'MySQL',
	'Ngrok',
	'Prisma',
	'Rust',
])

const TILE =
	'group relative flex h-full min-h-16 items-center gap-3 rounded-xl border border-border/70 bg-background/70 p-3 transition-[border-color,background-color,box-shadow] duration-200 ease-out hover:border-neon-soft/50 hover:bg-neon/10 hover:shadow-neon focus-visible:border-neon-soft/60 focus-visible:bg-neon/10 focus-visible:shadow-neon sm:gap-4 sm:p-4'

/** One technology as a tile that lights up like a running system on hover or focus */
export function TechCard({
	tech,
	className,
	testId = 'tech-card',
}: ITechCardProps) {
	const { name, image, link, nonProfessional } = tech

	const content = (
		<>
			<span className="relative flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-[box-shadow,background-color] duration-200 group-hover:bg-white/10 group-hover:ring-neon-soft/40 group-focus-visible:ring-neon-soft/40">
				<Image
					src={image}
					alt=""
					width={24}
					height={24}
					sizes="1.5rem"
					className={cn(
						'size-6 object-contain',
						DARK_INK_LOGOS.has(name) && 'brightness-0 invert',
					)}
				/>
			</span>

			<span className="flex min-w-0 flex-1 flex-col gap-0.5">
				<span className="text-pretty font-medium text-foreground text-sm leading-tight wrap-anywhere sm:text-base">
					{name}
				</span>

				{nonProfessional && (
					<span className="text-muted-foreground text-xs leading-tight">
						<span className="sr-only">, </span>Personal / academic
					</span>
				)}
			</span>

			<span
				aria-hidden
				className={cn(
					'absolute top-2.5 right-2.5 size-1.5 rounded-full transition-[background-color,box-shadow] duration-200',
					nonProfessional
						? 'ring-1 ring-muted-foreground/70 group-hover:ring-neon-soft'
						: 'bg-neon-soft/70 group-hover:bg-neon-soft group-hover:shadow-neon-dot group-focus-visible:bg-neon-soft group-focus-visible:shadow-neon-dot',
				)}
			/>

			{link && (
				<ArrowUpRight
					aria-hidden
					className="absolute right-2 bottom-2 size-3.5 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
				/>
			)}
		</>
	)

	if (!link)
		return (
			<div data-testid={testId} className={cn(TILE, className)}>
				{content}
			</div>
		)

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			data-testid={testId}
			className={cn(TILE, className)}
		>
			{content}
			<span className="sr-only"> (opens in a new tab)</span>
		</a>
	)
}
