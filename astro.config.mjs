// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://root-hbx.github.io',
	base: '/opensat-doc',

	integrations: [
		starlight({
			title: 'OpenSat',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/root-hbx/open5gs-satellite' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Docs',
					autogenerate: { directory: 'doc' },
				},
			],
		}),
	],
});
