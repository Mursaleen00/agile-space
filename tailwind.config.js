/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: { default: "#0FA6A2", light: "#0FA6A20F" },
        "text-light": "#6B6681",
        gray: { default: "#C0C0C0", 800: "#28333E" },
        warning: "#FF6D6D",
        outline: "#E0DEEA",
        text: "#2C254B",
      },
    },
  },
  plugins: [],
};
