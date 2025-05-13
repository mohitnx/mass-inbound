/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          white: '#FFFFFF',
          temp: "#FF0000",
        },
        fontSize: {
          'xs': '16px',
          'sm': '20px',
          'base': '25px',
          'lg': '31px',
          'xl': '49px',
        },
        fontFamily: {
          'sans': ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }