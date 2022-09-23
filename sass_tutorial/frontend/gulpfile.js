// gulp用設定スクリプト
const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  // index.scssをもとにして、cssをビルドする
  return src('mylib/**/*.scss')
  // sassコンパイル実行
    .pipe(sass())
    // cssフォルダー以下に保存
    .pipe(dest('css'))
}

function watchTask() {
  // index.scss の変更をwatchして buildStyleを実行する関数
  watch(['mylib/**/*.scss'], buildStyles)
}

// gulp コマンドで実行する関数の設定. build, watchが起動する
exports.default = series(buildStyles, watchTask)