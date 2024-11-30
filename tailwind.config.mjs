/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  color1: '#D8D8D8',
			  color2: '#BCBCBC',
			  color3: '#A0A0A0',
			  whitish: '#FAF4F1',
			  blackish: '#161615',
			},
			fontFamily: {
				poppins: ['"Poppins"', 'sans-serif'],
			  },
			  padding: {
				'20p': '20%',
			  },
			},
	 },
	plugins: [],
}