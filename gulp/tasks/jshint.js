'use strict';

const gulp = require('gulp'),
	config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('jshint', function() {
	return gulp.src(config.path.jshint)
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		//.pipe($.jshint.reporter('fail'));
});
