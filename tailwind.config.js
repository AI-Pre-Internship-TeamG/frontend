/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sds: ['"SDSamliphopangche_Outline"'],
        melon: ['"116watermelon"'],
        bmjua: ['"BMJUA"'],
        myy: ['"MYYeongnamnu"'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
