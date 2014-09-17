var gulp = require('gulp');
var shell = require('gulp-shell');
var downloadatomshell = require('gulp-download-atom-shell');

gulp.task('downloadatomshell', function(cb){
    downloadatomshell({
        version: '0.16.2',
        outputDir: 'binaries'
    }, cb);
});

gulp.task("setuplink", shell.task([
    'ln -s app binaries/Atom.app/Contents/Resources/app'
]));

gulp.task('demo', shell.task([
    'binaries/Atom.app/Contents/MacOS/Atom app'
]));

