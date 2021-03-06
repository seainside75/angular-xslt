var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    del    = require('del'),
    karma  = require('karma').server;

gulp.task('minify', function () {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return del('dist');
});

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun:  true
    }, done);
});

gulp.task('build', ['clean', 'minify']);

gulp.task('default', ['build']);
