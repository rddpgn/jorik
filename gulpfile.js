'use strict'

let gulp =          require('gulp');
let sass =          require('gulp-sass');
let browserSync =   require('browser-sync');
let cleanCSS =      require('gulp-clean-css');
let rename =        require('gulp-rename');

gulp.task('sass', gulp.series(function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream())
}))

gulp.task('serve', gulp.series('sass', function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch('./src/scss/**/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/*.html').on('change', browserSync.reload);
  })
);

gulp.task('minifyCss', gulp.series(function() {
    return gulp.src('./src/css/style.css')
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./build/css'));
}));

gulp.task('copyHtml', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build/'));
});

gulp.task('copyImages', function () {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./build/images/'));
});

gulp.task('copyIcons', function () {
    return gulp.src('./src/icons/**/*')
        .pipe(gulp.dest('./build/icons/'));
});

gulp.task('build', gulp.series('minifyCss', 'copyHtml', 'copyImages', 'copyIcons'));