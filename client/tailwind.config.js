/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#a0d8f1', // Light blue for the light mode
        'dark-blue': '#004b49', // Dark blue for the dark mode
        'custom-blue': '#0095d9', // Custom blue for accents
      },
      backgroundColor: {
        'dark-mode': '#002b36', // Dark mode background
        'light-mode': '#f0f8ff', // Light mode background
      },
      textColor: {
        'light': '#ffffff',
        'dark': '#333333',
      },
    },
  },
  plugins: [],
};
