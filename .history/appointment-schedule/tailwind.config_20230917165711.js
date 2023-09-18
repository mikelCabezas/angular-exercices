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
        '50': '#f8fafc'
        '100': '#f1f5f9'
        '200': '#e2e8f0'
        '300': '#cbd5e1'
        '400': '#94a3b8'
        '500': '#64748b'
        '600': '#475569'
        '700': '#334155'
        '800': '#1e293b'
        '900': '#0f172a'
        '950': '#020617'
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

