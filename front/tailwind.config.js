/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'celesteValtech':'#0BA4A0',
      },
      height: {
        '128': '32rem',
        '68':'17.rem'
      }
    },
  },
  plugins: [],
}
