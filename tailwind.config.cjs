/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2A414F",

          secondary: "#1C2B35",

          accent: "#e1f492",

          neutral: "#0E161A",

          "base-100": "#ffffff",

          info: "#95A0A7",

          success: "#4C2E00",

          warning: "#FF9900",

          error: "#995C00",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
