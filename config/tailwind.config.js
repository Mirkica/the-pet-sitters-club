import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./public/*.html",
  "./app/helpers/**/*.rb",
  "./app/javascript/**/*.js",
  "./app/views/**/*.{erb,haml,html,slim}",
];
export const theme = {
  extend: {
    colors: {
      // Custom color theme
      "custom-green": "#bae681",
      "custom-red": "#d29293",
      "custom-pink": "#f46cb1",
      "custom-dark-pink": "#f047a7",
    },
    fontFamily: {
      sans: ["Inter var", ..._fontFamily.sans],
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  require("@tailwindcss/container-queries"),
];
