var 
  gulp   = require('gulp'),
  concat = require('gulp-concat')
;

gulp.task('scripts', function() {
  gulp.src(
    [
      'ang/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('web/js'))
  ;
  gulp.src(
    [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-route/angular-route.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('web/js'))
  ;
  gulp.src(
    [
      'bower_components/angular/angular.min.js.map',
      'bower_components/angular-route/angular-route.min.js.map'
    ])
    .pipe(gulp.dest('web/js'))
  ;
});

gulp.task('default', function() {
  
});