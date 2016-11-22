/**
 * Created by Josue on 22/11/16.
 */
const config = require('./gulp.config.js')();
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugs = gulpLoadPlugins();

const argv = require('yargs').argv;
const env = process.env.NODE_ENV || 'local';
let optimize = false;



if (env === 'staging' || env === 'production') {
    log('static files will be optimized!!');
    optimize = true;
}

/**
 * Compiling jade into html for components.
 */
gulp.task('compile-jade', () => {
    log('compiling jade into html');


    return gulp
        .src(`${config.appFolder }**/*.jade`)
        .pipe(plugins.jade())
        .pipe(plugins.htmlmin())
        .pipe(gulp.dest(config.appFolder));
});


gulp.task('template-cache', ['compile-jade'], () => {


    return gulp.src(`${config.appFolder }**/*.html`)
        .pipe(plugins.angularTemplatecache(config.templateCache.file, config.templateCache.options))
        .pipe(gulp.dest(config.appFolder));
});


/**
 * Compiling scss into css.
 */
gulp.task('styles-app', () => {
    log('compiling app scss into css');
    return gulp
        .src(config.mainscss)
        .pipe(plugins.sass())
        .pipe(plugins.rename(`${config.projectName}.css`))
        .pipe(plugins.if(optimize, plugins.combineMq()))
        .pipe(plugins.if(optimize, plugins.csso()))
        .pipe(plugins.if(optimize, plugins.rev()))
        .pipe(gulp.dest(config.build));
});

