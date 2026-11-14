'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import type { IDefaultComponentProps } from '~/interfaces/component'
import { cn } from '~/lib/utils'
import { useNavLinksContainer } from './container'

export function NavLinks({
	className,
	testId = 'nav-links',
}: IDefaultComponentProps) {
	const { links, listRef, pill } = useNavLinksContainer()

	return (
		<ul
			ref={listRef}
			data-testid={testId}
			className={cn(
				'relative flex flex-1 items-center justify-evenly sm:justify-start sm:gap-1',
				className,
			)}
		>
			{pill && (
				<li
					aria-hidden
					className="nav-pill pointer-events-none absolute inset-y-0 left-0 w-(--pill-w) translate-x-(--pill-x) rounded-full bg-white/10 shadow-glass-inset"
					style={
						{
							'--pill-x': `${pill.x}px`,
							'--pill-w': `${pill.width}px`,
						} as CSSProperties
					}
				/>
			)}

			{links.map(({ href, label, Icon, active }) => (
				<li key={href}>
					<Link
						href={href}
						aria-current={active ? 'page' : undefined}
						className={cn(
							'relative flex flex-col items-center gap-1 rounded-full px-0.5 py-1.5 sm:flex-row sm:px-3 sm:py-2 font-medium text-muted-foreground text-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring',
							active && 'text-foreground',
							active && !pill && 'bg-white/10 shadow-glass-inset',
						)}
					>
						<Icon className="size-5 sm:hidden" aria-hidden />

						<span className="text-[0.625rem] leading-none sm:text-sm">
							{label}
						</span>
					</Link>
				</li>
			))}
		</ul>
	)
}
