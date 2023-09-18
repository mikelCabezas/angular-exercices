/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"

  ],
  theme: {
    extend: {},
    colors: {
      zinc: {
        '700': '#0f172a'
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

