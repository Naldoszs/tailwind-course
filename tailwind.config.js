/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        widescreen: {
          raw: "(min-aspect-ratio: 3/2)",
        }, // target wide screens (e.g., 16:9 or wider)
        tallscreen: {
          raw: "(min-aspect-ratio: 13/20)",
        }, // tall screens (e.g., 9:16 or taller)
      },
    },
  },
  plugins: [],
};
