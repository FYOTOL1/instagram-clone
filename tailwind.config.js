/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        main: {
          50: "#F2F4F6",
          100: "#425265",
          200: "#232339",
          300: "#1B2530",
          400: "#0F171E",
        },
      },
    },
  },
  plugins: [],
};
