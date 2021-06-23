const gulp = require("gulp")


/*
// 创建gulp任务
const task1 = (cb) => {
  console.log('Task1 is running')
  cb()
}

const task2 = (cb) => {
  console.log('Task2 is running')
  cb()
}

const task3 = (cb) => {
  console.log('Task3 is running')
  cb()
}

// 旧版声明任务
gulp.task('task4', (cb) => {
  console.log('task4 is running')
  cb()
})

// 导出gulp任务
module.exports = {
  // >> gulp task1
  task1,
  // 如果使用default 命令行可以省略任务名称  >> gulp
  default: task2
}
*/






/* gulp 组合任务 */
/*
const task1 = (cb) => {
  setTimeout(() => {
    console.log('task1')
    cb()
  }, 1000);
}

const task2 = (cb) => {
  setTimeout(() => {
    console.log('task2')
    cb()
  }, 1000);
}

const task3 = (cb) => {
  setTimeout(() => {
    console.log('task3')
    cb()
  }, 1000);
}

const task4 = (cb) => {
  setTimeout(() => {
    console.log('task4')
    cb()
  }, 1000);
}

// 任务并行执行
exports.p = gulp.parallel(task1, task2, task3)

// 任务串行执行
exports.s = gulp.series(task1, task2, task3)

// 先执行任务1,然后并行执行任务2,3再执行任务4
exports.a = gulp.series(task1, gulp.parallel(task2, task3), task4)
*/




/* gulp 文件操作 */

/*
// 输入（读取流） -> 加工（转换流） -> 输出（写入流）
const style = () => {
  // 流 就是异步操作
  return gulp.src('src/styles/style.less', { base: 'src' }).pipe(gulp.dest('dist'))
}


/* 构建样式文件 */

const less = require('gulp-less')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

const style = () => {
  return gulp.src('src/styles/*.less', { base: 'src' })
              .pipe(less())
              .pipe(autoprefixer())
              .pipe(cleanCss())
              .pipe(rename({
                'extname': '.min.css'
              }))
              .pipe(gulp.dest('dist'))
}



/* 脚本构建 */

const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
// const rename = require('gulp-rename')

const script = () => {
  return gulp.src('src/js/*.js', { base:'src' })
          .pipe(babel({
            presets: ['babel-preset-env']
          }))
          .pipe(uglify())
          .pipe(rename({
            extname: '.min.js'
          }))
          .pipe(gulp.dest('dist'))
}


/* 构建页面 */

const htmlmin = require('gulp-htmlmin')
const html = () => {
  return gulp.src('src/html/*.html')
          .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
          }))
          .pipe(gulp.dest('dist'))
}


/* 构建图片 */
const imagemin = require("gulp-imagemin")

const image = () => {
  return gulp.src('src/img/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(gulp.dest('dist'))
}


/* 清除输出目录 */
const del = require('del')
const clean = () => {
  return del(['dist']) 
}


/* 服务发布 */
const broswerSync = require('browser-sync')
const bs = broswerSync.create()
const serve = () => {
  gulp.watch('src/html/*.html', html)
  gulp.watch('src/styles/*.less', style)
  gulp.watch('src/js/*.js', script)
  // 初始化服务
  bs.init({
    notify: false,
    server: {
      baseDir: './dist'
    },
    files: ['dist/**', 'src/**']
  })
}



/* 组合任务 */
const build = gulp.parallel(style, script, html)
const dev = gulp.series(clean, build)

// 导出任务
module.exports = {
  style,
  script,
  html,
  image,
  clean,
  build,
  dev,
  serve
}

