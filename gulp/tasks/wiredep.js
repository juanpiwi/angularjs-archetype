// inject bower components
'use strict';

const gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    inject = require('gulp-inject'),
    config = require('../config');



gulp.task('wiredep', function() {
    let wiredep = require('wiredep').stream;
    let exclude = config.path.bower_exclude;

    gulp.src('app/styles/*.less')
        .pipe(wiredep())
        .pipe(gulp.dest(config.path.styles));

    gulp.src('app/*.html')
        .pipe(wiredep({
            exclude: exclude
        }))
        //.pipe(inject(gulp.src(['app/scripts/libs/*.js'], {read: false})))
        .pipe(gulp.dest('app'));

    gulp.src('test/*.js')
        .pipe(wiredep({
            exclude: exclude,
            devDependencies: true
        }))
        //.pipe(inject(gulp.src(['app/scripts/libs/*.js'], {read: false})))
        .pipe(gulp.dest('test'));
});
