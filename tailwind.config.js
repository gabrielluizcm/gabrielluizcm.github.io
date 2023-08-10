/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'pine-tree': '#2D2727',
      'onyx': '#413543',
      'lavander-indigo': '#8F43EE',
      'khaki': '#F0EB8D',
      'light-silver': '#D2D8D8',
      'faux-black': '#0A0A0A',
      'pale-beige': '#FFDBC3',
      'lavander': '#9F91CC',
      'deep-purple': '#5C4B99',
      'dark-purple': '#3D246C'
    },
    fontFamily: {
      'fira': ['"Fira Code"', 'sans-serif'],
      'lato': ['Lato', 'arial']
    },
    extend: {},
  },
  plugins: [],
}

