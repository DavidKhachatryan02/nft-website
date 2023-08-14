/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "WHITE":"#FFFFFF",
          "GREY_LIGHT":"#DBDEE5",
          "GREY_DARK":"#212225",
          "BLUE_MAIN":"#4A5EC4",
          "GREY_TEXT":"#616161"
      },
    }
  },
  plugins: [],
}


