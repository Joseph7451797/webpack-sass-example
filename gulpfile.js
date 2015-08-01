'use strict'

var gulp = require('gulp')
var del = require('del')
var livereload = require('gulp-livereload')
var webpack = require('webpack')
var WebpackServer = require('webpack-dev-server')


gulp.task('clean', function(done) {
  del(['./js/build/*', '.tmp'], done)
})


gulp.task('watch', ['clean'], function() {
  var compiler = webpack(require('./webpack.config.js'))

  var server = new WebpackServer(compiler, {
    hot: true,
    contentBase: __dirname,
    publicPath: '/js/build/',
  })

  server.listen(8080)
})


gulp.task('live', ['watch'], function() {
  // 建立即時重整伺服器
  livereload.listen()

  // 看守所有位在 / 目錄下的檔案，一旦有更動，便進行重整
  gulp.watch(['./**', '!./node_modules/**']).on('change', livereload.reload)
})


gulp.task('build', ['clean'], function(done) {
  webpack(require('./webpack.build.config.js')).run(function(err, stats) {
    if (err) throw err
    done()
  })
})


gulp.task('default', ['watch'])