/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      blackOpsOne: ["Black Ops One", "cursive", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      mochiyPopOne: ["Mochiy Pop One", "sans-serif"],
      rubikIso: ["Rubik Iso", "cursive", "sans-serif"],
    },
  },
  plugins: [],
};
