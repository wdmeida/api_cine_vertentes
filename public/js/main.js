angular.module('cinevertentes', ['ngRoute', 'ngResource', 'ngMaterial'])
    .config(['$resourceProvider', function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }])
    .config(function($routeProvider){
        $routeProvider.when('/cineplaza/movies',{
            controller: 'CinePlazaController',
            templateUrl: 'partials/movies.html'
        });

        $routeProvider.otherwise({redirectTo: '/cineplaza/movies'});
    });