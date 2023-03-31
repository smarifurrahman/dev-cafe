/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#111111',
      'secondary': 'rgba(17, 17, 17, 0.6)',
      'tertiary': '#6047EC',
      'tertiary2': 'rgba(96, 71, 236, 0.1)',
      'gray': 'rgba(17, 17, 17, 0.05)',
      'gray2': 'rgba(17, 17, 17, 0.15)',
      'white': '#ffffff',
    },
  },
  plugins: [],
}

