/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
