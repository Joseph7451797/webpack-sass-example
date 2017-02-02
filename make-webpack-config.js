var path = require('path');
var webpack = require('webpack');
var publicPath = '';

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
            test   : /\.s(a|c)ss$/,
            loader :'style-loader!css-loader?sourceMap!sass-loader?includePaths[]='
                    + path.resolve(__dirname, './node_modules/compass-mixins/lib')
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
                },
                comments: false
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
        plugins: plugins
    }

};
