'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');

gulp.task('test', function (done) {
  runSequence('mocha', done);
});

gulp.task('mocha', function () {
  return gulp.src('tests/server/**/*.test.server.js', {read: false})
    .pipe(mocha({reporter: 'nyan', timeout: '10000'}));
});
