var gulp = require('gulp');
var gulpWatch = require('gulp-watch');
var nunjucksRender = require('gulp-nunjucks-render');

nunjucksRender.nunjucks.configure(['templates/']);

// gulp
gulp.task('default', function () {

    // this is the path to the HTML files
    gulp.src('templates/components/*.html')
        .pipe(nunjucksRender())

        // rendered static HTML files are output here
        .pipe(gulp.dest('dist'));

});

// gulp watch
gulp.task('watch', function () {

    gulp.src('templates/components/*.html')
        .pipe(gulpWatch('templates/components/*.html', function(files) {
            return files
                .pipe(nunjucksRender())
                .pipe(gulp.dest('dist'));
        }));
});
