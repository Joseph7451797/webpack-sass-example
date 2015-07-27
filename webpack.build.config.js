'use strict'

var webpack = require('webpack')
var path = require('path')

var options = {
  debug: false,
  entry: {
    app: [
        "./js/test.js",
        "./scss/screen.scss"
    ]
  },
  output: {
    path: __dirname + '/.tmp/assets/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
        test   : /\.less$/,
        loader : 'style-loader!css-loader!less-loader' 
      },
      {
        test   : /.scss$/,
        loader : 
           'style-loader!css-loader!sass-loader?includePaths[]=' 
            + path.resolve(__dirname, './node_modules/compass-mixins/lib')
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin('init.js')
  ]
}

module.exports = options
