var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Dashboard = require('webpack-dashboard'); // load webpack-dashboard
var DashboardPlugin = require('webpack-dashboard/plugin'); // load webpack-dashboard plugin

// config required variables
var build_dirname = 'build';
var port = '8080';


module.exports = function(options) {
    var entry = {
        main: [
            "./scss/main.scss"
        ]
    };
    
    // if in hot-dev mode, add HMR js
    if( options.devMode ) {
        entry.main.push('webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:' + port + '/');
    }

    var output = {
        publicPath: options.devMode ? 'http://localhost:' + port + '/' + build_dirname + '/' : '/' + build_dirname + '/',
        path: __dirname + '/' + build_dirname + '/',
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
            loader : ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!sass-loader?includePaths[]='
                    + path.resolve(__dirname, './node_modules/compass-mixins/lib')
                    )
        }
        ]
    };

    // init webpack-dashboard plugin
    var dashboard = options.devMode || options.build ? new Dashboard() : null;

    var plugins = [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('./[name].css')
    ];


    if( options.build ) {
        plugins.push(
            new DashboardPlugin(dashboard.setData),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        );
    }else if( options.devMode ) {
        plugins.push(
            new DashboardPlugin(dashboard.setData),
            new webpack.NoErrorsPlugin(),
            new webpack.HotModuleReplacementPlugin()
        );
    }else if( options.hostMode ) {
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
                "jquery": __dirname + '/node_modules/jquery/dist/jquery.min.js'
            }
        },
        plugins: plugins
    }

};
