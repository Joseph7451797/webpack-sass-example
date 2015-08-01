'use strict'

var webpack = require('webpack')
var path = require('path')

var options = {
  debug: false,
  entry: {
    main: [
        "./js/test.js",
        "./scss/screen.scss"
    ]
  },
  output: {
    path: __dirname + "/js/build/",
    publicPath: "/build/",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test : /\.(woff|ttf|svg|eot|jpg|png|git)$/, 
        loader: 'url-loader?limit=8000'
      },
      {
        test   : /.scss$/,
        loader : 'style-loader!css-loader!sass-loader?includePaths[]=' 
            + path.resolve(__dirname, './node_modules/compass-mixins/lib')
      },
      { 
        test   : /\.less$/,
        loader : 'style-loader!css-loader!less-loader' 
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}

module.exports = options
