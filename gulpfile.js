'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var browserify = require('gulp-browserify');

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
          	//insertGlobals : true,
          	debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist/scripts'))
});


/*

gulp.task('move', function() {
	
});*/

/*
gulp.task('default', function(cb) {
plugins.runSequence([ 'clean', 'lint', 'templatecache' ],
                    [ 'bower:all', 'modernizr' ],
                    'test:all', 'move:all', 'inject', 'run:server', 'watch', cb);
});*/