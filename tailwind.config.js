/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./build/*.html", "./build/js/*.js"],
  content: ["./build/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: "#fef4e4",
          DEFAULT: "#ffefd5",
          dark: "#fee5bc",
        },
      },
      screens: {
        widescreen: {
          raw: "(min-aspect-ratio: 3/2)",
        }, // target wide screens (e.g., 16:9 or wider)
        tallscreen: {
          raw: "(max-aspect-ratio: 13/20)",
        }, // tall screens (e.g., 9:16 or taller)
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 500ms ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
