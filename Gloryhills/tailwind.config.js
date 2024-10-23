/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx, tsx, html}', // Include JSX files in src directory and its subdirectories
    './src/**/*.js',
    './public/index.html', // Include index.html file
  ],

  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/src/assets/hero-img.svg')",
       }),
       fontFamily: {
        customFont: ['"Custom Font"', "sans-serif"],
        // Add more custom font families as needed
      backgroundImage: {
        "background-0":
          "url(/assets/background-0.png)",
        "t-bg-ellipse-40ri-instagram-line":
          'url("/assets/Ellipse40.svg")',
      },
      },
    },
  },
  
  plugins: [],
}