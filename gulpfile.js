// Импорт модулей Gulp
import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import browserSync from "browser-sync";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";

const sass = gulpSass(dartSass);
const bs = browserSync.create();
const { src, dest, watch, series } = gulp;

// Путь к файлам
const paths = {
  scss: "src/sass/**/*.scss",
  css: "src/css",
  html: "src/**/*.html",
};

// Компиляция SCSS в CSS
function styles() {
  return src(paths.scss)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({
      suffix: ".min" 
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.css))
    .pipe(bs.stream());
}

// Перезагрузка браузера
function reload(done) {
  bs.reload();
  done();
}

// Сервер разработки
function serve() {
  bs.init({
    server: {
      baseDir: "src",
    },
  });

  watch(paths.scss, styles);
  watch(paths.html, reload);
}

// Экспорт задач
export const build = styles;
export default series(build, serve);
