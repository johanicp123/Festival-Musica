const {src,dest,watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');
function css(done){
   src('src/scss/**/*.scss') //identificar el archivo de sass
    .pipe(plumber())
    .pipe(sass())//compilarlo
    .pipe(dest('build/css'))//almacenarlo en el disco duro

    done();//callbackque avsa a gulp cuando llegamos al final
}

function dev(done){
    watch('src/scss/**/*.scss',css)
}

exports.css = css;
exports.dev = dev;