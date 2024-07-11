/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#1a202c',
        'custom-yellow': '#FFD700',
        'custom-blue': '#4B9CD3',
        'custom-green': '#82C91E',
        'custom-red': '#FF6B6B',
        'custom-purple': '#D6BCFA',
        'button-yellow': '#FFD700',
        'button-text': '#1a202c'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}