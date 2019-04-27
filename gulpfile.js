// Gulp Modules
var pkg = require('./package.json');
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var sftp = require('gulp-sftp-new');
var changed = require('gulp-changed');
var gulpSequence = require('gulp-sequence');
var pug = require('gulp-pug');
var path = require('path'); 
var postcss = require('gulp-postcss'); 
var autoprefixer = require('autoprefixer');
var babel = require('gulp-babel');

// SRC Directories
var srcSASS = 'src/scss/*.scss';
var srcCSS = 'src/css/*.css';
var srcImg = 'src/img/**/*.{gif,jpg,png,svg,ico}';
var srcHTML = ['**/*.{shtml,php,html}','!node_modules','!node_modules/**','!.git','!.git/**','!vendor','!vendor/**'];
var srcJS = 'src/js/**/*.js';
var srcVendor = 'vendor/**/*';
var srcPug = ['src/views/**/*.pug'];


// Set the banner content
var banner = ['/*!\n',
   ' * Iowa80 July 4th Landing Page - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// CSS Processor
gulp.task('minify-css', ['sass'], function() {
    return gulp.src(srcCSS)
        .pipe(postcss([ autoprefixer() ]))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Javascript Processor
gulp.task('minify-js', function() {
    return gulp.src(srcJS)
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy Vendor Libraries and Images from SRC
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('dist/vendor/bootstrap'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('dist/vendor/jquery'))

    gulp.src(['node_modules/lazysizes/lazysizes.js', 'node_modules/lazysizes/lazysizes.min.js'])
        .pipe(gulp.dest('dist/vendor/lazysizes'))
    
    gulp.src(srcImg)
        .pipe(gulp.dest('dist/img'))

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('dist/vendor/font-awesome'))
})

// SASS Processor
gulp.task('sass', function() {
    return gulp.src(srcSASS)
        .pipe(sass())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// PUG Template Processor
gulp.task('views', function() {
  return gulp.src(srcPug)
  .pipe(pug({pretty:true}))
  .pipe(gulp.dest('dist'))
});

// Default Gulp Task
gulp.task('default', ['sass', 'minify-css', 'minify-js', 'copy', 'views']);

// Development Gulp Task that runs until interrupted 
gulp.task('dev', ['views', 'sass', 'minify-css', 'minify-js', 'copy'], function() {
    gulp.watch(srcSASS, ['sass']);
    gulp.watch(srcCSS, ['minify-css']);
    gulp.watch(srcJS, ['minify-js']);
    gulp.watch(srcPug, ['views']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch(srcJS, browserSync.reload);
});
