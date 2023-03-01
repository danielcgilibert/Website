/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
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
      colors: {
        brownDark: '#18181B',
        brownLight: '#252529',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
