/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
      extend: {},
    },
    plugins: [
      function ({ addVariant }) {
        addVariant('max-sm', '@media (max-width: 639px)');
        addVariant('max-md', '@media (max-width: 767px)');
        addVariant('max-lg', '@media (max-width: 1023px)');
      },
    ],
  };
  