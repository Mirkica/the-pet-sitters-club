/** @type {import('tailwindcss').Config} */

export const content = [
  "./public/*.html",
  "./app/helpers/**/*.rb",
  "./app/javascript/**/*.js",
  "./app/views/**/*.{erb,haml,html,slim}",
];
export const theme = {
  extend: {
    colors: {
      "custom-orange": "#FF914D",
      "custom-orange-pink": "#FDB6A6",
      "custom-blue": "#D4DEE7",
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  require("@tailwindcss/container-queries"),
];
