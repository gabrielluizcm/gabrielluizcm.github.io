/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'pine-tree': '#2D2727',
      'onyx': '#413543',
      'lavander-indigo': '#8F43EE',
      'khaki': '#F0EB8D',
      'light-silver': '#D2D8D8',
    },
    fontFamily: {
      'fira': ['"Fira Code"', 'sans-serif'],
      'lato': ['Lato', 'arial']
    },
    extend: {},
  },
  plugins: [],
}

