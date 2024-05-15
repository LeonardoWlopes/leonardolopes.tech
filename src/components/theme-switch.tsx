'use client'

import { useCallback } from 'react'

// assets
import { Moon, Sun } from 'lucide-react'

// hooks
import { useTheme } from 'next-themes'

// utils
import { twMerge } from 'tailwind-merge'

// types
interface IThemeSwitchProps {
	className?: string
}

export function ThemeSwitch({ className }: IThemeSwitchProps) {
	const { setTheme } = useTheme()

	const handleDarkTheme = useCallback(() => {
		setTheme('dark')
	}, [])

	const handleLightTheme = useCallback(() => {
		setTheme('light')
	}, [])

	return (
		<div
			className={twMerge('text-primary dark:text-light-gray', className)}
		>
			<Moon
				className="hidden cursor-pointer dark:flex"
				onClick={handleLightTheme}
			/>

			<Sun
				className="flex cursor-pointer dark:hidden"
				onClick={handleDarkTheme}
			/>
		</div>
	)
}
