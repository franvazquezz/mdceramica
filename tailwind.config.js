/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx, js}"],
  theme: {
    extend: {
      colors: {
        "carta-100": "#fcf4dd",
      }
    },
  },

  plugins: [require("daisyui")],
};