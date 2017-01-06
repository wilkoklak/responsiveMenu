const gulp = require('gulp');
const compass = require('gulp-compass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('default', () => {
	gulp.src('src/*.sass')
		.pipe(compass({
			css: 'dist/css',
			sass: 'src',
			task: 'watch'
		}))
		.pipe(gulp.dest('dist/css'))
})
