//Permet l'utilisation de gulp

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require ('reactify'); //convertie JSX en JS
var source = require ('vinyl-source-stream'); //convertie les string en stream/flux

//crée le dossier dist qui contiendra une copie du projet il modifira en fonction des fichiers du dossier src 
gulp.task ('browserify', function(){
    browserify('./src/js/main.js')
    .transform('reactify') // <= transforme JSX en JS
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});


//gulp.watch permet de mettre à jour automatiquement gulp et donc le dossier dist
gulp.task('default', ['browserify', 'copy'], function(){
    return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});