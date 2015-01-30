'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var $bower = 'bower_components/',
    $root = 'src',
    $port = 8888;

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('connect', function() {
  $.connect.server({
    root: $root,
    port: $port,
    livereload: true
  });
});

gulp.task('markup', function () {
  gulp.src('./src/*.html')
    .pipe($.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['markup']);
});

gulp.task('serve', ['connect', 'watch']);