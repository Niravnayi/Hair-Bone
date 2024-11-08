/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff8f3",
        secondary: "#36210f",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        Satoshi: ["Satoshi", "sans-serif"],
        Gambetta: ["Gambetta", "system-ui"],

      },
      
    },
  },
  plugins: [],
};


