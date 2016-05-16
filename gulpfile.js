var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
// var historyApiFallback = require('connect-history-api-fallback');

gulp.task('webserver', function() {
    connect.server({
        root: './',
        hostname: '0.0.0.0',
        port: 9000,
        livereload: true//,
        // middleware: function(connect, opt) {
        //   return [ historyApiFallback ];
        // }
    });
});
gulp.task('app', function(){
    var options = {
        uri: 'localhost:9000',
        app: 'firefox'
    };
    gulp.src(__filename)
        .pipe(open(options));
});

gulp.task('default', ['webserver', 'app']);