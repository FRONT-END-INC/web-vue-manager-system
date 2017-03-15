// 引入 gulp
var gulp = require('gulp'); 
var connect = require("gulp-connect");

// run server
gulp.task('serve', function(){

	// publish
    connect.server({
        root: "dist",
        port: 8000,
        // index: false
    });
});