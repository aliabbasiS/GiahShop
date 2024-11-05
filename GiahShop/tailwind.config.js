/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#B7D9D6",
          2: "#9FCDC9",
          3: "#87C1BB",
          4: "#6FB4AD",
          5: "#57A7A0",
          6: "#3F9B92",
          7: "#278F85",
        },
        neutral: {
          1: "#417F56",
          2: "#396F4B",
          3: "#315F41",
          4: "#294F36",
          5: "#21402B",
          6: "#183020",
          7: "#102016",
        },
        state: {
          err: "#ED2E2E",
          bg_err: "#FFF2F2",
        },
      },
    },
    colors: defaultTheme.colors, // Include Tailwind's default colors
  },
  plugins: [],
};
