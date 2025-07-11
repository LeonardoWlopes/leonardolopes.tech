import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import bottomBackground from '@/assets/bottom-background.svg'
import topBackground from '@/assets/top-background.svg'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { env } from '@/utils/env'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'Leonardo Lopes | Software Engineer',
		template: 'Leonardo Lopes | %s',
	},
	description:
		"Welcome to my digital space! I'm Leo, a software engineer passionate about creating innovative and functional solutions for technological challenges. This is my corner on the web where I share my portfolio, experiences, and insights about the world of programming and software development.",
	openGraph: {
		type: 'website',
		url: env.APP_URL,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={twMerge(
					'relative flex min-h-screen flex-col items-center overflow-x-hidden bg-main-bg text-light-gray antialiased',
					inter.className,
				)}
			>
				<Image
					className="-z-10 -top-1 absolute w-full max-w-(--breakpoint-2xl) object-none"
					src={topBackground}
					alt=""
					draggable={false}
					priority
				/>

				<Header />

				<main className="flex w-full max-w-limit flex-col px-4 pt-24 pb-32 sm:pt-48">
					{children}
				</main>

				<Footer />

				<Image
					className="-z-10 -bottom-1 absolute w-full max-w-(--breakpoint-2xl) object-none"
					src={bottomBackground}
					alt=""
					draggable={false}
					priority
				/>

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
