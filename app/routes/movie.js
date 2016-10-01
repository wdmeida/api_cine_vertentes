module.exports = function(app) {
	var controller = app.controllers.movie;

	app.route('/api/v1/cineplaza/movies').get(controller.getCinePlaza);
	app.route('/api/v1/cinegloria/movies').get(controller.getCineGloria);
}
