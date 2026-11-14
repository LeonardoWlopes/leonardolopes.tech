import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	cacheComponents: true,
	partialPrefetching: true,
	agentRules: false,
	turbopack: {
		rules: {
			'*.css': {
				loaders: ['@tailwindcss/turbopack'],
				as: '*.css',
			},
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
		],
	},
}

export default nextConfig
