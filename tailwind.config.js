/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff8f3",
        secondary: "#36210f",
        card: "#f3ebe5",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        Satoshi: ["Satoshi", "sans-serif"],
        Gambetta: ["Gambetta", "system-ui"],
      },
      animation: {
        "scroll-right": "scrollLeft 30s linear infinite",
        "scroll-left": "scrollRight 30s linear infinite",
      },
      keyframes: {
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/social/')",
      },
    },
  },
  plugins: [],
};
