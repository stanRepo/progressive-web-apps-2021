const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const minifyejs = require("gulp-minify-ejs");
// css tasks

gulp.task("css", function () {
  return (
    gulp
      .src("./public/stylesheets/*.css")
      // .pipe(plumber())
      // .pipe(css({ outputStyle: "expanded" }))
      .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(rename({ suffix: ".min" }))
      // .pipe(plumber.stop())
      .pipe(gulp.dest("./_dist/static"))
  );
});

// watch files
gulp.task("watch", function () {
  gulp.watch("./public/stylesheets/*.css");
});

gulp.task("minify-ejs", function () {
  return gulp
    .src(["./views/*.ejs", "./views/partials/*.ejs"])
    .pipe(minifyejs())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./_dist/src"));
});
