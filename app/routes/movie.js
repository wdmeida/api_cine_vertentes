module.exports = function(app) {
	var controller = app.controllers.movie;

	app.route('/movies').get(controller.getAll);
}
