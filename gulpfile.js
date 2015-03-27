var 
  gulp     = require('gulp'),
  concat   = require('gulp-concat'),
  markdown = require('gulp-showdown')
;
var scriptFiles   = [ 'ang/app.js' ];
var markdownFiles = [ 'content/articles/*.md'];

var watchTask = function() 
{
  buildTask();
  
  gulp.watch(scriptFiles,  ['scripts' ]);
  gulp.watch(markdownFiles,['markdown']);
};
gulp.task('watch',watchTask);

var buildTask = function()
{
  scriptsTask();
  markdownTask();
};
gulp.task('build',buildTask);

var markdownTask = function() 
{
  gulp.src(markdownFiles)
    .pipe(markdown())
    .pipe(gulp.dest('web/articles'));
};
gulp.task('markdown',markdownTask);

var scriptsTask = function() 
{
  gulp.src(scriptFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('web/js'));
    
  gulp.src(
    [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-route/angular-route.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('web/js'));
    
  gulp.src(
    [
      'bower_components/angular/angular.min.js.map',
      'bower_components/angular-route/angular-route.min.js.map'
    ])
    .pipe(gulp.dest('web/js'));
};
gulp.task('scripts', scriptsTask);