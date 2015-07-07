var webpack = require('webpack');
var path = require('path');

var config = {
	// addVendor: function (name, path) {
	//     this.resolve.alias[name] = path;
	//     this.module.noParse.push(new RegExp('^' + name + '$'));
	// },
	entry: {
		app: ["./js/pages/pages.js"],
		vendors: ['jquery','jquery-validation']
	},
	resolve :{alias: {}},
	output: {
		path: "./build",
		publicPath: "/build/",
		filename: "[name].js",
	},
  	module: {
  		noParse: [],
  		loaders:[
  			{
  			  test   : /.scss$/,
  			  loader : 
  			     'style-loader!css-loader!sass-loader?includePaths[]=' 
  			      + path.resolve(__dirname, './node_modules/compass-mixins/lib')
  			},
  			{
  				// TODO
	            // I want to uglify with mangling only app files, not thirdparty libs
	            test: /.*\/app\/.*\.js$/,
	            // exclude: /.spec.js/, // excluding .spec files
	            loader: "uglify"
	        }
  		]
	},
	plugins: [
	    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	]
};

module.exports = config;