/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Make sure this is set correctly
  theme: {
    extend: {
      fontFamily: {
        Inter: 'Inter, sans-serif', // Make sure this includes sans-serif as a fallback
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false, // Disable DaisyUI's own themes if you're managing dark mode manually
  }
};
