/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./../**/*.{html,css,js",
  ],
  theme: {
    screens: {

      'xs' :'350px',
      // => @media (min-width: 350px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors :{
      "brand-red": "#A91D54",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      aspectRatio: {
        '16/9': '960 / 540',
      },
      fontSize:{
        '2xl+': ['28px', '34px'],
        '4xl+': ['36px', '40px'],
      },
      fontFamily: {
        'hm-sans': ['HM Sans Regular', 'sans-serif'],
      },
      backgroundImage: {
        'stamp-05': "url('./assets/img/stamp-05.webp')",
        'perks-1': "url('./assets/perks-img/perks-1.webp')",
        'hero-img': "url('./assets/img/hero-img2.webp')",
        'hero-img1': "url('./assets/banner/marketing-management-banner.webp')",
        'grid-img': "url('./assets/img/grid-img.webp')",
      },
      backgroundColor:{
        'modal-dark-fade':'rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
