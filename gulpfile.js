
var gulp = require('gulp');

var server = require('browser-sync').create();
var connect = require("gulp-connect");

gulp.task("server",function(){
	server.init({
		server:"./",
		port:8080
	});
	gulp.watch('./index.html').on("change",server.reload);
	gulp.watch('./view/*.html').on("change",server.reload);
	gulp.watch('./css/*.css').on("change",server.reload);
	gulp.watch('./scripts/*.js').on("change",server.reload);
});

gulp.task('webserver',function(){
	connect.server({
	        livereload: true,
	        port:8080
	    });
});


gulp.task('default',['server']);


