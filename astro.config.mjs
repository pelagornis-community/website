import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.svg',
			title: 'Pelagornis Community',
			logo: {
				light: './src/assets/LightLogo.svg',
				dark: './src/assets/DarkLogo.svg',
				replacesTitle: true,
			},
			defaultLocale: 'en',
			social: {
				github: 'https://github.com/pelagornis-community',
			},
			sidebar: [
				{
					label: 'Information',
					items: [
						{ label: 'Rules', link: '/information/rules/' },
						{ label: 'Roles', link: '/information/roles/' },
						{ label: 'Channels', link: '/information/channels/'},
						{ label: 'FAQ', link: '/information/faq/'},
						{ label: 'Invite Link', link: '/information/invite-link/' }
					],
				},
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
			],
		}),
	],
});
