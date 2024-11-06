/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#0067FF",
        yellowColor:"#FFEB60",
        purppleColor:"#9771FF",
        irisBlueColor:"#01B5C5",
        headingColor:"#181A1E",
        textColor:"#4E545F"
        


      },
      boxShadow:{
        panelShadow: "rgba(17, 12, 46, 0.15)"
      }
    },
  },
  plugins: [],
}

