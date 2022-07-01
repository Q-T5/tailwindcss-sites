/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./html/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "heading-font": ["Oswald", "sans-serif"],
        "body-font": ["Nunito", "sans-serif"],
        "standout-font": ["Oswald", "sans-serif"],
      },

      backgroundImage: {
        "cuttlery-main": "url('./images/cutlery-land-images/main-welcome-img.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],

  "daisyui": {
    "prefix": "daisyui-"
  }
}
