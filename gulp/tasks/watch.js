'use strict';

const gulp = require('gulp'),
	config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('watch', ['connect'], function() {
	$.livereload.listen();

	// watch for changes
	gulp.watch(config.path.watch).on('change', $.livereload.changed);

	gulp.watch('app/styles/**/*.less', ['styles']);
	gulp.watch('bower.json', ['wiredep']);
});
