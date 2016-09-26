module.exports = function(app) {
	var controller = app.controllers.movie;

	app.route('/api/v1/movies').get(controller.getAll);
}
