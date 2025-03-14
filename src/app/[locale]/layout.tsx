import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

// assets
import bottomBackground from '@/assets/bottom-background.svg'
import topBackground from '@/assets/top-background.svg'

// components
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Image from 'next/image'

// utils
import { env } from '@/utils/env'
import { CONSTANTS } from '@/utils/constants'
import { getMessages, getTranslations } from 'next-intl/server'
import { twMerge } from 'tailwind-merge'

// providers
import { ThemeProvider } from '@/providers/theme-provider'
import { NextIntlClientProvider } from 'next-intl'

// types
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

// next
const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('_meta')

	return {
		title: {
			default: t('title'),
			template: t('template'),
		},
		description: t('description'),
		openGraph: {
			type: 'website',
			url: env.APP_URL,
			images: [
				{
					url: CONSTANTS.AVATAR_URL,
					width: 460,
					height: 460,
					alt: t('title'),
				},
			],
		},
	}
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params

	if (!routing.locales.includes(locale as 'pt')) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} className="dark" style={{ colorScheme: 'dark' }}>
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

				<NextIntlClientProvider messages={messages}>
					<ThemeProvider>
						<Header />
					</ThemeProvider>

					<main className="flex w-full max-w-limit flex-col px-4 pt-24 pb-32 sm:pt-48">
						{children}
					</main>

					<Footer />
				</NextIntlClientProvider>

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
