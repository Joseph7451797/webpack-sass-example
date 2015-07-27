'use strict'

var gulp = require('gulp')
var usemin = require('gulp-usemin')
var rev = require('gulp-rev')
var uglify = require('gulp-uglify')
var del = require('del')

var webpack = require('webpack')
var WebpackServer = require('webpack-dev-server')

gulp.task('clean', function(done) {
  del(['./js/build/*', '.tmp'], done)
})

// not finish yet
gulp.task('assets', function() {
  return gulp.src('app/index.html')
    .pipe(usemin({
      js: [rev(),uglify()]
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function() {
  var compiler = webpack(require('./webpack.config.js'))

  var server = new WebpackServer(compiler, {
    hot: true,
    contentBase: __dirname + '/js/',
    publicPath: '/build',
    filename: 'main.js'
  })

  server.listen(8080)
})

gulp.task('build', ['clean'], function(done) {
  webpack(require('./webpack.build.config.js')).run(function(err, stats) {
    if (err) throw err
    gulp.start(['assets'])
    done()
  })
})

gulp.task('default', ['watch'])