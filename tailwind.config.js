module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'default': 'hsl(228, 66%, 53%)',
      'ultra-blue': 'hsl(228, 66%, 47%)',
      'lavandage': 'hsl(229, 96%, 91%)',
      'second': 'hsl(25, 83%, 53%)',
      'light-gray': 'hsl(0, 0%, 80%)',
      'sonic': 'hsl(0, 0%, 47%)',
      'blue-cray': 'hsl(228, 62%, 59%)',
      'culur': 'hsl(228, 26%, 96%)',
      'white1': ' hsl(228, 99%, 98%)',
      'white2': 'hsla(0, 0%, 100%, 0.9)'
     },
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '1/3': '1/2',
        '2/3': '2/3'

        // Complex site-specific row configuration
      },
      gridTemplateColumns: {
        'section1': '70% 30%',
        'section1.5': '60% 40%',
        'section2': '30% 10% 60%',
        'section2.5': '30% 30% 40%',
        "section3": '15% 35% 50%',
        "section4": '50% 20% 15% 15%'
      },
    },
  },
  plugins: [],
}
