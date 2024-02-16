/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontPrimary: ['"Cormorant Garamond"', "serif"],
      fontSecondary: ['"Nunito Sans"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
