module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '75': '75%',
    },
    inset: {
      '0': 0,
    },
    extend: {
      translate: {
        '1/2': '50%',
       },
      fontFamily: {
        'receipt': ['"Dot Matrix"', '"Merriweather"', '"Zen Kaku Gothic Antique"',],
        'logo': ['Dosis'],
        'oswald': ['Oswald'],
      },
      backgroundImage: {
        'paper': "url('https://image.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg')",
      },
      inset: {
        '25': '25px',
        '-21': '-21px',
        '15': '15px',
        '27':'27px',
        '25':'25px',
        '18': '18px',
        '12': '12px',
        '32': '32px',
        '1/2': '50%',
        '4': '4%',
      },
      transitionProperty: {
        '.5s': '.5s, margin-left',
      }
    },
    padding: {
      xsm: '8px',
      sm: '10px',
      xmd: '15px',
      md: '32px',
      lg: '60px',
      '36': '4rem',
      '2': '0.5rem',
      '28': '7rem',
      '8': '8rem',
      '16': '3.5rem',
      '9': '2rem',
      '4': '1rem',
      '20': '20px',
      '0.1': '0.1rem',
      '0.2': '0.2rem',
      '0.3': '0.3rem',
      'six': '16px',
    },
    zIndex: {
      '1': 1,
      '30': 30,
      '10': 10,
      '20': 20,
    },
    spacing: {
      sm: '17px',
      md: '38px',
      lg: '50px',
      xlg: '3%',
      xxl: '15%',
      ssm: '8px',
      xmd: '48px',
      xxxl: '72px',
      mmd: '40px',
      '8': '2rem',
      '9': '2.25rem',
      '40': '10.25rem',
      '6': '1.5rem',
      '75': '75px',
      '28': '7rem',
      '12': '3rem',
      '1': '1rem',
      '0.2': '0.2rem',
      '16': '16px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
          'header': '#fff7f2',
          'notblack': '#1c1916',
          'logo': '#282320',
          'beige': '#282320',
          'white': '#fff',
          'red': '#e53e3e',
          'maroon': '#b91c1c',
     }),
    placeholderColor: theme => theme('colors'),
      placeholderColor: {
      'logo': '#282320',
      'notblack': '#1c1916',
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'notblack': '#1c1916',
      'logo': '#282320',
    }),
    colors: {
      header: '#fff7f2',
        notblack: '#1c1916',
        logo: '#282320',
        beige: '#282320',
        white: '#fff',
    },
    textColor: theme => theme('colors'),
    textColor: {
      'white': '#fff',
      
    },
    maxWidth: {
      'prdt': '15rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
