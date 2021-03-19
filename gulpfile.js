const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");

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

gulp.task("js", function () {
  return gulp
    .src([
      "./public/javascripts/service-worker.js",
      "./public/javascripts/start-service-worker.js",
    ])
    .pipe(minify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("_dist/js"));
});
