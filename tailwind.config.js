const customColours = {
  brand: {
    DEFAULT: '#00f221',
    dark: '#198b22',
  },
}
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...customColours,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
