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
        tosca: "#2EC1AC",
        darkBlue: "#2d354b",
        lightBlue: "#23A6F0",
      },
      backgroundColor: {
        light: "#FBFBFB",
        dark: "#3A3A3A",
        cream1: "#F9F1E7",
        cream2: "#FCF8F3",
        tosca: "#2EC1AC",
        adminBg: "#F5F7FA",
        darkBlue: "#2d354b",
        lightBlue: "#23A6F0",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
