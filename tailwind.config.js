/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dn-sans": ['"DN Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
