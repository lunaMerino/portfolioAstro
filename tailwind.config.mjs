/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  green: '#39810D',
			  whitish: '#F5F5F5',
			  grey: '#CDCACA',
			}
		  },
	},
	plugins: [],
}
