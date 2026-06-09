/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: {
          oscuro: '#2D4A3E',
          medio: '#4A7A66',
          suave: '#7BAF96',
          claro: '#C5DDD4',
        },
        crema: {
          DEFAULT: '#F5F0E8',
          oscura: '#EBE4D6',
        },
        dorado: '#C8A882',
        texto: '#2C2C2A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
