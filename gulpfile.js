const {src, dest, watch, series} = require("gulp");
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('./stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(dest('./stylesheets/css'))
}

function watchTask(){
    watch(['./stylesheets/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask);