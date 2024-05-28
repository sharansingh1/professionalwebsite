/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        aesthetic: ['AestheticRegular', 'sans-serif'],
        aestheticOTF: ['AestheticRegularOTF', 'sans-serif'],
        mirageBlack: ['MADEMirageBlack', 'sans-serif'],
        mirageBold: ['MADEMirageBold', 'sans-serif'],
        mirageMedium: ['MADEMirageMedium', 'sans-serif'],
        mirageRegular: ['MADEMirageRegular', 'sans-serif'],
        mirageThin: ['MADEMirageThin', 'sans-serif'],
        poiret: ['PoiretOne', 'sans-serif'],
        belina: ['Belina', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
