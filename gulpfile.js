'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const jshint = require('gulp-jshint');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell')

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('lint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', shell.task([
  'npm test'
]));

gulp.task('build', ['sass', 'lint', 'test']);