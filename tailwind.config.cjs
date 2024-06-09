/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_primary: '#f1f1f1',
        bg_secondary: '#6e3ee2',
        txt_primary: '#8039fe',
        txt_secondary: '#373737',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
});
