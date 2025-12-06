/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // <-- add this line
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        borderRun: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        goldPulse: {
          "0%": { opacity: 0.9, textShadow: "0 0 6px #facc15, 0 0 12px #facc15" },
          "50%": { opacity: 1, textShadow: "0 0 16px #ffd700, 0 0 28px #facc15" },
          "100%": { opacity: 0.9, textShadow: "0 0 6px #facc15, 0 0 12px #facc15" }
        }
      },
      animation: {
        borderRun: "borderRun 2s linear 1",
        goldPulse: "goldPulse 1.2s ease-in-out infinite alternate"
      },
    },
  },
  plugins: [],
};
