import daisyui from 'daisyui'; // <-- Add this line at the top

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // <-- Change this line to use the variable
  daisyui: {
    themes: ["light", "dark", "synthwave"], // add more themes if you want
  },
}