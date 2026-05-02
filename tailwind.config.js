export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {

      colors:{
        dark:"#0B0C0C",
        darkSoft:"#121414",
        accent:"#8FAF93"
      },

      fontFamily:{
        heading:["Playfair Display","serif"],
        body:["Inter","sans-serif"]
      }

    }
  },
  plugins:[]
}