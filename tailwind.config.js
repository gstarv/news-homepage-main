/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      Colors:{
        SoftOrange: 'hsl(35, 77%, 62%)',
        SoftRed: 'hsl(5, 85%, 63%)'
      }
    }
  },
  plugins: [],
}

