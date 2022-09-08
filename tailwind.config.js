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
  },
  plugins: [],
};
