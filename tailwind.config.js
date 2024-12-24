/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',      // For the App Router
    './src/pages/**/*.{js,ts,jsx,tsx}',    // For the Pages Router
    './src/components/**/*.{js,ts,jsx,tsx}' // For Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
