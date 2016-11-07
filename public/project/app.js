(function (){ // IIFE
    angular
        .module("MovieApp", [])
        .controller("MovieSearchController",MovieSearchController);

    function MovieSearchController($http) {
        var vm = this;
        vm.searchMovieByTitle = searchMovieByTitle;

        function searchMovieByTitle(title) {
            var url = "http://www.omdbapi.com/?s=" + title;
            $http
                .get(url)
                .success(function (result) {
                    vm.movies = result.Search;

                })


        }
    }

})();