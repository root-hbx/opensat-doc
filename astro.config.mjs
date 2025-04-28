// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://root-hbx.github.io',
	base: '/opensat-doc',

	integrations: [
		starlight({
			favicon: 'opensat-favicon.png',
			title: 'OpenSat',
			logo: {
				light: './src/assets/opensat.png',
				dark: './src/assets/opensat.png',
				// replacesTitle: true,
			},
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/root-hbx/open5gs-satellite'
				},
				{ 
					icon: 'telegram', 
					label: 'Telegram', 
					href: 'https://github.com/root-hbx/open5gs-satellite' // TODO(bxhu): add telegram link
				},
				{ 
					icon: 'external', 
					label: 'Blog', 
					href: 'https://github.com/root-hbx/open5gs-satellite' // TODO(bxhu): add blog link
				},
			],
			editLink: {
				baseUrl: 'https://github.com/root-hbx/opensat-doc/tree/main/',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Docs',
					autogenerate: { directory: 'doc' },
				},
				{
					label: 'References',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
