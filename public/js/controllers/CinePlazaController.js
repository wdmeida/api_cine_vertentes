angular.module('cinevertentes').controller('CinePlazaController', function($scope, CinePlaza) {
    
    $scope.week = '';
    $scope.movies = [];
    $scope.filter = '';
    $scope.message = {text: ''};

    function getMovies() {
        CinePlaza.query(
            function(movies){
                $scope.movies = movies.movies;
                $scope.week = movies.week;
            },
            function(erro){
                console.log(erro);
                $scope.mensage = {
                    text: "Não foi possível obter os filmes"
                };
            }
        );
    }

    getMovies();

});