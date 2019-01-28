'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/generated/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});


var connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');

gulp.task('serve', function() {
    connect.server({}, function() {
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });

    gulp.start("sass");
    gulp.watch('./sass/**/*.scss', ['sass']).on('change', function() {
        browserSync.reload();
    });
    gulp.watch('**/*.html').on('change', function() {
        browserSync.reload();
    });
});