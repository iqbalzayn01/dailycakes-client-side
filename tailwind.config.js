/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontHeading: ['"Cormorant Garamond"', "serif"],
      fontParagraph: ['"Nunito Sans"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
