//Importa os módulos que serão utilizados.
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	//Configurações da aplicação.
	app.set('port', process.env.PORT || 80);

	//Template engine que será usado para gerar as views e onde ficarão armazenadas.
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	app.use(express.static('./public'));

	//Solicita ao bodyParser que realize o parse de json e requisições com o corpo x-ww-form-urlencoded.
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	//Carrega todos os cripts das pastas app/models, app/controller e app/routes e adiciona na instância do Express.
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};
