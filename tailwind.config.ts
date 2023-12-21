import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // MEDIA SCREENS
    screens: {
      preSm: '320px',
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
    },
    extend: {
      // FONTS
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        karantina: ['Karantina', 'sans-serif'],
      },

      // COLORS
      colors: {
        white: '#fff',
        red: '#FF5757',
        gray: {
          light: 'rgba(255, 255, 255, 0.05)',
          middle: 'rgba(255, 255, 255, 0.10)',
          strong: 'rgba(255, 255, 255, 0.20)',
        },
        overlay: {
          light: 'rgba(2, 15, 8, 0.50)',
          strong: 'rgba(2, 15, 8, 0.75)',
          burger: 'rgba(1, 10, 5, 0.75)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
export default config;
