'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
 
gulp.task('templateCache', function () {
  	return gulp.src('src/scripts/**/*.html')
    	.pipe(templateCache())
    	.pipe(gulp.dest('src/scripts'));
});

gulp.task('browserify', function() {
    // Single entry point to browserify 
    gulp.src('src/scripts/main.js')
        .pipe(browserify({
        	transform: ['babelify'],
          	debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('build', function(done) {
  runSequence([ 'templateCache' ],
                'browserify', done);
});

gulp.task('watch', function(){
   gulp.watch('./client/scripts/**/*.js', ['build']);
});
