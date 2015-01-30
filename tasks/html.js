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

gulp.task('html', function() {
  gulp.src(['src/*.html', 'src/**/*.html'])
  .pipe(gulp.dest('dist'))
  .on('error', handleError)
  .pipe($.size());
});