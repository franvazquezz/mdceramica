/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx, js}"],
  theme: {
    extend: {
      colors: {
        "lunes-100": "#e8dff5",
        "martes-100": "#fce1e4",
        "miércoles-100": "#fcf4dd",
        "jueves-100": "#ddedea",
        "viernes-100": "#daeaf6",
        "sábado-100": "#e8dff5"
      }
    },
  },

  plugins: [require("daisyui")],
};