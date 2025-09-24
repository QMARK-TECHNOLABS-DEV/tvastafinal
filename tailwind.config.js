/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#0D192D',
          blue: '#1D3357',
          red: '#E63946',
        }
      },
      spacing: {
        '818': '818px',
        '1240': '1240px',
        '1280': '1280px',
        '1408': '1408px',
        '1440': '1440px',
      }
    },
  },
  plugins: [],
}