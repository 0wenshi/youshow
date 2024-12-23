/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sansregular: ['"Alibaba PuHuiTi Regular"', 'sans-serif'],
        sansextrabold: ['"Alibaba PuHuiTi ExtraBold"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
