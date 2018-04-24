/// <binding Clean='default' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var webstandards = require('gulp-webstandards');

var input = './scss/main.scss';
var inputSCSS = './scss/**/*.scss';
var output = './css';
var baseDirServe = './';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
}

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: baseDirServe
        },
        ui: {
            port: 9090
        },
        port: 9091
    });

    //gulp.watch(gulp.series('./img/*.*', './img/**/*.*'));
    gulp.watch(inputSCSS, gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename('main.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(output));
});

gulp.task('webstandards', function() {
    return gulp.src(output)
        pipe(webstandards());
});

gulp.task('watch', function() {
    return gulp
        // Watch the input folder for change,
        // and run 'sass' task when something happens
        .watch(inputSCSS, gulp.series('sass'))
        // When there is a change
        // log a message in the console
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('default', gulp.parallel('sass', 'webstandards', 'watch', 'serve'));