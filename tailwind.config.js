import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#10141E',
        greyishBlue: '#5A698F',
        semiDarkBlue: '#161D2F',
        red: '#FC4747',
      },
      fontFamily:{
        outfit : ['outfit']
      },
      keyframes: {
        scrolling : {
          "0%": { transform: 'translateX(1%)'},
          "100%": {transform: 'translateX(-100%)'}
        },
      },
      animation: {
        scrolling : 'scrolling 25s infinite linear',
      }
    },
  },
  plugins: [],
}

