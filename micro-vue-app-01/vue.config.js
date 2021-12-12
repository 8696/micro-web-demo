const packageInfo  = require('./package');
module.exports = {
  devServer: {
    port: 8884,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${packageInfo.name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${packageInfo.name}`
    }
  },
  assetsDir: 'static',
  outputDir: 'build',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-app-01/'
    : '/'
}
