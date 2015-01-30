'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var $bower = 'bower_components';

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('jshint', function () {
  gulp.src('src/scripts/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .on('error', handleError)
    .pipe($.size());
});