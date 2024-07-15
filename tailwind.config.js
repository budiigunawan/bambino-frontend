/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "b-blue": "#6667AA",
        "b-pink": "#FFACB7",
        "b-gray": { light: "#D9D9D9", dark: "#7D7D7D" },
      },
      fontFamily: {
        plus: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
