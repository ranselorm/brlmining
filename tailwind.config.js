/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#79523a",
        secondary: "#cba809",
        gray: "#f2f2f2",
        deep: "#e6e6e6",
        accent: "#212135",
      },
      backgroundImage: {
        "radial-custom":
          "radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)",
      },
    },
  },
  plugins: [],
};
