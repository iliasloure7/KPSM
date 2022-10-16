/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        army: '#4b5320',
        overlay: 'rgba(0, 0, 0, 0.5)',
        dark: 'rgb(36, 36, 36)',
      },
      height: {
        450: '28.125rem',
      },
      fontFamily: {
        body: ['"Roboto"', 'sans-serif'],
        heading: ['"Archivo Black"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
