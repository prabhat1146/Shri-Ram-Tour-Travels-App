/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // ✅ this will scan all relevant files inside src/
    "./public/index.html"              // optional: useful if you're referencing Tailwind classes there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

