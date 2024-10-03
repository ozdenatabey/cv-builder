/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#373A40",
        header: "#DC5F00",
        border: "#686D76",
        base: "#EEEEEE",
      },
    },
    fontFamily: {
      sans: ["Quicksand", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
