export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#01b71c",
          dark: "#01562c"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'angular-fill': 'conic-gradient(from 90deg, #000000 0%, #01562C 100%)',
      },
    }
  }
}