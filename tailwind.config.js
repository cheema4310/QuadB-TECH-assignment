/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightest: '#E6E6E6',
        lighter: '#B0B0B0',
        light: '#827d7d',
        dark: '#3D3D3D',
        darker: '#292929',
        darkest: '#1A1A1A',
        themeColor: '#AC885B',
      },
      fontFamily: {
        btn: ['Nunito', 'sans-serif'],
        modern: ['Exo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
