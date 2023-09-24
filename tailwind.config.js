/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#BB9981',
        'green':'#10846F'
      },
    },
    fontFamily:{
      pacifico:['Pacifico']
    }
  },
  plugins: [],
}

