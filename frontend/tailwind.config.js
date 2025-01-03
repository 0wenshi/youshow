import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sansregular: ['"Alibaba PuHuiTi Regular"', 'sans-serif'],
        sansextrabold: ['"Alibaba PuHuiTi ExtraBold"', 'sans-serif'],
      },
    },
  },
  plugins: [aspectRatio],
};
