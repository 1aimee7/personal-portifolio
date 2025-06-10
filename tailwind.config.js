/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use 'class' strategy to toggle dark mode with a class
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all files in src directory
    './app/**/*.{js,ts,jsx,tsx}', // Include App Router files
    './components/**/*.{js,ts,jsx,tsx}', // Include components if outside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};