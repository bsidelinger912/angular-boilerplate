'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

//var browserSync = require('browser-sync');
//var url = require('url');
 
gulp.task('templateCache', function () {
  	return gulp.src('src/scripts/**/*.html')
    	.pipe(templateCache({
        standalone: true
      }))
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

gulp.task('move:html', function(){
    return gulp.src('src/*.html')
          .pipe(gulp.dest('dist'));
});

gulp.task('build', function(done) {
  runSequence([ 'templateCache' ],
                ['browserify', 'move:html'], done);
});

gulp.task('watch', function(){
   gulp.watch('src/scripts/**/*.js', ['build']);
});

/*
gulp.task('browserSync', function() {

  var DEFAULT_FILE = 'index.html';
  var ASSET_EXTENSIONS = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif'];

  browserSync.init({
    server: {
      baseDir: config.buildDir,
      middleware: function(req, res, next) {
        var fileHrefArray = url.parse(req.url).href.split('.');
        var fileExtension = fileHrefArray[fileHrefArray.length - 1];

        if ( ASSET_EXTENSIONS.indexOf(fileExtension) === -1 ) {
          req.url = '/' + DEFAULT_FILE;
        }

        return next();
      }
    },
    port: 3000,
    ui: {
      port: 3001
    },
    ghostMode: {
      links: false
    }
  });

});*/

gulp.task('default', function(done){
    runSequence([ 'build' ],
                'watch', done);
});
