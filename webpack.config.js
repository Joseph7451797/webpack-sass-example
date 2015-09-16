'use strict'

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var options = {
	cache: true,
	debug: true,
	devtool: 'eval',
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
		publicPath: "http://localhost:8080/build/",
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
		new ExtractTextPlugin('./[name].css')
	]
}

module.exports = options