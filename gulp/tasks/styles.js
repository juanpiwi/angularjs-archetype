'use strict';

const gulp = require('gulp'),
    config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
	return gulp.src(config.path.less)
		.pipe($.plumber())
		.pipe($.less())
		.pipe($.autoprefixer({
			browsers: ['last 1 version']
		}))
		.pipe(gulp.dest('.tmp/styles'));
});