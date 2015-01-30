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

gulp.task('scripts', function() {

  gulp.src(['src/assets/js/*.js'])
  .pipe(gulp.dest('dist/assets/js'))
  .on('error', handleError)
  .pipe($.size());

  gulp.src(['src/assets/js/vendors/*'])
  .pipe(gulp.dest('dist/assets/js/vendors'))
  .on('error', handleError)
  .pipe($.size());

});