/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwindcss-animate")],
};
