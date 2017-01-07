const gulp = require('gulp');
const compass = require('gulp-compass');
const CleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const watch = require('gulp-watch');

gulp.task('build', () => {
	gulp.src('src/*.sass')
		.pipe(compass({
			css: 'dist/',
			sass: 'src',
			require: 'sass-globbing'
		}))
		.pipe(gulp.dest('dist/'))
})
gulp.task('minify', () => {
	gulp.src('dist/*.css')
		.pipe(CleanCSS())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/minified'))
})

gulp.task('default', () => {
	gulp.watch('src/**/*.sass', ['build'])
	gulp.watch('dist/*.css', ['minify'])
});
