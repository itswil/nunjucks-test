var gulp = require('gulp');
var gulpWatch = require('gulp-watch');
var nunjucksRender = require('gulp-nunjucks-render');

nunjucksRender.nunjucks.configure(['templates/']);

// gulp
gulp.task('default', function () {

    // this is the path to the HTML files
    gulp.src('templates/site-pages/*.html')
        .pipe(nunjucksRender())
        .pipe(gulp.dest('dist')); // output location

});

// gulp watch
gulp.task('watch', function () {

    gulp.src('templates/site-pages/*.html')
        .pipe(gulpWatch('templates/site-pages/*.html', function(files) {
            return files
                .pipe(nunjucksRender())
                .pipe(gulp.dest('dist'));
        }));
});
