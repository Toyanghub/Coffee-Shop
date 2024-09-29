/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Files to scan for Tailwind CSS classes
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
    extend: {}, // Option to extend default theme
  },
  daisyui: {
    themes: [
      "light", // Default light theme
      "dark", // Dark mode
      "cupcake", // Cupcake theme
      "cyberpunk", // Cyberpunk theme
      "lofi", // Minimalist "lofi" theme
      "coffee", // Warm coffee theme
      "retro", // Retro-inspired theme
      "valentine", // Valentine-themed style
    ],
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin
    require("@tailwindcss/typography"), // Tailwind Typography plugin
  ],
};
