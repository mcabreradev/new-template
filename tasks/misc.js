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

gulp.task('misc', function () {
  return gulp.src('src/*.ico')
    .pipe(gulp.dest('dist'))
    .on('error', handleError)
    .pipe($.size());
});