import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Wubbiki',
			social: {
				github: 'https://github.com/yourlocalonion/wubbiki',
				discord: 'https://discord.gg/wXZtfzRKWw',
			},
			logo: {
				src: './src/assets/wubbiki.svg'
			},
			editLink: {
				baseUrl: 'https://github.com/yourlocalonion/wubbiki/tree/main/wubbiki'
			},
			sidebar: [
				{
					label: 'Blocks and Logic',
					autogenerate: { directory: 'reference' }
				},
				{
					label: 'Contributing',
					autogenerate: { directory: 'contributing' },
				},
				{
					label: 'Other',
					autogenerate: { directory: 'other' },
				},
				{
					label: 'Community',
					autogenerate: { directory: 'community' },
					badge: { text: 'WIP', variant: 'caution' },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});
