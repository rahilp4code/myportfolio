/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        "bg-deep": "#050509",
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(255,255,255,0.08)",
        "card": "0 18px 45px rgba(0,0,0,0.65)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
