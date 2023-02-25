const packageInfo  = require('./package.json');
const path = require('path');

module.exports = {
  devServer: {
    port: 8885,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: {
    library: `${packageInfo.name}-[name]`,
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_${packageInfo.name}`,
    path: path.resolve(__dirname, './build/'),
  }
}
