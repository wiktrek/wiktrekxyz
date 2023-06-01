/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
