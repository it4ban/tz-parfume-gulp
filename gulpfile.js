const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const webpack = require('webpack-stream');

const fileIncludeSettings = {
	prefix: '@@',
	basepath: '@file',
};

const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: 'Error: <%= error.message %>',
			sound: false,
		}),
	};
};

gulp.task('clean', function () {
	return gulp.src('./dist', { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task('html', function () {
	return gulp
		.src('./src/*.html')
		.pipe(plumber(plumberNotify('HTML')))
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
	return gulp
		.src('./src/scripts/*.ts')
		.pipe(plumber(plumberNotify('TS')))
		.pipe(webpack(require('./webpack.config.js', webpack)))
		.pipe(gulp.dest('./dist/scripts'))
		.pipe(browserSync.stream());
});

gulp.task('sass', function () {
	return gulp
		.src('./src/scss/*.scss')
		.pipe(plumber(plumberNotify('SCSS')))
		.pipe(sourceMaps.init())
		.pipe(sass())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('images', function () {
	return gulp.src('./src/img/**/*', { encoding: false }).pipe(gulp.dest('./dist/img'));
});

gulp.task('fonts', function () {
	return gulp.src('./src/fonts/**/*', { encoding: false }).pipe(gulp.dest('./dist/fonts'));
});

gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: './dist',
		},
		open: true,
	});
});

gulp.task('watch', function () {
	gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('./src/**/*.html', gulp.parallel('html')).on('change', browserSync.reload);
	gulp.watch('./src/img/**/*', gulp.parallel('images')).on('change', browserSync.reload);
	gulp.watch('./src/fonts/**/*', gulp.parallel('fonts')).on('change', browserSync.reload);
	gulp.watch('./src/scripts/**/*.ts', gulp.parallel('js'));
});

gulp.task(
	'default',
	gulp.series(
		'clean',
		gulp.parallel('html', 'sass', 'images', 'fonts', 'js'),
		gulp.parallel('server', 'watch'),
	),
);
