var path = require('path');
var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(options) {
	var entry = {
		main: [
			"./js/test.js",
			"./scss/main.scss"
		]
	};

	var output = {
		publicPath: (options.devMode) ? "http://localhost:8080/build/" : "/build/",
		path: __dirname + "/build/",
		filename: "[name].js"
	};

	var module = {
		loaders: [
			{
				test : /\.(woff|ttf|svg|eot|jpg|png|git|gif)$/, 
				loader: 'url-loader?limit=8192'
			},
			// {	test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
			// 	loader: "imports?this=>window!exports?window.Modernizr" 
			// },
			{
  				test   : /.scss$/,
  				loader : ExtractTextPlugin.extract(
  					'style-loader',
  					'css-loader!sass-loader?includePaths[]=' 
  			      + path.resolve(__dirname, './node_modules/compass-mixins/lib')
  			    )
  			}
		]
	};


	var plugins = [

		new webpack.ProvidePlugin({
	        $: 'jquery',
	        jQuery: 'jquery',
	        'window.jQuery': 'jquery',
	        'root.jQuery': 'jquery'
		}),
		new ExtractTextPlugin('./[name].css')
	];


	if(options.build) {
		plugins.push(
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.AggressiveMergingPlugin(),
			new webpack.optimize.UglifyJsPlugin({
			    compress: {
			        warnings: false
			    }
			})
		);
	}else if(options.devMode) {
		plugins.push(
			new webpack.NoErrorsPlugin()
		);
	}


	return {
		debug: options.debug,
		devtool: options.devtool,
		entry: entry,
		output: output,
		module: module,
		resolve: {
			alias: {
				"jquery": bower_dir + '/jquery/dist/jquery.min.js',
				"ui-core": bower_dir + '/jquery-ui/ui/core.js',
				"ui-widget": bower_dir + '/jquery-ui/ui/widget.js',
				"ui-position": bower_dir + '/jquery-ui/ui/position.js',
				"ui-menu": bower_dir + '/jquery-ui/ui/menu.js',
				"ui-autocomplete": bower_dir + '/jquery-ui/ui/autocomplete.js'
			}
		},
		plugins: plugins
	}
	
};