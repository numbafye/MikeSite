/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scans all your JSX files
  theme: {
    extend: {
      colors: {
        primary: "#ff6f61",
        secondary: "#121212",
      },
    },
  },
  plugins: [],
};

