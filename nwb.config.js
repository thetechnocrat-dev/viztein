module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Viztein',
      externals: {
        react: 'React'
      }
    }
  }
}
