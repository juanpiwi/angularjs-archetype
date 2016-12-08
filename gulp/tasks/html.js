'use strict';

const gulp = require('gulp'),
	config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('html', ['styles'], function() {
	const lazypipe = require('lazypipe');
	let cssChannel = lazypipe()
		.pipe($.csso)
		.pipe($.replace, 'bower_components/bootstrap/fonts', 'fonts');

	var assets = $.useref({
		searchPath: '{.tmp,app}'
	});

	return gulp.src(config.path.html)
		.pipe(assets)
		.pipe($.if('*.js', $.ngAnnotate()))
		.pipe($.if('*.js', $.uglify()))
		.pipe($.if('*.css', cssChannel()))
		.pipe(assets)
		//.pipe($.useref())
		.pipe($.if('*.html', $.minifyHtml({
			conditionals: true,
			loose: true
		})))
		.pipe(gulp.dest('dist'));
});