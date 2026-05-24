/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'power-primary': '#0A2342',
        'power-secondary': '#1D4E89',
        'power-accent': '#C1121F',
      },
    },
  },
  plugins: [],
}
