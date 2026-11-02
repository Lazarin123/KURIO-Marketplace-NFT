/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kurioBg: "#0D0B0A",
        kurioGold: "#D98E32",
        kurioText: "#E6D7C3",
        kurioCard: "#14100E",
        kurioBorder: "#261F1A"
      }
    },
  },
  plugins: [],
}