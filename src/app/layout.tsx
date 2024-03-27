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
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'Leonardo Lopes | Engenheiro de Software Full Stack',
		template: 'Leonardo Lopes | %s',
	},
	description:
		'Bem-vindo ao meu espaço digital! Sou o Léo, engenheiro de software apaixonado por criar soluções inovadoras e funcionais para desafios tecnológicos. Este é o meu cantinho na web, onde compartilho meu portfólio, experiências e insights sobre o mundo da programação e desenvolvimento de software.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className="dark">
			<body
				// biome-ignore lint/nursery/useSortedClasses: This is a false positive
				className={`relative flex min-h-screen flex-col items-center overflow-x-hidden bg-main-bg px-4 pt-24 pb-32 antialiased sm:py-8 ${inter.className}`}
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
				<SpeedInsights />
			</body>
		</html>
	)
}
