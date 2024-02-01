/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: 'rgb(var(--color-primary) / <alpha-value>)',
			secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
			bg: 'rgb(var(--color-bg) / <alpha-value>)',
		},
		extend: {
			typography: ({ theme }) => ({
				primary: {
					css: {
						'--tw-prose-headings': theme('colors.primary/85'),
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
