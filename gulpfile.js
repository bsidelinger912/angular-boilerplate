'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var url = require('url');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
 
gulp.task('templateCache', function () {
  	return gulp.src('src/scripts/**/*.html')
    	.pipe(templateCache({
        standalone: true
      }))
    	.pipe(gulp.dest('src/scripts'))
      .pipe(browserSync.stream());
});

gulp.task('browserify', function() {
    // Single entry point to browserify 
    gulp.src('src/scripts/main.js')
        .pipe(browserify({
        	transform: ['babelify'],
          	debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(browserSync.stream());
});

gulp.task('move:html', function(){
    return gulp.src('src/*.html')
          .pipe(gulp.dest('dist'))
          .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'browserify', 'templateCache', 'move:html'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/**/*.scss", ['sass']);
    gulp.watch('src/scripts/**/*.html', ['templateCache']);
    gulp.watch('src/*.html', ['move:html']);
    gulp.watch('src/scripts/**/*.js', ['browserify']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});


gulp.task('default', function(done){
    runSequence('serve', done);
});
