import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.gregor.to',
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
