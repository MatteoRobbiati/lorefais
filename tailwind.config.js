// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [ ],
}
