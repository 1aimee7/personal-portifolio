/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Add this if using the app directory
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F5A623',
      },
    },
  },
  plugins: [],
};