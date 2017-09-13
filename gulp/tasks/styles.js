const gulp        = require('gulp');
const sass        = require('gulp-sass');
const sourcemaps  = require('gulp-sourcemaps');
const prefix      = require('gulp-autoprefixer');
const cssnano     = require('gulp-cssnano');
const browserSync = require('browser-sync');


/*
 * Compile files from _scss into both _site/assets (live injecting) & site (for future jekyll builds)
 */
const mainScss    = '_assets/_styles/main.scss';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoPrefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'ie 10']
};

gulp.task('sass', function() {
  return gulp.src([mainScss])
    .pipe(sourcemaps.init())
   .pipe(sass(sassOptions).on('error', sass.logError))
   .pipe(prefix(autoPrefixerOptions, { cascade: true }))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('_site/assets/styles/'))
   .pipe(browserSync.reload({ stream: true }))
   .pipe(gulp.dest('assets/styles/'));
});



/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */

var sassProdOptions = {
  errLogToConsole: true,
  outputStyle: 'compact'
};

gulp.task('sass-prod', function () {
  return gulp.src(mainScss)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(prefix(autoPrefixerOptions, { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets/styles/'))
    .pipe(gulp.dest('assets/styles/'));
});
