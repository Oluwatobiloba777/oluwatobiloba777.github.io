/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/**/*.js"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif', 
        poppins: 'Poppins sans-serif',
        karla: 'Karla, sans-serif'
      },
      colors: {
        restaurant_green: "#25542d",
        restaurant_orange: "#e4c99f"
      }
    },
  },
  plugins: [],
}

