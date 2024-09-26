/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bermuda: "#78dcca",
      amber: "#fcd34d",
      emerald: "#10b981",
      indigo: "#4f46e5",
    },

    extend: {},
  },
  plugins: ["flowbite/plugin"],
};
