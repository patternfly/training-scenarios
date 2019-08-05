const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


gulp.task('sass', function() {
    return gulp.src('.scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});

gulp.task('default', function() {
    var files = [
            './**/*'
        ];
    browserSync.init({
        files : files,
        proxy : 'localhost:3000',
        watchOptions : {
            ignored : 'node_modules/*',
            ignoreInitial : true
        }
    });
});

// compile scss into css
function style () {
    return gulp.src('./scss/*.scss').pipe(sass()).pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        injectChanges: true,
        server:"./app" 

    })
    gulp.watch('./scss/*.scss', style).on('change', browserSync.reload);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}
exports.style = style;
exports.watch = watch;