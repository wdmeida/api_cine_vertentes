//Importa os módulos que serão utilizados.
const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const allowCors = require('./cors');

module.exports = function() {
	const app = express();

	//Configurações da aplicação.
	app.set('port', process.env.PORT || 8080);

	//Solicita ao bodyParser que realize o parse de json e requisições com o corpo x-www-form-urlencoded.
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(allowCors);
	app.use(require('method-override')());

	//Carrega todos os scripts das pastas app/models, app/controller e app/routes e adiciona na instância do Express.
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};
