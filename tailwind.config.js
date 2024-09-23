/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    'node_modules/preline/dist/*.js',
    "node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      screens: {
        ms: '320px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"]
      },
      colors: {
        blue_voilet: "#195295",
        lotion_white: "#FAFAFA",
        chinese_silver: "#CECBC9",
        vampire_black: "#050505",
        red_cmyk: "#F3021A",
        isabel_gray: "#F3F1EF",
        charleson_grey: "#272A2A",
        primary_color: "#7F2AFF",
        bluey: "#2680EB",
        greeny: "#2CB864",
        yellowy: "#F3CD58",
        redy: "#E34149",
        greyy: "#E3E0DE"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}

