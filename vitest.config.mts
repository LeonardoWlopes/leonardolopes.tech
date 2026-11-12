import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'jsdom',
		passWithNoTests: true,
		globals: true,
		include: ['src/**/*.spec.ts'],
		env: {
			CV_URL: 'https://example.com/cv.pdf',
			APP_URL: 'https://leonardolopes.tech',
			GOOGLE_ANALYTICS_ID: 'G-TEST',
			NEXT_PUBLIC_SCHEDULE_LINK: 'https://example.com/schedule',
			NEXT_PUBLIC_CONTACT_NUMBER: '5500000000000',
		},
		coverage: {
			include: ['src/**/*.ts'],
			exclude: [
				'src/**/styles.ts',
				'src/**/types.ts',
				'src/app/**',
				'src/enums',
				'src/interfaces',
				'src/types',
				'src/utils/mock.ts',
				'src/utils/env.ts',
			],
			reporter: ['html', 'json-summary', 'clover', 'json', 'text-summary'],
			enabled: true,
			thresholds: {
				lines: 90,
				functions: 90,
				branches: 90,
				statements: 90,
			},
		},
	},
	resolve: {
		alias: {
			'~': new URL('./src/', import.meta.url).pathname,
		},
	},
})
