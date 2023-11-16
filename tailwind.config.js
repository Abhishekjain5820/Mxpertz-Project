/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "custom-width": "200px", // Replace with your custom width
        "custom-height": "450px", // Replace with your custom height
      },
    },
  },
  plugins: [],
};
