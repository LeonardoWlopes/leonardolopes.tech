import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NotFoundSaber } from '~/components/not-found-saber'
import { buttonVariants } from '~/components/ui/button/styles'
import { cn } from '~/lib/utils'

const GUTTER = 'px-[clamp(1.25rem,5vw,6rem)]'

const CTA =
	'px-5 text-sm transition-transform active:scale-[0.97] sm:px-7 sm:text-base'

const ROUTES = [
	{ label: 'Experience', href: '/experiences' },
	{ label: 'Contact', href: '/contact' },
]

export function NotFoundScreen() {
	return (
		<section
			aria-labelledby="not-found-title"
			className={`bleed blueprint relative isolate -mt-20 flex min-h-svh w-full flex-col justify-center overflow-hidden pt-28 pb-[clamp(6rem,12svh,8rem)] sm:-mt-32 sm:pt-36 ${GUTTER}`}
		>
			<div className="flex max-w-[min(100%,46rem)] flex-col gap-6">
				<h1
					id="not-found-title"
					className="flex flex-col gap-3 text-foreground"
				>
					<span className="font-semibold text-[clamp(6rem,18vw,14rem)] leading-[0.85] tracking-[-0.06em]">
						404
					</span>{' '}
					<span className="text-balance font-medium text-[clamp(2rem,2.4vw+1rem,3.5rem)] leading-[1.05] tracking-[-0.03em]">
						Page <span className="text-neon-soft">not found</span>.
					</span>
				</h1>

				<p className="max-w-[44ch] text-pretty text-lg text-muted-foreground">
					These are not the droids you are looking for. Nothing is running in
					production at this address: the link may be old or mistyped.
				</p>

				<nav aria-label="Ways back" className="mt-2">
					<ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
						<li>
							<Link
								href="/"
								data-testid="not-found-home-button"
								className={cn(
									buttonVariants({ variant: 'light', size: 'xl' }),
									CTA,
									'w-full sm:w-auto',
								)}
							>
								<ArrowLeft aria-hidden />
								Back to home page
							</Link>
						</li>

						{ROUTES.map(({ label, href }) => (
							<li key={href}>
								<Link
									href={href}
									data-testid={`not-found-${label.toLowerCase()}-button`}
									className="group inline-flex min-h-6 items-center gap-2 text-neon-soft underline-offset-4 hover:underline"
								>
									{label}
									<ArrowRight
										className="size-4 transition-transform group-hover:translate-x-0.5"
										aria-hidden
									/>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>

			{/* Behind the copy on wider screens; under the links on phones */}
			<NotFoundSaber className="-z-10 sm:right-[6%] lg:right-[17%]" />
		</section>
	)
}
