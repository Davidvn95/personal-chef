/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('/src/assets/hero-chef.png')",
        "restaurant-section": "url('/src/assets/restaurants-bg.png')",
      },
      colors: {
        "primary-color": "#dfa040",
        "secundary-color": "#1e1e1e",
      },
      animation: {
        "slide-out-left": "slide-out-left 0.6s ease-out",
      },
      "slide-out-left": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-20px)",
        },
      },
    },
  },
  plugins: [],
};
