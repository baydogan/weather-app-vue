module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'snow': "url('./img/snow.jpeg')",
        'clear': "url('./img/clear.jpg')",
        'rainy': "url('./img/rainy.jpeg')",
        'cold': "url('./img/cold.jpeg')",
        'hot': "url('./img/hot.jpeg')"
      },

      height: {
        '800': "800px"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
