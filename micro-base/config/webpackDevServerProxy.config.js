module.exports = {
  '/api': {
    target: 'http://localhost:8080',
    pathRewrite: { '^/api': '' }
  }
}
