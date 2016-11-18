var path = require('path');
var webpack = require('webpack');
var publicPath = '';
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function(options) {

    if(process.env.NODE_ENV === 'host') {
        publicPath = 'http://' + process.argv[8] + ':8080/build/';
    }else if(options.devMode) {
        publicPath = 'http://localhost:8080/build/';
    }else {
        publicPath = '/build/';
    }

    var entry = {
        main: [
            "./scss/main.scss"
        ]
    };

    var output = {
        publicPath: publicPath,
        path: __dirname + "/build/",
        filename: "[name].js"
    };

    var module = {
        loaders: [
        {
            test : /\.(woff|ttf|svg|eot|jpg|png|git|gif)$/,
            loader: 'url-loader?limit=8192'
        },
        {
            test   : /\.scss$/,
            loader :'style-loader!css-loader!sass-loader?includePaths[]='
                    + path.resolve(__dirname, './node_modules/compass-mixins/lib')
                    + '&includePaths[]='
                    + path.resolve(__dirname, './node_modules/breakpoint-sass/stylesheets')
        }
        ]
    };


    var plugins = [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        })
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
    }else if(options.devMode && !process.env.NODE_ENV) {
        plugins.push(
            new webpack.NoErrorsPlugin(),
            new BrowserSyncPlugin(
              // BrowserSync options
              {
                // browse to http://localhost:5000/ during development
                host: 'localhost',
                port: 5000,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:8080/)
                // through BrowserSync
                proxy: 'http://localhost:8080/',
                files: ["*.html"]
              },
              // plugin options
              {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
              }
            )
        );
    }


    return {
        debug: options.debug,
        devtool: options.devtool,
        entry: entry,
        output: output,
        module: module,
        plugins: plugins
    }

};
