'use strict';

const gulp = require('gulp'),
	config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('clean', require('del').bind(null, config.path.clean));