'use client'

import { useCallback } from 'react'

// assets
import { Moon, Sun } from 'lucide-react'

// hooks
import { useTheme } from 'next-themes'

export function ThemeSwitch() {
	const { setTheme } = useTheme()

	const handleDarkTheme = useCallback(() => {
		setTheme('dark')
	}, [])

	const handleLightTheme = useCallback(() => {
		setTheme('light')
	}, [])

	return (
		<div className="text-primary dark:text-light-gray">
			<Moon
				className='hidden cursor-pointer dark:flex'
				onClick={handleLightTheme}
			/>

			<Sun
				className="flex cursor-pointer dark:hidden"
				onClick={handleDarkTheme}
			/>
		</div>
	)
}
