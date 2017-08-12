var MovieClass = require('../models/Movie');
//Módulo responsável por fazer o parser do html.
var cheerio = require('cheerio');
var request = require('request');
var constants = require('../resources/constants');

module.exports = function(app) {
    var cineplazaController = {}

    //Controller getCinePlaza
	cineplazaController.getMoviesCinePlaza = function(req, res) {
		//Obtém a url do site.
		url = constants.url.CINE_PLAZA;

		//Realiza a requisição aos dados da página.
		request(url, function(error, response, html) {
			respObj = {};
			respObj.cod = 0;
			
			//Verifica se ocorreu algum erro na requisição.
			if (error) {
				respObj.cod = 500;
				res.status(500).json(respObj);
			} else {
				respObj.cod = 200;
				//Carrega os dados para realizar o parse.
				var $ = cheerio.load(html);		
				//Obtém a data da programação e os parâmetros.
				respObj.week = $('table table tr').first().children('td:nth-child(1)').children('p:nth-child(3)')
																		.text().replace(/\s{2,}/g,' ').split('ão de')[1];
				respObj.movies = getMoviesCinePlaza($);
				res.status(200).json(respObj);
			}
		});
	};
	return cineplazaController;
};

//Extrai as informações dos filmes em cartaz no Cine Plaza.
function getMoviesCinePlaza($){
	//Obtém o objeto a ser percorrido com os dados dos filmes.
	var tableInfoMovies = $('table table tr');
	var movies = [];

	//Percorre os dados extraídos do html obtendo as informações dos filmes.
	tableInfoMovies.each(function(index, element) {
		//Verifica se não é a primeira nem a última posição.
		if(index != 0 && index != tableInfoMovies.length - 1){
			var Movie = new MovieClass();
			//Obtém os dados dos filmes.
			Movie.name = $(this).children('td:nth-child(3)').children('p').children('font').children('strong')
																.children('span').text().replace(' -','').trim();
			Movie.cover = constants.url.CINE_PLAZA + $(this).children('td:nth-child(1)').children('img').attr('src');
			Movie.trailer = $(this).children('td:nth-child(2)').children('object').children('embed').attr('src');
			Movie.genre = $(this).children('td:nth-child(3)').children('p:nth-child(2)').text().replace('Genero: ','');
			var durationAndClassification = $(this).children('td:nth-child(3)').children('p:nth-child(3)').text().split('\n'); 
			Movie.duration = durationAndClassification[0].trim().replace('Duraçao: ','');
			console.log(durationAndClassification[1]);
			Movie.classification = getClassificationResponse(durationAndClassification, 'Não informada');
			Movie.exibition = $(this).children('td:nth-child(3)').children('p').text().split('- ').slice(1).join('-')
															.replace(/\s{2,}/g,' ').split('Genero')[0];
			Movie.week_exibition = $('table table tr').first().children('td:nth-child(1)').children('p:nth-child(3)')
																		.text().replace(/\s{2,}/g,' ').split('ão de')[1];
			movies.push(Movie);
		}		
	});
	return movies;
};//getMoviesCinePlaza()

function getClassificationResponse(durationAndClassification, response) {
	let message = '';
	try {
		message = durationAndClassification[1].trim().replace('Classificaçao: ','');
	} catch (error) {
		message = 'Não informado';
	}
	return message;
}