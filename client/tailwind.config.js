/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green1: "#118B50",
        green2: "#5DB996",
        green3: "#E3F0AF",
        green4: "#FBF6E9",
      },
    },
  },
  plugins: [],
};
