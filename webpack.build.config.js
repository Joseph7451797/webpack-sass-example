'use strict'

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var options = {
  debug: false,
  devtool: 'cheap-module-source-map',
  entry: {
    main: [
        "./scss/main.scss"
    ],
    index: [
    	"./js/test.js"
    ]
  },
  output: {
    path: __dirname + "/build/",
    publicPath: "/build/",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test : /\.(woff|ttf|svg|eot|jpg|png|git)$/, 
        loader: 'url-loader?limit=8192'
      },
      {
        test   : /.scss$/,
        loader : ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader?includePaths[]=' 
            + path.resolve(__dirname, './node_modules/compass-mixins/lib')
          )
      },
      { 
        test   : /\.less$/,
        loader : 'style-loader!css-loader!less-loader' 
      }
    ]
  },
  plugins: [
	new webpack.ProvidePlugin({
	  $: 'jquery',
	  jQuery: 'jquery',
	  'window.jQuery': 'jquery',
	  'root.jQuery': 'jquery'
	}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('./[name].css')
  ]
}

module.exports = options
