import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'
const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
			},
		],
	},
}

export default withNextIntl(nextConfig)
