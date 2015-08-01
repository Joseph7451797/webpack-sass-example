'use strict'

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var options = {
	cache: true,
	debug: true,
	entry: {
		main: [
			"webpack-dev-server/client?http://127.0.0.1:8080",
			"webpack/hot/only-dev-server",
			"./js/test.js",
			"./scss/screen.scss"
		]
	},
	output: {
		path: __dirname + "/js/build/",
		publicPath: "http://localhost:8080/js/build/",
		filename: "[name].js"
	},
	stats: {
	  colors: true,
	  reasons: true
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
	recordsPath: __dirname + '/build/[hash].hot-update.json',
	plugins: [
	  new webpack.HotModuleReplacementPlugin(),
	  // new webpack.optimize.CommonsChunkPlugin('init.js')
	  // new ExtractTextPlugin('[name].css')
	]
}

module.exports = options