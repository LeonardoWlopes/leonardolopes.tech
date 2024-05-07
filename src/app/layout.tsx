import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// assets
import topBackground from '@/assets/top-background.svg'
import bottomBackground from '@/assets/bottom-background.svg'

// components
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'

// utils
import { env } from '@/env'
import { twMerge } from 'tailwind-merge'
import { CONSTANTS } from '@/utils/constants'

// next
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'Leonardo Lopes | Engenheiro de Software Full Stack',
		template: 'Leonardo Lopes | %s',
	},
	description:
		'Bem-vindo ao meu espaço digital! Sou o Léo, engenheiro de software apaixonado por criar soluções inovadoras e funcionais para desafios tecnológicos. Este é o meu cantinho na web, onde compartilho meu portfólio, experiências e insights sobre o mundo da programação e desenvolvimento de software.',
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: env.APP_URL,
		images: [
			{
				url: CONSTANTS.AVATAR_URL,
				width: 460,
				height: 460,
				alt: 'Leonardo Lopes | Engenheiro de Software Full Stack',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className="dark">
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

				<Header />

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
