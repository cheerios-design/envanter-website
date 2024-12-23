/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        p1: "#00296B", // Deep Blue - Headers, navigation bars, and key action areas
        p2: "#F57C00", // Bright Orange - CTAs and highlights
        p3: "#F5F5F5", // Soft Gray - Section dividers and cards
        p4: "#F4D35E", // Muted Yellow - Highlights and icons
        p5: "#00A896", // Cool Aqua - Hover effects and secondary buttons
        background: "#FFFFFF", // Neutral White - General background
        text: "#333333", // Neutral Grayish Black - Body text
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Roboto Slab", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
