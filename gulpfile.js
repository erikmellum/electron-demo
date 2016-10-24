var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

var jsSources = [
  'src/js/*.js',
];

var sassSources = [
  'sass/*.scss'
];

gulp.task('default', ['sass', 'js', 'watch'])

gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('js'))
  .pipe(livereload());
});

gulp.task('sass', function(){
  gulp.src(sassSources)
  .pipe(sass({style: 'expanded', lineNumbers: true}))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('css'))
  .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(['js/script.js','*.html'], function(e){
    server.changed(e.path);
  });
})
