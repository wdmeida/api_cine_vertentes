module.exports = function(app) {
	var cineplazaController = app.controllers.cineplaza;
	
	app.route('/api/v1/cineplaza/movies').get(cineplazaController.getMoviesCinePlaza);
};
