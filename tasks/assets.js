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

gulp.task('assets', function() {

  // Vendors libs, copy and move an updated version from bower repository
  gulp.src([
    $bower + '/jquery/dist/jquery.min.js',
    $bower + '/jquery/dist/jquery.min.map',
    $bower + '/underscore/underscore-min.js',
    $bower + '/underscore.string/dist/underscore.string.min.js'
    ])
  .pipe(gulp.dest('src/assets/js/vendors'))
  .on('error', handleError)
  .pipe($.size());

  // Scripts Libraries (frameworks like Bootstrap, Foundation, Angular)
  gulp.src([
    $bower + '/foundation/js/foundation.js',
    $bower + '/foundation/js/foundation.min.js'
    ])
  .pipe(gulp.dest('src/assets/js'))
  .on('error', handleError)
  .pipe($.size());

  // Styles, copy and move an updated version from bower repository
  gulp.src([
    $bower + '/foundation/css/foundation.css',
    $bower + '/foundation/css/foundation.css.map',
    $bower + '/foundation/css/normalize.css',
    $bower + '/foundation/css/normalize.css.map',
    $bower + '/basscss/css/basscss.css',
    $bower + '/fontawesome/css/font-awesome.min.css'
    ])
  .pipe(gulp.dest('src/assets/css'))
  .on('error', handleError)
  .pipe($.size());

  // Font, updated version from bower repository
  gulp.src([
    $bower + '/fontawesome/fonts/*'
    ])
  .pipe(gulp.dest('src/assets/fonts'))
  .on('error', handleError)
  .pipe($.size());

});