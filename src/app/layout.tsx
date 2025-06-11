import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'
import bottomBackground from '@/assets/bottom-background.svg'
import topBackground from '@/assets/top-background.svg'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Image from 'next/image'
import { env } from '@/utils/env'
import { twMerge } from 'tailwind-merge'
import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'

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
		<html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
			<body
				className={twMerge(
					'relative flex min-h-screen flex-col items-center overflow-x-hidden bg-main-bg antialiased',
					inter.className,
				)}
			>
				<Image
					className="-z-10 -top-1 absolute w-full max-w-screen-2xl object-none"
					src={topBackground}
					alt=""
					draggable={false}
					priority
				/>

				<ThemeProvider>
					<Header />
				</ThemeProvider>

				<main className="flex w-full max-w-limit flex-col px-4 pt-24 pb-32 sm:pt-48">
					{children}
				</main>

				<Footer />

				<Image
					className="-z-10 -bottom-1 absolute w-full max-w-screen-2xl object-none"
					src={bottomBackground}
					alt=""
					draggable={false}
					priority
				/>

				<Analytics />
				<SpeedInsights />
				<GoogleAnalytics gaId={env.GOOGLE_ANALYTICS_ID} />
			</body>
		</html>
	)
}
