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

gulp.task('fonts', function () {
  gulp.src($.mainBowerFiles())
  .pipe($.filter('src/assets/fonts/**/*.{eot,svg,ttf,woff}'))
  .pipe($.flatten())
  .pipe(gulp.dest('dist/assets/fonts'))
  .on('error', handleError)
  .pipe($.size());

  gulp.src('src/assets/fonts/*')
  .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
  .pipe($.flatten())
  .pipe(gulp.dest('dist/assets/fonts'))
  .on('error', handleError)
  .pipe($.size());
});