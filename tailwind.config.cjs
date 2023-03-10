/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: { max: "1000px" },
        sm: { max: "500px", min: "100px" },
        lg: { max: "5000px", min: "1000px" },
      },
    },
  },
  plugins: [],
};
