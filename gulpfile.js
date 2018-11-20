const { spawn } = require('child_process')
const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const css = require('gulp-css')
sass.compiler = require('node-sass');
 
gulp.task('sass', () =>
  gulp
    .src('src/renderer/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/'))
)

// 1. Copy the index.html as is
gulp.task('html', () =>  
  gulp
    .src('src/renderer/index.html')
    .pipe(gulp.dest('app/'))
)

gulp.task('js', () =>
  gulp
    .src(['src/renderer/**/*.js'])
    .pipe(babel({
      presets: ['@babel/env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-class-properties']
    }))
    .on('error', console.error)
    // .pipe(babel({ "presets": ["@babel/preset-env"] }))
    .pipe(gulp.dest('app/'))
)

gulp.task('compile', ['html', 'sass', 'js'])

gulp.task('run', ['compile'], () =>
  spawn(
    'node_modules/.bin/electron', 
    ['.'], 
    { stdio: 'inherit' }
  ).on('close', () => process.exit())
)

gulp.task('start', ['run'], () => 
  gulp.watch('src/renderer/**/*.*', ['compile']))
