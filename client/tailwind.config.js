/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        light: "#FBFBFB",
        dark: "#3A3A3A",
        cream1: "#F9F1E7",
        cream2: "#FCF8F3",
      },
      backgroundColor: {
        light: "#FBFBFB",
        dark: "#3A3A3A",
        cream1: "#F9F1E7",
        cream2: "#FCF8F3",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
