const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
    "formkit.config.ts",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        brand: ["'Erode'", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: colors.amber,
      },
    },
  },
};
