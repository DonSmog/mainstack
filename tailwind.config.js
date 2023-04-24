/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131316",
        secondary: "#4D5760",
        tertiary: "#FF5403",
        "gray-100": "#31373D",
        "pink-100": "#FFDDCD",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        border: "#eff1f6",
      },
    },
  },
  plugins: [],
};
