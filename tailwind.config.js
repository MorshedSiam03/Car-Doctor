/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: 'Inter' // Add the custom font family
      }
    },
  },
  plugins: [require('daisyui'),],
}