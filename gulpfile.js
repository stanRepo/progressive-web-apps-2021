const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
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

gulp.task("js", function () {
  return gulp
    .src([
      "public/javascripts/start-service-worker.js",
      "public/javascripts/sw.js",
      "public/javascripts/main.js",
      "public/javascripts/renderNetworkStatus.js",
      "public/javascripts/colorPCTChange.js",
    ])
    .pipe(minify({ noSource: true }))
    .pipe(gulp.dest("./_dist/js"));
});
