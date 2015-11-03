var gulp = require("gulp"),
	typescript = require("gulp-typescript");
	
gulp.task("build:typescript", function() {
	gulp.src(["app/src/users/**/*.ts"])
	.pipe(typescript({
		target: "ES5",
		
	}))
	.pipe(gulp.dest("app/src/users"));
});