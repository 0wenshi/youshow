import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@chakra-ui/react/**/*.{js,ts,jsx,tsx}', // Include Chakra UI components
  ],
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
