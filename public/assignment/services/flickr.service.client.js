(function(){
    angular
        .module("WebAppMaker")
        .factory("FlickrService", FlickrService);


    function FlickrService($http) {

        var key = "8ce912aa7642ee64767e30bd13575d98";
        var secret = "957cd22dfae64bb0";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT&callback=JSON_CALLBACK";
        var sampleURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=57b480dfc5cb523391b1e791f5fb48fc&text=lego&format=json&nojsoncallback=1&auth_token=72157669069115885-dc7943169635e389&api_sig=04178d47421af22c0c7b3c5fd4d9ff62";



        var api = {
            searchPhotos : searchPhotos
        };
        return api;

        function searchPhotos(text) {
            var url = urlBase.replace("API_KEY", key)
                .replace("TEXT", text);
            return $http.get(url);
        }









    }
})();