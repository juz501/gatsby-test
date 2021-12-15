module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Chonburi', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        cPrimary: '#000000',
        cLightGray: '#E9E9EC',
        cGray: '#042533',
        cGrayHighlight: '#215369',
        cText: '#888888',
        cFooterBg: 'rgba(0, 0, 0, 0.2)',
      },
      container: {
        center: true,
      },
      width: {
        '2xl-circle': '960px',
        'xl-circle': '760px',
        content: '950px',
        'feature-md': '485px',
      },
      height: {
        '2xl-circle': '960px',
        'xl-circle': '760px',
      },
      boxShadow: {
        'input-focus': 'inset 0 0 0 0.25rem #EC5627',
      },
      screens: {
        'md-max': { max: '767px' },
        '2xl': '1800px',
      },
      fontSize: {
        paragraph: ['1.125rem', '1.75rem'],
        '7xl': '5rem',
      },
      lineHeight: {
        paragraph: '1.75rem',
      },
    },
  },
  plugins: [],
}
