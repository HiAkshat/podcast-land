/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Main: ['Inter', 'sans-serif'],
        Other: ['Hanken Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}