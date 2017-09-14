var MovieClass = require('../models/Movie');
//Módulo responsável por fazer o parser do html.
var cheerio = require('cheerio');
var request = require('request');
var constants = require('../resources/constants');

module.exports = function(app) {
	var cinegloriaController = {
		
		//controller responsável por exibir as informações dos filmes em cartaz no Cine Glória.
		getMoviesCineGloria : function(req, res){
			url = constants.url.CINE_GLORIA_PROGRAMACAO;

			request(url, function(error, response, html) {
				respObj = {};
				respObj.cod = 0;

				if (error) {
					respObj.cod = 500;
					res.status(500).json(respObj);
				} else {
					respObj.cod = 200;

					var $ = cheerio.load(html);
					respObj.movies = getMoviesCineGloria($);
					res.status(200).json(respObj);
					//console.log(respObj);
				}
			});
		},

		//controller responsável por exibir as informações do próximos filmes a entrar em cartaz no Cine Glória.
		nextMoviesCineGloria : function(req, res) {
			url = constants.url.CINE_GLORIA_PROXIMOS;

			request(url, function(error, response, html) {
				respObj = {};
				respObj.cod = 0;

				if (error) {
					respObj.cod = 500;
					res.status(500).json(respObj);
				} else {
					respObj.cod = 200;

					var $ = cheerio.load(html);
					respObj.movies = getNextMoviesCineGloria($);
					res.status(200).json(respObj);
					//console.log(respObj);
				}
			});
		}
	};

	return cinegloriaController;
};


//Extrai as informações dos filmes em cartas no Cine Glória.
function getMoviesCineGloria($){
	//Obtém o objeto a ser percorrido com os nomes dos filmes.
	var tableInfoMovies = $('#content').children('div:nth-child(1)').children('div:nth-child(1)').children('div:nth-child(1)').children('div');
	var movies = [];

	//Percorre os dados extraídos do html obtendo as informações dos filmes.
	tableInfoMovies.each(function (index, element){
		if(index != 0 ){
			var Movie = new MovieClass();
			
			Movie.name = titleize( 
														 $(this).children('div:nth-child(2)')
																		.children('div:nth-child(1)')
																		.children('span:nth-child(1)')
																		.children('strong')
																		.text().trim()
																	);
			// Movie.cover =  constants.url.CINE_GLORIA + $(this).children('img:nth-child(1)').attr('src');
			Movie.cover = 'https://www.samservicos.com.br/wp-content/uploads/2015/11/sem-imagem-avatar.png';
			
			Movie.trailer = $(this).children('div:nth-child(2)')
														 .children('div:nth-child(2)')
														 .children('div:nth-child(1)')
														 .children('a')
														 .attr('href').replace('"https://https:','https:').trim();
			
			Movie.local = $(this).children('div:nth-child(2)')
													 .children('div:nth-child(2)')
													 .children('div:nth-child(1)')
													 .children('span:nth-child(5)')
													 .text().replace(/\s{2,}/g,' ').trim();
			
			Movie.genre = $(this).children('div:nth-child(2)')
													 .children('div:nth-child(2)')
													 .children('div:nth-child(1)')
													 .children('span:nth-child(3)')
													 .text().replace(/\s{2,}/g,' ')
													 .replace('Gênero:','').trim();
			
			Movie.duration = $(this).children('div:nth-child(2)')
															.children('div:nth-child(2)')
															.children('div:nth-child(1)')
															.children('span:nth-child(1)')
															.text().replace(/\s{2,}/g,' ').trim();
			
			Movie.classification = 'Não informada';
			
			Movie.exibition = $(this).children('div:nth-child(2)')
															 .children('div:nth-child(2)')
															 .children('div:nth-child(1)').clone()
															 .children()
															 .remove().end().text()
															 .replace(/\s{2,}/g,' ').trim();
			
			Movie.week_exibition = $(this).children('div:nth-child(2)')
																		.children('div:nth-child(1)')
																		.children('span:nth-child(2)')
																		.text().replace(/\s{2,}/g,' ').trim();
			
			movies.push(Movie);
		}
	});
	return movies;
}//getMoviesCineGloria()

//Extrai as informações dos próximos filmes a entrarem em cartas.
function getNextMoviesCineGloria($){
	//Obtém o objeto a ser percorrido com os nomes dos filmes.
	var tableInfoMovies = $('#content').children('div:nth-child(1)').children('div:nth-child(1)').children('div:nth-child(1)')
								.children('div:nth-child(3)').children('div:nth-child(1)').children('div');
	var movies = [];

	//Percorre os dados extraídos do html obtendo as informações dos filmes.
	tableInfoMovies.each(function (index, element){
		if(index != tableInfoMovies.length - 1 ){
				var Movie = new MovieClass();
				Movie.name = $(this).children('div:nth-child(2)').children('a:nth-child(1)').text().trim();
				Movie.cover =  constants.url.CINE_GLORIA + $(this).children('a:nth-child(1)').children('img').attr('src');
				Movie.genre = $(this).children('div:nth-child(2)')
														.clone().children().remove().end() //Obtém os elementos que não estão envolvidos por tags.
														.text().replace(/\s{2,}/g,' ').replace('Gênero:','').trim();
				movies.push(Movie);
			}
		});
	return movies;	
}//getNextMoviesCineGloria()

function titleize(title) {
	return title.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
}

