/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        "check-background-from": "hsl(var(--check-background-from))",
        "check-background-to": "hsl(var(--check-background-to))",
      },
      backgroundImage: {
        header: "var(--background-image)",
        check: "",
      },
    },
  },
  plugins: [],
};
