/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#bcd6ff',
          200: '#8abbff',
          300: '#59a0ff',
          400: '#3285ff',
          500: '#0a6aff',
          600: '#0057e6',
          700: '#0045b3',
          800: '#003480',
          900: '#00224d'
        }
      },
      fontFamily: {
        sans: [
          'Inter var',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}