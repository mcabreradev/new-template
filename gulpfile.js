'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var $bower = 'bower_components/';

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('init', function() {
  gulp.src([
    $bower + 'jquery/dist/jquery.min.js',
    $bower + 'underscore/underscore-min.js',
    $bower + 'underscore.string/dist/underscore.string.min.js'
    ])
  .pipe(gulp.dest('src/assets/js/vendors'))
  .on('error', handleError)
  .pipe($.size());

  gulp.src([
    $bower + 'basscss/css/basscss.css',
    $bower + 'fontawesome/css/font-awesome.min.css'
    ])
  .pipe(gulp.dest('src/assets/css'))
  .on('error', handleError)
  .pipe($.size());

  gulp.src([
    $bower + 'fontawesome/fonts/*'
    ])
  .pipe(gulp.dest('src/assets/fonts'))
  .on('error', handleError)
  .pipe($.size());

});

gulp.task('styles', function() {
  gulp.src(['src/assets/css/*.css'])
  .pipe(gulp.dest('dist/assets/css'))
  .on('error', handleError)
  .pipe($.size());
});

gulp.task('jshint', function () {
  return gulp.src('src/scripts/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .on('error', handleError)
    .pipe($.size());
});

gulp.task('scripts', function() {
  gulp.src(['src/assets/js/*.js'])
  .pipe(gulp.dest('dist/assets/js'))
  .on('error', handleError)
  .pipe($.size());
});

gulp.task('images', function () {
  return gulp.src('src/assets/img/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/img'))
    .on('error', handleError)
    .pipe($.size());
});

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

gulp.task('misc', function () {
  return gulp.src('src/*.ico')
    .pipe(gulp.dest('dist'))
    .on('error', handleError)
    .pipe($.size());
});

gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .on('error', handleError)
    .pipe($.size());
});

gulp.task('clean', function (done) {
  $.del(['.tmp'], done);
});

gulp.task('connect', function() {
  $.connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe($.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('build', ['init', 'clean', 'styles', 'jshint', 'scripts', 'images', 'fonts', 'misc', 'html']);

gulp.task('serve', ['build','connect', 'watch']);