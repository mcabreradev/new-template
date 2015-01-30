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

gulp.task('styles', function() {
  gulp.src(['src/assets/css/*'])
  .pipe(gulp.dest('dist/assets/css'))
  .on('error', handleError)
  .pipe($.size());
});