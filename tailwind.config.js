/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkOrange: '#D3645F',
        medOrange: '#EA7F6E',
        lightOrange: '#F9AE86'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
