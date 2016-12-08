'use strict';

const gulp = require('gulp'),
	argv = require('yargs').argv,
	config = require('../config');

gulp.task('serve', ['wiredep', 'connect', 'fonts', 'watch'], function() {
	if (argv.open) {
		require('opn')(config.url + ':' + config.port);
	}
});
