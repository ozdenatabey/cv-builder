/** @type {import('tailwindcss').Config} */
import {
  headerColorList,
  primaryColorList,
  themeBorderListBase,
  themeBorderListBorder,
  themeBorderListHeader,
  themeBorderListPrimary,
  themeColorListBase,
  themeColorListBorder,
  themeColorListHeader,
  themeColorListPrimary,
  themeTextListBase,
  themeTextListBorder,
  themeTextListHeader,
  themeTextListPrimary,
  themeDecorationListBase,
  themeDecorationListBorder,
  themeDecorationListHeader,
  themeDecorationListPrimary,
} from "./src/data/themeConfig";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    `"${headerColorList}"` +
      `"${primaryColorList}"` +
      `"${themeColorListPrimary}"` +
      `"${themeColorListBase}"` +
      `"${themeColorListHeader}"` +
      `"${themeColorListBorder}"` +
      `"${themeTextListPrimary}"` +
      `"${themeTextListBase}"` +
      `"${themeTextListHeader}"` +
      `"${themeTextListBorder}"` +
      `"${themeBorderListPrimary}"` +
      `"${themeBorderListBase}"` +
      `"${themeBorderListHeader}"` +
      `"${themeBorderListBorder}"` +
      `"${themeDecorationListPrimary}"` +
      `"${themeDecorationListBase}"` +
      `"${themeDecorationListHeader}"` +
      `"${themeDecorationListBorder}"`,
  ],
  theme: {
    extend: {
      colors: {
        color1: {
          primary: "#373A40",
          header: "#DC5F00",
          border: "#686D76",
          base: "#EEEEEE",
        },

        color2: {
          primary: "#384B70",
          header: "#B8001F",
          border: "#507687",
          base: "#FCFAEE",
        },

        color3: {
          primary: "#4A4947",
          header: "#B17457",
          border: "#D8D2C2",
          base: "#FAF7F0",
        },
        color4: {
          primary: "#12372A",
          header: "#436850",
          border: "#ADBC9F",
          base: "#FBFADA",
        },
        color5: {
          primary: "#222831",
          header: "#00ADB5",
          border: "#393E46",
          base: "#EEEEEE",
        },
        color6: {
          primary: "#384B70",
          header: "#B8001F",
          border: "#507687",
          base: "#FCFAEE",
        },
        color7: {
          primary: "#440505",
          header: "#D90000",
          border: "#454545",
          base: "#D9D9D9",
        },
      },
    },
    fontFamily: {
      sans: ["Quicksand", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
