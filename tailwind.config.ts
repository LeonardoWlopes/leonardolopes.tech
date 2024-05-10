import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'main-bg': 'var(--main-bg)',
				card: 'var(--card)',
				'card-border': 'var(--card-border)',

				primary: 'var(--primary)',
				'primary-border': 'var(--primary-border)',

				'dark-gray': '#808080',
				'medium-gray': '#80808080',
				'light-gray': '#C5C5C5',
				onyx: '#181818',
				'faint-white': '#F3F3F3',
			},
			maxWidth: {
				limit: '1024px',
			},
		},
	},
	plugins: [],
}
export default config
