import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'jsdom',
		passWithNoTests: true,
		globals: true,
		include: ['src/**/*.spec.ts'],
		setupFiles: ['./test/setup.ts'],
		clearMocks: true,
		restoreMocks: true,
		unstubGlobals: true,
		unstubEnvs: true,
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
			'~test': new URL('./test/', import.meta.url).pathname,
		},
	},
})
