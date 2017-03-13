
angular.module('cinevertentes').factory('CinePlaza', function($resource) {
    return $resource('/api/v1/cineplaza/movies', {}, {
        'query' : {method: 'GET', isArray: false }
    });
});