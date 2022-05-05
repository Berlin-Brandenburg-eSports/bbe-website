const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{ts,tsx,js,jsx}'),
    join(__dirname, 'components/**/*.{ts,tsx,js,jsx}'),
    join(__dirname, 'templates/**/*.{ts,tsx,js,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: {
          light: '#cc527a',
          DEFAULT: '#e8175d',
          dark: '#8b0e38',
        },
        gray: {
          dark: '#363636',
          light: '#474747',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
