/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            '*': {
              color: theme('colors.white'),
            },
          },
        },
      }),
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        brownDark: 'var(--primary)',
        brownLight: 'var(--secondary)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
  ],
}
