require('webpack')
require('weex-loader')
require('weex-vuex-loader')

var path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'main.we?entry=true')
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader', 'weex-vuex-loader?store']
      }
    ]
  }
}
