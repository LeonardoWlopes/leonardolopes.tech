import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// assets
import topBackground from '@/assets/top-background.svg'
import bottomBackground from '@/assets/bottom-background.svg'

//components
import Image from 'next/image'
import { Header } from '@/components/header'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Leonardo Lopes | Engenheiro de Software Full Stack',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className="dark">
			<body
				className={
					// biome-ignore lint/nursery/useSortedClasses: This is a false positive
					`relative min-h-screen overflow-x-hidden bg-main-bg px-4 py-8 antialiased items-center flex flex-col ${inter.className}`
				}
			>
				<Image
					className="absolute top-0"
					src={topBackground}
					alt=""
					draggable={false}
				/>

				<Header />

				{children}

				<Image
					className="-z-10 absolute bottom-0"
					src={bottomBackground}
					alt=""
					draggable={false}
				/>

				<Analytics />
			</body>
		</html>
	)
}
