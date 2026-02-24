import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.gregorjan.eu',
	integrations: [
		mdx(),
		robotsTxt(),
		sitemap(),
		icon({
			iconDir: 'src/assets/svg',
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	prefetch: true,
	experimental: {
		clientPrerender: true,
	},
	markdown: {
		shikiConfig: {
			theme: 'dark-plus',
			langs: ['css', 'typescript', 'html', 'json'],
			wrap: true,
			transformers: [],
		},
	},
})
