/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vfilms-orange': '#FF6B35',
        'vfilms-dark': '#2C2C2C',
        'vfilms-light': '#FFF8F0',
      },
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'sm': '720px',
        'md': '1080px',
        'lg': '1440px',
        'xl': '2732px',
      },
    },
  },
  plugins: [],
}

