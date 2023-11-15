/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    safelist: ['dark'],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#FF6363',
          dark: '#FF6363',
        },
        secondary: {
          DEFAULT: '#5856D6',
          dark: '#5856D6',
        },
        gray: {
          DEFAULT: '#EDEDED',
          dark: '#EDEDED',
        },
        dark: {
          DEFAULT: '#121212',
          dark: '#121212',
        },
      },
    },
  },
  plugins: [],
}
