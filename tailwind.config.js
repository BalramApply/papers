/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    darkMode: 'class', // Enable class-based dark mode
  theme: {
  	extend: {}
  },
  plugins: [require("tailwindcss-animate")],
}

