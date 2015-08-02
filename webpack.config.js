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
			"webpack-dev-server/client?http://127.0.0.1:8080",
			"webpack/hot/only-dev-server",
			"./js/test.js",
			"./scss/main.scss"
		]
	},
	output: {
		path: __dirname + "/build/",
		publicPath: "http://localhost:8080/build/",
		filename: "[name].js"
	},
	// devServer: {
	// 	  contentBase: __dirname
	// },
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
	      	// {
        //         test: /\.html$/,
        //         name: "mandrillTemplates",
        //         loader: 'raw!html-minify'
	      	// }
	    ]
	},
	recordsPath: __dirname + '/dev-log/[hash].hot-update.json',
	plugins: [
	  new webpack.HotModuleReplacementPlugin(),
	  new ExtractTextPlugin('./main.css')
	]
}

module.exports = options