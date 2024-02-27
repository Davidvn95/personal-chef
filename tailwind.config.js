/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('/src/assets/hero-chef.png')",
      },
      colors: {
        "primary-color": "#dfa040",
        "secundary-color": "#1e1e1e",
      },
    },
  },
  plugins: [],
};
