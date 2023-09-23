/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			}),
			fontFamily: {
				inter: ['var(--font-inter)']
			},
			gridTemplateColumns: {
				fluid: 'repeat(auto-fill, minmax(350px, 1fr))'
			},

			colors: {
				darkBrown: 'var(--primary)',
				lightBrown: 'var(--secondary)',
				lightOrange: 'var(--lightOrange)',
				darkOrange: 'var(--darkOrange)',
				lightGray: 'var(--lightGray)',
				customGray: 'var(--gray)',
				accent: 'var(--accent)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
