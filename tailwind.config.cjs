/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_primary: '#E1EAFF',
        bg_secondary: '#0081e9',
        txt_primary: '#86c129',
        txt_secondary: '#003393',
        white: '#ffffff',
        

        // bgprimary>#899dc9
        // bgsecondary>#0081e9
        // txtprimary> #86c129
        // txtsecondary>#003393
      },
    },
  },
  plugins: [],
});
