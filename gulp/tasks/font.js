'use strict';

const gulp = require('gulp'),
	config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('fonts', function() {
	return gulp.src(require('main-bower-files')().concat(config.path.custom_fonts).concat(config.path.bower_fonts))
		.pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
		.pipe($.flatten())
		.pipe(gulp.dest('dist/fonts'))
		.pipe(gulp.dest('.tmp/fonts'));
});