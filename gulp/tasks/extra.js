'use strict';

const gulp = require('gulp'),
	config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('extras', function() {
	return gulp.src(config.path.extra, {
		dot: true
	}).pipe(gulp.dest('dist'));
});