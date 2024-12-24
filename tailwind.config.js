/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      accent: "#A3CBDB",
      ig: "#E4405F",
      spotify: "#1ED760",
      sc: "#FF7700",
    },
    screens: {
      'mobile': '360px',
      'tablet': '768px',
      'desktop': '1366px',
    },
    extend: {},
  },
  plugins: [],
};
