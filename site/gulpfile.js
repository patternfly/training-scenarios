const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


gulp.task('sass', function() {
    return gulp.src('.scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});

// compile scss into css
function style () {
    return gulp.src('./scss/*.scss').pipe(sass()).pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    })
    gulp.watch('./scss/*.scss', style);
    gulp.watch('./**/*.html', './*.html').on('change', browserSync.reload());
    gulp.watch('./js/**/*.js').on('change', browserSync.reload());

}
exports.style = style;
exports.watch = watch;