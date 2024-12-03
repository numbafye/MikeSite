/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./index.html",
  ],
  theme: {
    colors: {
      primary: "#ff6f61",
      secondary: "#121212",
    },
    extend: {},
  },
  plugins: [],
};
