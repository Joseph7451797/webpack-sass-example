'use strict'

var webpack = require('webpack')
var path = require('path')

var config = {
	// addVendor: function (name, path) {
	//     this.resolve.alias[name] = path;
	//     this.module.noParse.push(new RegExp('^' + name + '$'));
	// },
	cache: true,
	debug: true,
	entry: [
			"webpack-dev-server/client?http://127.0.0.1:8080",
			"webpack/hot/only-dev-server",
			"./js/test.js",
			"./scss/screen.scss"
	],
	output: {
		path: __dirname + "/js/build/",
		publicPath: "/build/",
		filename: "[name].js"
	},
	stats: {
	  colors: true,
	  reasons: true
	},
	resolve :{alias: {}},
  	module: {
  		noParse: [],
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
	  new webpack.HotModuleReplacementPlugin(),
	  new webpack.optimize.CommonsChunkPlugin('init.js')
	]
};

module.exports = config;