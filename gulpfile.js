// REQUIRES THE GULP.JS FRAMEWORK
var gulp = require('gulp');
// REQUIRES THE GULP-SASS PLUGIN
var sass = require('gulp-sass');

gulp.task('default', function() {
    // Add your tasks here
});
// TEST TASK
gulp.task('hello', function(){
    console.log('Goodmorning Dathan');
});
// RUN SASS ORIGINAL
/*
gulp.task('sass', function(){
    return gulp.src('scss/style.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('css/'))
  });*/

gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'))
});

// GULP WATCH

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});