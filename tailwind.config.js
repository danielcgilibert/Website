/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*': {
              color: theme('colors.white')
            },
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
        customGray: 'var(--gray)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')
  ]
}
