const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
 

const fs = require("fs");
const path = require("path");

// Delete Old JS Files in _dist Directory
function deleteOldJS() {
  fs.readdir("./_dist/js", (e, f) => {
    if (e) throw e;
    for (const file of f) {
      fs.unlinkSync(path.join("./_dist/js", file), (e) => {
        if (e) throw e;
      });
      console.log("Deleted Old JS");
    }
  });
}
deleteOldJS();

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

// Minify JS
gulp.task("js", function () {
  return gulp
    .src([
      "public/javascripts/main.js",
      "public/javascripts/renderNetworkStatus.js",
      "public/javascripts/colorPCTChange.js",
      "public/javascripts/marketSentiment.js"
    ])
    .pipe(minify({ noSource: true }))
    .pipe(sourcemaps.init())
    .pipe(concat('concatenated.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./_dist/js"));
});
