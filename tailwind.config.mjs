/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  color1: '#7B5A64',
			  color2: '#5D444C',
			  color3: '#3F2E33',
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
