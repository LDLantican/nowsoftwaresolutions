/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Oswald"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          200: "hsl(337, 92%, 70%)",
          400: "hsl(337, 92%, 38%)",
        },
      },
    },
    screens: {
      md: "50em",
      // => @media (min-width: 50em) { ... }
    },
  },
  plugins: [],
};
