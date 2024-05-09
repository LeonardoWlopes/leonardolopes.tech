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
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				'primary-border': 'var(--primary-border)',

				'light-gray': '#C5C5C5',
				'medium-gray': 'rgba(128, 128, 128, 0.5)',
				'dark-gray': '#808080',
				onyx: '#181818',
				'card-border': '#383737',
			},
			maxWidth: {
				limit: '1024px',
			},
		},
	},
	plugins: [],
}
export default config
