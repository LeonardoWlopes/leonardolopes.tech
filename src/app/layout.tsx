import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { cn } from '~/lib/utils'
import { env } from '~/utils/env'
import {
	buildPersonJsonLd,
	SITE_DESCRIPTION,
	SITE_NAME,
	serializeJsonLd,
} from '~/utils/seo'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
})

export const metadata: Metadata = {
	metadataBase: new URL(env.APP_URL),
	title: {
		default: 'Leonardo Lopes · Tech Lead, Software Engineer & Architect',
		template: '%s · Leonardo Lopes',
	},
	description: SITE_DESCRIPTION,
	openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_US' },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			suppressHydrationWarning
			className={cn('dark', geistSans.variable, geistMono.variable)}
		>
			<body className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-background font-sans text-foreground antialiased">
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: escaped JSON-LD per the Next.js guide
					dangerouslySetInnerHTML={{
						__html: serializeJsonLd(buildPersonJsonLd(env.APP_URL)),
					}}
				/>

				<div
					aria-hidden
					className="page-glow -z-10 pointer-events-none absolute inset-x-0 top-0 h-180"
				/>

				<a
					href="#main"
					className="sr-only z-60 rounded-full bg-white px-4 py-2 font-medium text-midnight focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
				>
					Skip to content
				</a>

				<Header />

				<main
					id="main"
					tabIndex={-1}
					className="outline-none flex w-full flex-col items-center pt-20 pb-32 sm:pt-32 has-[.signature-finale]:pb-0 [&>*:not(.bleed)]:px-4"
				>
					{children}
				</main>

				<Footer />

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
