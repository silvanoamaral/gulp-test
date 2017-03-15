// instanciando módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

/*
**
	Para configurar a minificação, precisamos definir 3 ações:

	1 – recuperar os arquivos fonte na pasta de origem;
	2 – aplicar a minificação (uglify);
	3 – colocar o resultado na pasta de destino.
*/
gulp.task('scripts', function() {
    return gulp
        .src(['src/js/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));      
});

/*
**
	Monitorar alterações na pasta src/js e rodar a tarefa ‘scripts’, 
	responsável pela minificação.
*/
gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', function(event) {
        gutil.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('scripts');
    });
});

/*
**
	Arquivos estão no Github
	Agora precisa aprender a criar uma branch, fazer as alterações e depois voltar para master principal
	Fazer um merge
*/