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
        foreground: "hsl(var(--foreground))",
        content: "hsl(var(--content))",
        filter: "hsl(var(--filter))",
        "filter-hover": "hsl(var(--filter-hover))",
        completed: "hsl(var(--completed))",
        "check-background-from": "hsl(var(--check-background-from))",
        "check-background-to": "hsl(var(--check-background-to))",
      },
      backgroundImage: {
        header: "var(--background-image)",
      },
    },
  },
  plugins: [],
};
