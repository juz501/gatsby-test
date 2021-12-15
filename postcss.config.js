module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.GATSBY_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
