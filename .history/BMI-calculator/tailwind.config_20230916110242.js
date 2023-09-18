/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'sans': ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}

