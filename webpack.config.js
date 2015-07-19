var webpack = require('webpack');
var path = require('path');

var config = {
	// addVendor: function (name, path) {
	//     this.resolve.alias[name] = path;
	//     this.module.noParse.push(new RegExp('^' + name + '$'));
	// },
	entry: {
    	app: [
			"webpack-dev-server/client?http://localhost:3000",
	    	"webpack/hot/dev-server",
			"./js/test.js"
			// "./js/allvars.js"
		]
		// vendors: [
		// 	'jquery'
		// ]
	},
	// devtool: "eval-source-map",
	// debug: true,
	output: {
		path: "./js/build",
		publicPath: "/build/",
		filename: "[name].js",
	},
	// plugins: [
	//     // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
	//     new webpack.HotModuleReplacementPlugin(),
	//     new webpack.NoErrorsPlugin()
	// ],
	resolve :{alias: {}},
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
	}
};

module.exports = config;