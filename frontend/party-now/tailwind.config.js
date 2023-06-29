/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-forza)", "sans-serif"],
      },
      keyframes: {
        ["spin-3d"]: {
          "0%": { transform: "rotate3d(0, 1, 0.5, 0deg)" },
          "50%": { transform: "rotate3d(0, 1, 0.5, 180deg)" },
          "100%": { transform: "rotate3d(0, 1, 0.5, 360deg)" },
        },
      },
      animation: {
        ["spin-3d"]: "spin-3d 10s linear infinite",
      },
    },
  },
  plugins: [],
};
