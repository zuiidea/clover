var gulp = require('gulp')
var clean = require('gulp-clean')

gulp.task('copy', function() {
  return gulp.src(["dist/**/*.*","!dist/**/*.map"])
    .pipe(gulp.dest(''))
});

// // 清理
gulp.task('clean', function() {
  return gulp.src('static/**/*.*', {
      read: false
    })
    .pipe(clean())
});

gulp.task('default', function() {
  gulp.start('clean','copy')
});
