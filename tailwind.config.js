/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        baiJamjuree: "'Bai Jamjuree', sans-serif",
      },
      backgroundImage: {
        heroDesktop: "url('../assets/bg-header-desktop.png')",
        heroMobile: "url('../assets/bg-header-mobile.png')",
      },
      screens: {
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
