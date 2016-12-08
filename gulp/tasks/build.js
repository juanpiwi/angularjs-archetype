'use strict';

const gulp = require('gulp'),
      gulpLoadPlugins = require('gulp-load-plugins'),
      config = require('../config');


let $ = gulpLoadPlugins();

gulp.task('builddist', ['jshint', 'html', 'images', 'fonts', 'extras'],
    function() {
        return gulp.src(config.path.dist).pipe($.size({
            title: 'build',
            gzip: true
        }));
    });


gulp.task('build', ['clean'], function() {
    gulp.start('builddist');
});
