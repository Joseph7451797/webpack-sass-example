"use strict";
 
var express = require('express');
var http = require('http');
var webpack = require("webpack");
var webpackMiddleware = require("webpack-dev-middleware");
var webpackConfig = require("./webpack.config.js");
var webpackCompiler = webpack(webpackConfig);
var hmr = require("webpack-dev-hmr");
 
var app = express();
app.set('port', 3000);
 
app.use(webpackMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  watchDelay: 300,
  stats: {
    colors: true
  }
}));
 
var server = http.createServer(app);
server.on('listening', function(){
 
  console.log("Server is listening on port ", app.get('port'));
 
  hmr.listen(server, webpackCompiler);
 
}).on('close', function(){
 
  console.log('closing server');
 
  hmr.close();
 
});
 
module.exports = server;
