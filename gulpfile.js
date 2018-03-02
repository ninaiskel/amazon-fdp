const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      watch = require('gulp-watch');

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('serve', function() {
  browserSync.init({
      server: "./public"
  });

  gulp.watch("src/scss/**/*.scss", ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("src/scss/main.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('/public/css/main.css', ['css']);
  gulp.watch('public/*.html', browserSync.reload);
});

gulp.task('default', ['sass', 'serve']);
