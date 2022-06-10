module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'yellow-green': 'linear-gradient(rgba(163, 251, 107, 0.6), rgba(163, 251, 107, 0.6) 0.01%, rgba(229, 251, 107, 0.6))'
      },
       height: {
         '1/2-screen': '50vh'
       },
       width: {
          'textBox': '576px'
       },
       fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Caveat': ['Caveat', 'sans-serif'],
       }
     },
  },
  plugins: [],
}
