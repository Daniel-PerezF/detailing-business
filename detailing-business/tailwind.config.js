/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        anton: ["Anton SC", "sans-serif"],
        rubik: ["Rubik Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
