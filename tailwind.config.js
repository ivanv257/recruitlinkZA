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
        darkOrange: '#EF6D5D',
        medOrange: '#EA7F6E',
        lightOrange: '#F9AE86'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
