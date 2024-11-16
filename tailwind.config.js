/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'violet-red': '#fbd0d9',
        'cerise-red': '#f27a93',
        'comp-header': '#801b40',
        'port-header': '#470a1f',
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '8xl': '6rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
