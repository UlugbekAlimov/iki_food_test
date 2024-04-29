/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      laptop:'844px',
      desktop:'1420px'
    },
    extend: {},
  },
  plugins: [],
}