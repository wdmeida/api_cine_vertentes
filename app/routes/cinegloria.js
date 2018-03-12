module.exports = function(app){
    var cinegloriaController = app.controllers.cinegloria;

    app.route('/api/v1/cinegloria/movies').get(cinegloriaController.getMoviesCineGloria);
    app.route('/api/v1/cinegloria/nextmovies').get(cinegloriaController.nextMoviesCineGloria);
}
