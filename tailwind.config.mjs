/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  color1: '#DCDCDC',
			  color2: '#BEBEBE',
			  color3: '#A2A2A2',
			  color4: '#868686',
			  color5: '#6A6A6A',
			  color6: '#4E4E4E',
			  color7: '#323232',
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