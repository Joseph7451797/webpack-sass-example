var path = require('path');
var webpack = require('webpack');
var MODE = '';

switch (process.env.NODE_ENV) { // decide mode
    case 'hot-dev':
        MODE = 'dev';
        break
    case 'host':
        MODE = 'host';
        break
    case 'build':
        MODE = 'build';
        break
    default:
        MODE = 'dev';
        break
}

module.exports = (function() {

    var publicPath = '';

    if( MODE === 'host' ) {
        publicPath = 'http://' + process.argv[6] + ':8080/build/';
    }else if( MODE === 'dev' ) {
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
        filename: "[name].js",
        path: __dirname + "/build/",
        publicPath: publicPath
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

    var plugins = [];

    if( MODE === 'build' ) {
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
    }else if( MODE === 'dev' ) {
        plugins.push(
            new webpack.NoErrorsPlugin()
        );
    }

    return {
        devtool: MODE === 'dev' || MODE === 'host' ? 'source-map' : false,
        entry: entry,
        output: output,
        module: module,
        plugins: plugins
    }
})();
