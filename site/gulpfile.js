const gulp = require('gulp');
const browserSync = require('browser-sync');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass');
const server = browserSync.create();

const paths = {
  html: {
    src: [ '**/*.html', '!node_modules', '!node_modules/**', '!dist/**'],
    dest: 'dist/'
  },
  sass: {
    src: ['*.scss'],
    dest: 'dist/'
  }
};

function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
}

function reload(done) {
  server.reload();
  done();
}

function fileInclude() {
  return gulp.src(['server/template.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './'
    }))
    .pipe(gulp.dest(paths.html.dest + 'server'));
}

function style () {
  return gulp.src('./*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
}

function serve(done) {
  server.init({
    injectChanges: true,
    server: {
      baseDir: './dist'
    },
    index: 'server/template.html'
  });
  done();
}

const watch = () => gulp.watch(paths.html.src, gulp.series(html, fileInclude, reload));
const sassWatch = () => gulp.watch(paths.sass.src, gulp.series(style, reload));

const dev = gulp.series(html, fileInclude, style, serve, sassWatch, watch);
exports.default = dev;